import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopbarComponent from "./layout/global/Topbar";
import SidebarComponent from "./layout/global/Sidebar";
import Dashboard from "./layout/dashboard/Dashboard";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SidebarComponent></SidebarComponent>

                    <Box component="main" className="content">
                        <TopbarComponent></TopbarComponent>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                        </Routes>
                    </Box>
                    {/* <main className="content">
              </main> */}
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
