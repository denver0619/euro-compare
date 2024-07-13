import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";

function Lifestyle() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box
            sx={{
                margin: "20px",
                color: colors.onSurface,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Header title="Lifestyle" subtitle=""></Header>
            </Box>
        </Box>
    );
}

export default Lifestyle;
