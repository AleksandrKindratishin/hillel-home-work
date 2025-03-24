import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <header>
            <nav>
                <Link to="/">Головна</Link>
                <Link to="/contacts">Контакти</Link>
                <Link to="/about">Про мене</Link>
                <button onClick={toggleTheme}>Перемкнути тему</button>
            </nav>
        </header>
    );
};

export default Header;
