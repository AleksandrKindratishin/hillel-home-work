import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", p: 2, mt: 4, bgcolor: "#f5f5f5" }}>
            <Typography variant="body2">
                © 2025 Мій сайт | Контакти: email@example.com
            </Typography>
        </Box>
    );
};

export default Footer;
