import { Link } from "react-router-dom"
import { useTheme } from "../context/ThemeContext";
function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className={`header theme-${theme}`}>
            <h1 className="header-title">SOCIAL NETWORK</h1>
            <p className="header-subtitle">for communicate</p>
            <nav className="header-nav">
                <Link className={`header-link theme-${theme}`} to="/">Главная</Link>
                <Link className={`header-link theme-${theme}`} to="/profile">Профиль</Link>
                <Link className={`header-link theme-${theme}`} to="/settings">Настройки</Link>
                <Link className={`header-link theme-${theme}`} to="/about">О Проекте</Link>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === "light" ? "DARK" : "LIGHT"}
                </button>
            </nav>
        </header>
    );
}

export default Header;