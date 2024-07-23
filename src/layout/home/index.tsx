import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import { useGlobal } from "../../contexts/globalContext";
import { Eurostat } from "../../services/eurostat/eurostat";
import * as ppp from "../../assets/prc_ppp_ind.json";

function HomeLayout() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const global = useGlobal();
    const eurostat = new Eurostat(ppp);

    eurostat.getIndexList().forEach((element: any) => {
        console.log(eurostat.getDimensionLabels(element));
    });

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
                <Header title="Dashboard" subtitle=""></Header>
            </Box>
        </Box>
    );
}

export default HomeLayout;
