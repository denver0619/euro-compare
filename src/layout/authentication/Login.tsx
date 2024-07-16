import { Box, Typography, TextField, Button } from "@mui/material";
import { colorTokens, useMode } from "../../theme";
import {
    doSignInWithGithub,
    doSignInWithGoogle,
} from "../../services/firebase/auth";
import { useAuth } from "../../contexts/authContext";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginLayout() {
    const [theme, colorModeContext] = useMode();
    const colors = colorTokens(theme.palette.mode);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMesage, setErrorMessage] = useState("");
    const { userLoggedIn } = useAuth();

    const onGithubSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithGithub().catch((err: Error) => {
                setIsSigningIn(false);
            });
        }
    };

    const onGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithGoogle().catch((err: Error) => {
                setIsSigningIn(false);
            });
        }
    };

    return (
        <Box
            component="main"
            className="content"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {userLoggedIn && <Navigate to={"/main"} replace={true} />}
            <Button
                variant="contained"
                onClick={(e) => {
                    onGithubSignIn(e);
                }}
            >
                Github
            </Button>
            <Button
                variant="contained"
                onClick={(e) => {
                    onGoogleSignIn(e);
                }}
            >
                Google
            </Button>
        </Box>
    );
}

export default LoginLayout;
