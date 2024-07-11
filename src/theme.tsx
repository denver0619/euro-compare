import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode, Theme } from "@mui/material";
import * as colorData from "../src/assets/material-theme.json";

// color tokens
// export const colorTokens = (mode: String) =>  ({
//     ...(mode === "dark"
//         ? colorData.schemes.dark
//         : colorData.schemes.light
//     )
// })

// mui theme settings
export const themeSettings = (mode: String) => {
    return {
        palette: {
            mode: mode as PaletteMode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colorData.schemes.dark.primary
                    },
                    secondary: {
                        main: colorData.schemes.dark.secondary
                    },
                    tertiary: {
                        main: colorData.schemes.dark.tertiary
                    },
                    neutral: {
                        main: colorData.palettes.neutral["50"],
                        light: colorData.palettes.neutral["90"],
                        dark: colorData.palettes.neutral["30"]
                    },
                    background: {
                        default: colorData.schemes.dark.surface
                    }
                }
                : {
                    primary: {
                        main: colorData.schemes.light.primary
                    },
                    secondary: {
                        main: colorData.schemes.light.secondary
                    },
                    tertiary: {
                        main: colorData.schemes.light.tertiary
                    },
                    neutral: {
                        main: colorData.palettes.neutral["50"],
                        light: colorData.palettes.neutral["90"],
                        dark: colorData.palettes.neutral["30"]
                    },
                    background: {
                        default: colorData.schemes.light.surface
                    }                    
                }
            )
        },
        typography: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
            h1: {
                fontFamily: ["Roboto Slab", "sans-serif"].join(",")
            },
            h2: {
                fontFamily: ["Roboto Slab", "sans-serif"].join(",")
            },
            h3: {
                fontFamily: ["Roboto Slab", "sans-serif"].join(",")
            },
            h4: {
                fontFamily: ["Roboto Slab", "sans-serif"].join(",")
            },
            h5: {
                fontFamily: ["Roboto Slab", "sans-serif"].join(",")
            },
            h6: {
                fontFamily: ["Roboto Slab", "sans-serif"].join(",")
            }
        }
    };
};

// {
//     primary: {
//         main: colorData.coreColors.primary,
//         dark: colorData.schemes.dark.primary,
//         light: colorData.schemes.light.primary
//     },
//     secondary: {
//         main: colorData.coreColors.secondary,
//         dark: colorData.schemes.dark.secondary,
//         light: colorData.schemes.light.secondary
//     },
//     tertiary: {
//         main: colorData.coreColors.tertiary,
//         dark: colorData.schemes.dark.tertiary,
//         light: colorData.schemes.light.tertiary
//     },
//     neutral: {
//         main: colorData.palettes.neutral["50"],
//         light: colorData.palettes.neutral["90"],
//         dark: colorData.palettes.neutral["30"]
//     },
//     background: {
//         default: colorData.schemes.dark.surface
//     }
// }


// Context color context Type
export interface ColorModeContextType {
    toggleColorMode: () => void;
}

// Context for colormode
export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => {}
});

export const useMode = (): [Theme, ColorModeContextType] => {
    const [mode, setMode] = useState("dark");


    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
            {
                setMode((prev) => (prev === "light" ? "dark" : "light"));
            }
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}