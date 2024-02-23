import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
    ...(mode === 'light' ?
        {
            purple: {
                100: "#d8d8e2",
                200: "#b2b2c6",
                300: "#8b8ba9",
                400: "#65658d",
                500: "#3e3e70",
                600: "#32325a",
                700: "#252543",
                800: "#19192d",
                900: "#0c0c16"
            },

            green: {
                100: "#cee8e7",
                200: "#9dd1ce",
                300: "#6bbbb6",
                400: "#3aa49d",
                500: "#098d85",
                600: "#07716a",
                700: "#055550",
                800: "#043835",
                900: "#021c1b"
            },

            black: {
                100: "#cccccc",
                200: "#999999",
                300: "#666666",
                400: "#333333",
                500: "#000000",
                600: "#000000",
                700: "#000000",
                800: "#000000",
                900: "#000000"
            },

            white: {
                100: "#ffffff",
                200: "#ffffff",
                300: "#ffffff",
                400: "#ffffff",
                500: "#ffffff",
                600: "#cccccc",
                700: "#999999",
                800: "#666666",
                900: "#333333"
            }
        } : {
            purple: {
                900: "#0c0c16",
                800: "#19192d",
                700: "#252543",
                600: "#32325a",
                500: "#3e3e70",
                400: "#65658d",
                300: "#8b8ba9",
                200: "#b2b2c6",
                100: "#d8d8e2",
            },

            green: {
                100: "#021c1b",
                200: "#043835",
                300: "#055550",
                400: "#07716a",
                500: "#098d85",
                600: "#3aa49d",
                700: "#6bbbb6",
                800: "#9dd1ce",
                900: "#cee8e7",
            },

            black: {
                100: "#000000",
                200: "#000000",
                300: "#000000",
                400: "#000000",
                500: "#000000",
                600: "#333333",
                700: "#666666",
                800: "#999999",
                900: "#cccccc",
            },

            white: {
                100: "#333333",
                200: "#666666",
                300: "#999999",
                400: "#cccccc",
                500: "#ffffff",
                600: "#ffffff",
                700: "#ffffff",
                800: "#ffffff",
                900: "#ffffff",
            }
        })
});

export const themeSettings = (mode) => {
    const color = tokens(mode);

    return {
        pallete: {
            mode: mode,
            ...(mode === 'light' ?
                {
                    primary: {
                        main: color.purple[500],
                    },
                    secondary: {
                        main: color.green[500],
                    },
                    neutral: {
                        main: color.white[500],
                    },
                    background: {
                        default: color.white[100],
                    },
                } : {
                    primary: {
                        main: color.purple[500],
                    },
                    secondary: {
                        main: color.green[500],
                    },
                    neutral: {
                        main: color.white[500],
                    },
                    background: {
                        default: color.purple[900],
                    },
                })
        },
        typography: {
            fontFamily: 'Poppins, sans-serif',
            fontSize: 16,
            h1: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 32, 
            },
            h2: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 24,
            },
            h3: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 20,
            },
            h4: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 16,
            },
            h5: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 12,
            },
            h6: {
                fontFamily: 'Poppins, sans-serif',
                fontSize: 10,
            }    
        }
    }
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });

  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };