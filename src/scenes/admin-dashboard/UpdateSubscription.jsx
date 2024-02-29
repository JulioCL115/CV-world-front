Luigi Jirafa Canceriana
juliocl115
En línea
Matias Salisky — 30/01/2024 10:18
SaliskyMatias@gmail.com
faigther1023 — 30/01/2024 10:42
faider27pinilla@gmail.com
Matias Salisky — 31/01/2024 18:51
git remote set-url origin <nueva_URL_del_repositorio_remoto>
git remote set-url origin  https://github.com/JulioCL115/CV-world.git
GitHub
GitHub - JulioCL115/CV-world
Contribute to JulioCL115/CV-world development by creating an account on GitHub.
GitHub - JulioCL115/CV-world
leodancondori — 31/01/2024 18:59
git config pull.rebase true
Matias Salisky — 05/02/2024 13:38
git checkout -b matias
Jose Sanchez — 05/02/2024 16:43
como van chicos?
jaime — 14/02/2024 15:15
const body = {
        items: [
            {
                title: req.body.title,
                unit_price:Number(req.body.price),
                currency_id: "USD",
                quantity:Number(req.body.quantity)
            }
        ],
        back_urls : {
            success: "https://7eee-190-67-196-176.ngrok-free.app/payment/success",
            failure: "http://localhost:3000/payment/pending",
            pending: "https://7eee-190-67-196-176.ngrok-free.app/ /"
        },
        Notification_url :https://7eee-190-67-196-176.ngrok-free.app/payment/webhook/${idKey},
    }
