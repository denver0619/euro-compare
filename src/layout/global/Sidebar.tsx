import { useEffect, useState } from "react";
import { useTheme, Box, IconButton, Typography, Divider } from "@mui/material";
import { colorTokens } from "../../theme";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
    MenuOutlined,
    MenuOpenOutlined,
    DashboardOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title}>
            <Typography></Typography>
            <Link></Link>
        </MenuItem>
    );
};

function SidebarComponent() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box>
            <Sidebar
                backgroundColor={colors.surfaceContainer}
                rootStyles={{
                    height: "100%",
                }}
                collapsed={isCollapsed}
            >
                <Menu>
                    {/* Header, Collapse Toggle */}
                    <MenuItem
                        style={{
                            backgroundColor: colors.surfaceContainer,
                        }}
                    >
                        {isCollapsed ? (
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Typography variant="h5"></Typography>
                                <IconButton
                                    onClick={() =>
                                        setIsCollapsed(
                                            isCollapsed ? false : true
                                        )
                                    }
                                >
                                    <MenuOutlined></MenuOutlined>
                                </IconButton>
                            </Box>
                        ) : (
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Typography variant="h5">Menu</Typography>
                                <IconButton
                                    onClick={() =>
                                        setIsCollapsed(
                                            isCollapsed ? false : true
                                        )
                                    }
                                >
                                    <MenuOpenOutlined></MenuOpenOutlined>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    <Divider></Divider>
                    {/* Menu */}
                    <Box></Box>
                </Menu>
            </Sidebar>
        </Box>
    );
}

export default SidebarComponent;
