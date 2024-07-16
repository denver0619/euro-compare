import { Box, Typography, TextField } from "@mui/material";
import { colorTokens, useMode } from "../../theme";
import LoginLayout from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase/firebase";

function AuthenticationLayout() {
    const [theme, colorModeContext] = useMode();
    const colors = colorTokens(theme.palette.mode);
    const [isRegistering, setIsRegistering] = useState(false);

    const navigate = useNavigate();

    const user = auth.currentUser;
    if (user) {
        navigate("/");
    }

    return (
        <Box sx={{ width: "100%", height: "100%" }}>
            <LoginLayout />
        </Box>
    );
}

export default AuthenticationLayout;
