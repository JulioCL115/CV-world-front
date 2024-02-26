import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import postLanguage from "../../redux/actions/languages/postLanguage"

const CreateLanguage = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const nameRegex = /^[a-zA-Z\s-]+$/;

    const checkoutSchema = yup.object().shape({
        name: yup
            .string()
            .matches(nameRegex, "Phone number is not valid")
            .required("required"),
    });

    const initialValues = {
        name: "",
    };
    
    const handleFormSubmit = (values) => {
        postLanguage(values.name);
    };

    return (
        <Box m="20px">
            <Typography
                variant="h1"
                color={colors.black[500]}
                fontWeight="600"
            >
                Crear lenguage
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
                    <form onSubmit={handleSubmit}>
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
                                Crear lenguage
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};



export default CreateLanguage;