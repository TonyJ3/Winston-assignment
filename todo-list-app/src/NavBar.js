import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Box,
    Button,
    useTheme,
    useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
    { label: "Home", path: "/" },
    { label: "Profile", path: "/profile" },
    { label: "To Do List", path: "/todolist" },
];

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);


    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleMenuClose} component={Link} to={page.path}>
                                    {page.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: "flex", gap: 2 }}>
                        {pages.map((page) => (
                            <Button key={page.label} color="inherit" component={Link} to={page.path}>
                                {page.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;