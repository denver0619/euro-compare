import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "./services/firebase/firebase";
import { AuthContextProvider } from "./contexts/authContext";
import { GlobalContextProvider } from "./contexts/globalContext";
import CountryComparison from "./layout/country-comparison";
import Lifestyle from "./layout/lifestyle";
import About from "./layout/about";
import HomeLayout from "./layout/home";
import MainApp from "./layout/main";
import AuthenticationLayout from "./layout/authentication";

function App() {
    const [theme, colorMode] = useMode();
    const navigate = useNavigate();

    const user = auth.currentUser;

    return (
        <GlobalContextProvider>
            <AuthContextProvider>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Routes>
                            <Route
                                path="/authenticate"
                                element={<AuthenticationLayout />}
                            ></Route>
                            <Route path="/" element={<MainApp />}>
                                <Route index element={<HomeLayout />} />
                                <Route
                                    path="/country-comparison"
                                    element={<CountryComparison />}
                                />
                                <Route
                                    path="/lifestyle"
                                    element={<Lifestyle />}
                                />
                                <Route path="/about" element={<About />} />
                            </Route>
                        </Routes>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </AuthContextProvider>
        </GlobalContextProvider>
    );
}

export default App;
