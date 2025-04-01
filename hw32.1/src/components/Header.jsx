import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="sticky" sx={{ bgcolor: "primary.dark" }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Мій сайт
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">
                        Головна
                    </Button>
                    <Button color="inherit" component={Link} to="/todo">
                        TODO
                    </Button>
                    <Button color="inherit" component={Link} to="/swapi">
                        SWAPI
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
