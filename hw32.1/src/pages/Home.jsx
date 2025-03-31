import { Container, Typography, Box } from "@mui/material";

const Home = () => {
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Привіт! Я фронтенд-розробник
                </Typography>
                <Typography variant="body1">
                    Фронтенд-розробник з досвідом роботи понад 2 роки. Використовую в
                    роботі HTML5, CSS3, JavaScript, React. Також працюю з Node.js, PHP.
                </Typography>
            </Box>
        </Container>
    );
};

export default Home;
