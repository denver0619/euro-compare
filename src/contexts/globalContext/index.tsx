import React, { ReactNode, useContext } from "react";

interface DatasetsContextType {
    prc_ppp_ind: string;
}

interface GlobalContextType {
    datasets: DatasetsContextType;
}

interface GlobalProviderProps {
    children: ReactNode;
}

// permanent values
const datasets: DatasetsContextType = {
    prc_ppp_ind: "prc_ppp_ind",
};

const GlobalContext = React.createContext<GlobalContextType>({
    datasets: datasets,
});

export function useGlobal() {
    return useContext(GlobalContext);
}

export function GlobalContextProvider({ children }: GlobalProviderProps) {
    const values: GlobalContextType = {
        datasets: datasets,
    };
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
}
