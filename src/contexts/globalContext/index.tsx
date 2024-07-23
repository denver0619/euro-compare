import React, { ReactNode, useContext, useEffect, useState } from "react";
import StorageHelper from "../../services/firebase/storage/StorageHelper";
import { Box, CircularProgress } from "@mui/material";

interface DatasetsContextType {
    prc_ppp_ind: string;
}

interface DatasetType {
    [key: string]: any;
}

interface ValuesContextType {
    prc_ppp_ind: DatasetType | null;
}

interface GlobalContextType {
    datasets: DatasetsContextType;
    values: ValuesContextType;
}

interface GlobalProviderProps {
    children: ReactNode;
}

// permanent values
const datasets: DatasetsContextType = {
    prc_ppp_ind: "prc_ppp_ind",
};

//fetched values
const datasetValues: ValuesContextType = {
    prc_ppp_ind: null,
};

const GlobalContext = React.createContext<GlobalContextType>({
    datasets: datasets,
    values: datasetValues,
});

export function useGlobal() {
    return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }: GlobalProviderProps) {
    const [values, setValues] = useState<GlobalContextType | null>(null);
    const [loading, setLoading] = useState(true);

    const finalValues: GlobalContextType = {
        datasets: datasets,
        values: datasetValues,
    };

    useEffect(() => {
        // prc_ppp_ind
        const fetchDataset = async () => {
            try {
                // datasetValues.prc_ppp_ind =
                //     await StorageHelper.downloadJsonData(datasets.prc_ppp_ind);
                setValues(finalValues);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchDataset();
    }, []);

    if (loading) {
        return (
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }
    return (
        <GlobalContext.Provider value={values!}>
            {children}
        </GlobalContext.Provider>
    );
}
