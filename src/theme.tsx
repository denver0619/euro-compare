import * as colorData from "../src/assets/material-theme.json";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const themeTokens = (mode: String) => ({
    ...(
        mode === "dark"
        ?colorData.schemes.dark
        :colorData.schemes.light
    )
});

export const themeSettings = (mode: String) => {
    const colors = themeTokens(mode);

    return {
        pallete: {
            // mode: mode,
            // ...(mode === "dark"
            //     ?colorData.schemes.dark
            //     :colorData.schemes.light
            // )
            ...(colorData.palettes)
        }
    }
}


export const colorMode = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    )

    const theme = useMemo(() => createTheme(colorData,), [mode])
}