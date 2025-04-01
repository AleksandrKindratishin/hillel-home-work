import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", p: 2, bgcolor: "grey.200", mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
                © 2025 Мій сайт | Контакти: email@example.com
            </Typography>
        </Box>
    );
};

export default Footer;
