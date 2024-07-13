import { Typography, Box, useTheme } from "@mui/material";
import { colorTokens } from "../theme";
import React from "react";

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box>
            <Typography variant="h6" sx={{ marginBottom: "5px" }}>
                {title}
            </Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
    );
};

export default Header;
