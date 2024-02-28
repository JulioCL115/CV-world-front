import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import updateLanguage from "../../redux/actions/languages/updateLanguage"
import getLanguageById from "../../redux/actions/languages/getLanguageById"

const UpdateLanguage = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { languageId } = useParams();

    console.log("LANGUAGE ID: " + languageId);

    const [initialValues, setInitialValues] = useState({
        name: ""
    })

    useEffect(() => {
        const getLanguageData = async () => {
            const languageData = await getLanguageById(languageId);
            if (languageData) {
                console.log("LANGUAGE DATA: " + languageData.name);
                setInitialValues({ name: languageData.name });
            }
        };

        getLanguageData();
    }, [languageId, dispatch]);

    console.log(initialValues.name);


    const nameRegex = /^[a-zA-Z\s-]+$/;

    const checkoutSchema = yup.object().shape({
        name: yup
            .string()
            .matches(nameRegex, "Sólo puede contener letras y guiones")
            .required("required"),
    });


    const handleFormSubmit = async (values) => {
        await updateLanguage(languageId, values.name);

        setTimeout(() => {
            navigate("/admin/languages");
        }, 2000);
    };

    return (
        <Box m="20px">
            <Typography
                variant="h1"
                color={colors.black[500]}
                fontWeight="600"
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


export default UpdateLanguage;