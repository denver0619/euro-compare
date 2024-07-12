import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, colorTokens } from "../../theme";
// import LightModeOutlinedIcon from "@mui/icons-material";
// import DarkModeOutlinedIcon from "@mui/icons-material";
// import SettingsOutlinedIcon from "@mui/icons-material";
// import Person2OutlinedIcon from "@mui/icons-material";
import {
    LightModeOutlined,
    DarkModeOutlined,
    SettingsOutlined,
    Person2Outlined,
} from "@mui/icons-material";

function TopbarComponent() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* App name */}
            <Box display="flex" bgcolor={colors.surface} borderRadius="3px">
                <Typography variant="h5">EuroCompare</Typography>
            </Box>

            {/* Action Buttons */}
            <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlined />
                    ) : (
                        <LightModeOutlined />
                    )}
                </IconButton>
                <IconButton>
                    <Person2Outlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
            </Box>
        </Box>
    );
}

export default TopbarComponent;
