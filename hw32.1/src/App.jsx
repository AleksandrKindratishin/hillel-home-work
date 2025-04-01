import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";

const App = () => {
    return (
        <Router>
            <CssBaseline />
            <Header />
            <Container maxWidth="md">
                <Box sx={{ minHeight: "80vh", py: 4 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<Todo />} />
                        <Route path="/swapi" element={<Swapi />} />
                    </Routes>
                </Box>
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
