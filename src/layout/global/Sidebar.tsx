import React, { useEffect, useState } from "react";
import {
    useTheme,
    Box,
    IconButton,
    Typography,
    Divider,
    CssBaseline,
} from "@mui/material";
import { colorTokens } from "../../theme";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
    MenuOutlined,
    MenuOpenOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    TravelExploreOutlined,
    InfoOutlined,
    PublicOutlined,
} from "@mui/icons-material";

interface ItemProps {
    title: string;
    to: string;
    icon: React.ReactNode;
    selected: string;
    setSelected: (selected: string) => void;
}

const Item: React.FC<ItemProps> = ({
    title,
    to,
    icon,
    selected,
    setSelected,
}) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
        <Link
            to={to}
            style={{
                color: colors.onSurface,
                textDecoration: "none",
            }}
        >
            <CssBaseline />
            <MenuItem
                active={selected === title}
                onClick={() => {
                    setSelected(title);
                    console.log(title);
                }}
                icon={icon}
                disabled={false}
            >
                <Typography variant="h6">{title}</Typography>
            </MenuItem>
        </Link>
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
                <Menu
                    menuItemStyles={{
                        button: {
                            "&:hover": {
                                backgroundColor: colors.primary,
                                color: colors.onPrimary,
                            },
                        },
                    }}
                >
                    {/* Header, Collapse Toggle */}
                    <MenuItem
                        style={{
                            backgroundColor: colors.surfaceContainer,
                            color: colors.onSurface,
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
                                    sx={{
                                        color: colors.onSurface,
                                    }}
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
                                    sx={{
                                        color: colors.onSurface,
                                    }}
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
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={<DashboardOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Comparison"
                        to="/country-comparison"
                        icon={<PublicOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Lifestyle"
                        to="/lifestyle"
                        icon={<ShoppingCartOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="About"
                        to="/about"
                        icon={<InfoOutlined />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Box></Box>
                </Menu>
            </Sidebar>
        </Box>
    );
}

export default SidebarComponent;
