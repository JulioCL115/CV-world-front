import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import updateCategory from "../../redux/actions/categories/updateCategory";
import getCategoryById from "../../redux/actions/categories/getCategoryById";

const UpdateCategory = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    const [initialValues, setInitialValues] = useState({
        name: ""
    })

    useEffect(() => {
        const getCategoryData = async () => {
            const categoryData = await getCategoryById(categoryId);
            if (categoryData) {
                setInitialValues({ name: categoryData.name });
            }
        };

        getCategoryData();
    }, [categoryId, dispatch]);

    console.log(initialValues.name);


    const nameRegex = /^[a-zA-Z\s-]+$/;

    const checkoutSchema = yup.object().shape({
        name: yup
            .string()
            .matches(nameRegex, "Sólo puede contener letras y guiones")
            .required("required"),
    });


    const handleFormSubmit = async (values) => {
        await updateCategory(categoryId, values.name);

        setTimeout(() => {
            navigate("/admin/categories");
        }, 2000);
    };

    return (
        <Box m="20px">
            <Typography
                variant="h1"
                color={colors.black[500]}
                fontWeight="600"
                marginBottom="50px"
                marginTop="45px"
            >
                Editar Idioma
            </Typography>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                enableReinitialize
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Nombre"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit"
                                color="secondary"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#098D85",
                                    '&:hover': {
                                        backgroundColor: "#098D85",
                                    }
                                }}
                                disabled={isSubmitting}
                            >
                                Actualizar
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


export default UpdateCategory;