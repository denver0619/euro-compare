import { useState } from "react";
import {
    useTheme,
    Box,
    Drawer,
    Typography,
    Theme,
    CSSObject,
    styled,
    IconButton,
    Divider,
    ButtonBase,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, colorTokens } from "../../theme";
import {
    MenuOutlined,
    MenuOpenOutlined,
    DashboardOutlined,
} from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(6)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(6)} + 1px)`,
    },
});

const MiniDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    background: colorTokens(theme.palette.mode).secondary,
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const ItemButton = styled(ButtonBase)(({ theme }) => ({
    width: "100%",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0px 10px 0px 10px",
}));

function Sidebar() {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <MiniDrawer
                anchor="left"
                variant="permanent"
                open={open}
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: colors.surfaceContainer,
                    },
                }}
            >
                {open ? (
                    <Box alignItems="left" role="presentation">
                        <Box display="flex" alignItems="center">
                            <IconButton onClick={handleDrawerClose}>
                                <MenuOpenOutlined></MenuOpenOutlined>
                            </IconButton>
                            <Typography variant="h5">Menu</Typography>
                        </Box>
                        <Divider
                            sx={{
                                margin: "5px",
                            }}
                        />
                        <Box alignItems="left" role="presentation">
                            <ItemButton
                                sx={{
                                    ":hover": {
                                        backgroundColor: colors.surfaceBright,
                                    },
                                }}
                            >
                                <DashboardOutlined
                                    sx={{ marginRight: "10px" }}
                                ></DashboardOutlined>
                                <Typography variant="h6">Dashboard</Typography>
                            </ItemButton>
                        </Box>
                    </Box>
                ) : (
                    <Box alignItems="left" role="presentation">
                        <Box>
                            <IconButton onClick={handleDrawerOpen}>
                                <MenuOutlined></MenuOutlined>
                            </IconButton>
                        </Box>
                        <Divider
                            sx={{
                                margin: "5px",
                            }}
                        />

                        <Box
                            alignItems="center"
                            justifyContent="center"
                            justifyItems="center"
                            role="presentation"
                        >
                            <ItemButton
                                sx={{
                                    ":hover": {
                                        backgroundColor: colors.surfaceBright,
                                    },
                                }}
                            >
                                <DashboardOutlined></DashboardOutlined>
                            </ItemButton>
                        </Box>
                    </Box>
                )}
            </MiniDrawer>
        </Box>
    );
}

export default Sidebar;