jaime — 14/02/2024 15:27
const createOrder = async (req,res) => {
    const {idKey} = req.params
    try{
    const client = new MercadoPagoConfig({accessToken:"TEST-2735218977605833-012419-e6d876a59733cd50c1253ffd9c89fa90-1651807239"});

    const body = {
Expandir
message.txt
4 KB
Matias Salisky — 17/02/2024 13:07
----------------------------------------
Andres Bernardi — 19/02/2024 3:20
ARCHIVO EN .ENV
ACCES_TOKEN = TEST-1127404855878397-021315-d22d177cf405ab6d16972fd357795017-1680068297
Matias Salisky — 19/02/2024 3:28
-----------------------
Julio — 23/02/2024 17:29
axios.defaults.baseURL+"
Imagen
Julio — 26/02/2024 10:27
@Andres Bernardi
Julio — 27/02/2024 11:48
https://cv-world-front-6zpi9fjbe-my-team-83a89b24.vercel.app/
jaime — 27/02/2024 12:33
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the public folder during the build.
      Only files inside the public folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running npm run build.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run npm start or yarn start.
      To create a production bundle, use npm run build or yarn build.
    -->
  </body>
</html>
web.dev
Add a web app manifest  |  Articles  |  web.dev
The web app manifest is a simple JSON file that tells the browser about your web application and how it should behave when installed on the user's mobile device or desktop.
Julio — 27/02/2024 16:56
https://charactercalculator.com/es/text-compare/
Comparador de textos online - Encontrar las diferencias entre dos t...
Compare dos documentos de texto y encuentre las diferencias entre ellos al usar la herramienta de comparación de texto en línea.
Imagen
https://beautifier.io/
jaime — ayer a las 13:55
//FIREBASE

FIREBASE_API_KEY="AIzaSyDWi5IyYaqd9np4XYotj1OzGiUiTXlk7uM"
FIREBASE_AUTH_DOMAIN="cv-world-7671f.firebaseapp.com"
FIREBASE_PROJECT_ID="cv-world-7671f"
FIREBASE_STORAGE_BUCKET="cv-world-7671f.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="169571410432"
FIREBASE_APP_ID="1:169571410432:web:179ab1906450498025aee5"
FIREBASE_MEASUREMENT_ID="G-X51YMWX5N9"
Julio — ayer a las 14:06
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest"  href="%PUBLIC_URL%/manifest.json"/>
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the public folder during the build.
      Only files inside the public folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running npm run build.
    -->
    <title>React App</title>

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.
      To begin the development, run npm start or yarn start.
      To create a production bundle, use npm run build or yarn build.
    -->
  </body>
</html>
web.dev
Add a web app manifest  |  Articles  |  web.dev
The web app manifest is a simple JSON file that tells the browser about your web application and how it should behave when installed on the user's mobile device or desktop.
/robots.txt
67 B 


/static/css/main.18738669.css
35 kB


/static/css/main.18738669.css.map
71 kB


/static/js/main.78e61e8d.js
1.2 MB


/static/js/main.78e61e8d.js.LICENSE.txt
7.58 kB


/static/js/main.78e61e8d.js.map
6.09 MB


/static/media/3916134.0ee45dadc096072a4d8d.webp
17 kB


/static/media/blank-profile-picture-973460_960_720.efadb13dba95b5bc918b.webp
9.35 kB


/static/media/checkout.19d2f4c18df20106993d.png
111 kB


/static/media/customer-review-3949821-3277282.b4d35d5db36a0979605b.webp
67 kB


/static/media/cv_munich-1040x1433.b06266143f4e9756d003.png
576 kB


/static/media/hr-analyzing-candidates-resume-3611324-3022084.a5c294c770514c43e643.webp
54 kB


/static/media/Logo_Round.dfea4c66cfe692bcec9d.png
36 kB


/static/media/Logo-Black.e54b0d1810abe8b9e987.png
38 kB


/static/media/Logo-White.b992f2a82f1826c7b64d.png
35 kB


/static/media/payment-approved.b94c2c2da71c7597bcdb.png
169 kB


/static/media/payment-failure.f59945eb7208a095a8d7.png
136 kB


/static/media/payment-pending.03a3040b3ccb5fef018d.png
127 kB


/static/media/resume-assessment-3611330-3022090.4981e869ca6cf7df7df6.webp
69 kB


/static/media/send-email.5a91258721b833aae39a.png
150 kB


/static/media/upload-cv.887be9beb8461ed51960.png
132 kB


/static/media/Working-Man-Illustration.47fbbcc5595b4de18133.jpg
67 kB
-----------------------------
/asset-manifest.json
2.63 kB


/favicon.ico
3.87 kB


/index.html
779 B 


/logo192.png
5.35 kB


/logo512.png
10 kB


/manifest.json
492 B
___
------------------------------------------------
mg9i4js9z
Matias Salisky — ayer a las 14:12
----------------------------------
jaime — ayer a las 14:23
``
Matias Salisky — ayer a las 14:24
-------------------------------------
jaime — ayer a las 14:25
const { MercadoPagoConfig, Preference, } = require("mercadopago");
const { ACCESS_TOKEN } = process.env
const fs = require('fs');
const path = require('path');
const transporter = require('../../nodemailer/mailer');
const ejs = require('ejs');
Expandir
message.txt
4 KB
Julio — ayer a las 17:37
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
Matias Salisky — ayer a las 17:52
heroku logs --tail
Julio — ayer a las 22:22
@Matias Salisky
Matias Salisky — ayer a las 23:45
Imagen
Julio — ayer a las 23:55
Imagen
Matias Salisky — hoy a las 0:10
--------------------------------------------------
jaime — hoy a las 0:11
import styles from "./PaymentFeedback.module.css";

import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import getUserById from "../../redux/actions/users/getUserById"
Expandir
message.txt
3 KB
Julio — hoy a las 0:31
https://cv-world-back-production.up.railway.app/cv
Matias Salisky — hoy a la 1:14
ACCESS_TOKEN=TEST-1127404855878397-021315-d22d177cf405ab6d16972fd357795017-1680068297
TESTUSER1586010681
hDePQ7wrdL
https://www.mercadopago.com.ar/developers/es/docs/checkout-api/additional-content/your-integrations/test/cards
Tarjetas de prueba - Prueba de integración - Mercado Pago Developers
Conozca las tarjetas de prueba necesarias para simular el flujo de compra con tarjetas. - Prueba de integración
jaime — hoy a la 1:20
5254 1336 7440 3564
Matias Salisky — hoy a las 3:01
--------------------------------------
Imagen
Matias Salisky — hoy a las 3:23
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from 'react';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
Expandir
message.txt
10 KB
jaime — hoy a las 3:29
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from 'react';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
Expandir
message.txt
11 KB
Matias Salisky — hoy a las 3:38
----------------------------------------------------
Matias Salisky — hoy a las 4:39
CLOUDINARY_URL=cloudinary://567121282756468:e5p0l8DVs1DHcnQRFXZ47NbXsUM@dxzykzxe4
jaime — hoy a las 4:41
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from 'react';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
Expandir
message.txt
11 KB
﻿
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from 'react';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "./theme";
import { useTheme } from "@mui/material";

import updateSubscription from "../../redux/actions/subscriptions/updateSubscription"
import getSubscriptionById from "../../redux/actions/subscriptions/getSubscriptionById"

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CreateSubscription = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { subscriptionId } = useParams();

  const nameRegex = /^[a-zA-Z\s-]+$/;

  const checkoutSchema = yup.object().shape({
    name: yup.string().matches(nameRegex, "Phone number is not valid").required("required"),
    price: yup.number().required("required"),
    included: yup.array().of(yup.string()).required("required"),
    notIncluded: yup.array().of(yup.string()).required("required"),
  });

  const [initialValues, setInitialValues] = useState({
    name: "",
    price: "",
    included: [""],
    notIncluded: [""],
  })

  useEffect(() => {
    const getSubscriptionData = async () => {
        const subscriptionData = await getSubscriptionById(subscriptionId);
        console.log('subscriptionData', subscriptionData);
        if (subscriptionData) {
          setInitialValues({
            name: subscriptionData.name || "",
            price: parseInt(subscriptionData.price) || 0,
            included: subscriptionData.included || [],
            notIncluded: subscriptionData.notIncluded || [],
          });
          console.log("After Set:", initialValues);
        }
    };
  
    getSubscriptionData();
  }, [subscriptionId, dispatch]);
  useEffect(() => {
    console.log('UPDATED INITIAL VALUES:', initialValues);
  }, [initialValues]);

  const handleFormSubmit = (values) => {
    console.log(initialValues);
    try {
      updateSubscription(subscriptionId,values);

      setTimeout(() => {
        navigate("/admin/subscriptions");
    }, 2000);
    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <Box m="20px"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center">
      <Typography
        variant="h1"
        color={colors.black[500]}
        fontWeight="600"
        marginBottom="50px"
        marginTop="45px"
        display="flex"
        alignSelf="center"
      >
        Editar suscripciÃ³n
      </Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        enableReinitialize
        display="flex"
        flexDirection="column"
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
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
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Precio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              {values.included.map((value, index) => (
                <React.Fragment key={index}>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Incluye ${index + 1}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value}
                    name={`included[${index}]`}
                    error={!!touched.included && !!errors.included}
                    helperText={touched.included && errors.included}
                    sx={{ gridColumn: "span 3" }}
                  />
                  <Button
                    type="button"
                    variant="contained"
                    color="error"
                    onClick={() => {
                      values.included.splice(index, 1);
                      handleChange({
                        target: {
                          name: "included",
                          value: [...values.included],
                        },
                      });
                    }}
                    sx={{
                      gridColumn: "span 1",
                      height: "40px",
                      width: "150px",
                      fontSize: "16px",
                      backgroundColor: "#3E3E70",
                      "&:hover": {
                        backgroundColor: "#3E3E70",
                      },
                    }}
                  >
                    Eliminar
                  </Button>
                </React.Fragment>
              ))}
              <Button
                type="button"
                variant="contained"
                onClick={() => {
                  values.included.push("");
                  handleChange({
                    target: {
                      name: "included",
                      value: [...values.included],
                    },
                  });
                }}
                sx={{
                  gridColumn: "span 1",
                  height: "40px",
                  width: "150px",
                  fontSize: "16px",
                  backgroundColor: "#098D85",
                  "&:hover": {
                    backgroundColor: "#098D85",
                  },
                }}
              >
                Agregar
              </Button>
              {values.notIncluded.map((value, index) => (
                <React.Fragment key={index}>
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`No incluye ${index + 1}`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={value}
                    name={`notIncluded[${index}]`}
                    error={!!touched.notIncluded && !!errors.notIncluded}
                    helperText={touched.notIncluded && errors.notIncluded}
                    sx={{ gridColumn: "span 3", marginTop: "30px" }}
                  />
                  <Button
                    type="button"
                    variant="contained"
                    color="error"
                    onClick={() => {
                      values.notIncluded.splice(index, 1);
                      handleChange({
                        target: {
                          name: "notIncluded",
                          value: [...values.notIncluded],
                        },
                      });
                    }}
                    sx={{
                      gridColumn: "span 1",
                      height: "40px",
                      width: "150px",
                      fontSize: "16px",
                      backgroundColor: "#3E3E70",
                      "&:hover": {
                        backgroundColor: "#3E3E70",
                      },
                    }}
                  >
                    Eliminar
                  </Button>
                </React.Fragment>
              ))}
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => {
                  values.notIncluded.push("");
                  handleChange({
                    target: {
                      name: "notIncluded",
                      value: [...values.notIncluded],
                    },
                  });
                }}
                sx={{
                  gridColumn: "span 1",
                  height: "40px",
                  width: "150px",
                  fontSize: "16px",
                  backgroundColor: "#098D85",
                  "&:hover": {
                    backgroundColor: "#098D85",
                  },
                }}
              >
                Agregar
              </Button>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                height="50px"
                width="100%"
                variant="contained"
                sx={{
                  backgroundColor: "#098D85",
                  "&:hover": {
                    backgroundColor: "#098D85",
                  },
                }}
                disabled={isSubmitting}
              >
                Actualizar
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateSubscription;
message.txt
11 KB
