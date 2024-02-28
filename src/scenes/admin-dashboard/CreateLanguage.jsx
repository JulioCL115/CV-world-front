import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import postLanguage from "../../redux/actions/languages/postLanguage";

import { useNavigate } from "react-router-dom";

const CreateLanguage = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();

    const nameRegex = /^[a-zA-Z\s-]+$/;

    const checkoutSchema = yup.object().shape({
        name: yup
            .string()
            .matches(nameRegex, "Sólo puede contener letras y guiones")
            .required("required"),
    });

    const initialValues = {
        name: "",
    };

    const handleFormSubmit = async (values) => {
        try {
            await postLanguage(values.name);

            setTimeout(() => {
                navigate("/admin/languages");
            }, 2000);
        } catch (error) {
            console.log(error);
        }
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
                Crear Idioma
            </Typography>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
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
                                Crear
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};


export default CreateLanguage;