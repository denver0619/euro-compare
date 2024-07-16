import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import TopbarComponent from "../global/Topbar";
import SidebarComponent from "../global/Sidebar";

function MainApp() {
    return (
        <div className="app">
            <SidebarComponent></SidebarComponent>

            <Box component="main" className="content">
                <TopbarComponent></TopbarComponent>
                <Outlet></Outlet>
            </Box>
        </div>
    );
}

export default MainApp;
