import { Container, Typography, Box, Paper } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Привіт! Я фронтенд-розробник
                    </Typography>
                    <Typography variant="body1">
                        Фронтенд-розробник з досвідом роботи понад 2 роки. Використовую в
                        роботі HTML5, CSS3, JavaScript, React. Також працюю з Node.js, PHP.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Home;
