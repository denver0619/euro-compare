import Header from "../../components/Header";
import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import StorageHelper from "../../services/firebase/storage/StorageHelper";
import { useGlobal } from "../../contexts/globalContext";
import { useEffect, useState } from "react";

function HomeLayout() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const global = useGlobal();
    const [dataset, setDataset] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchDataset = async () => {
    //         try {
    //             const data = StorageHelper.downloadJsonData(
    //                 global.datasets.prc_ppp_ind
    //             );
    //             const jsonstatdata = await JSONstat(data);
    //             setDataset(jsonstatdata);
    //         } catch (err) {
    //             if (err instanceof Error) {
    //                 setError(err.message);
    //             } else {
    //                 setError("An unknown error occurred");
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    // }, []);

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
