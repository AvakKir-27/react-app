import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">SOCIAL NETWORK</h1>
            <p className="header-subtitle">for communicate</p>
            <nav className="header-nav">
                <Link className="header-link" to="/">Главная</Link>
                <Link className="header-link" to="/profile">Профиль</Link>
                <Link className="header-link" to="/settings">Настройки</Link>
                <Link className="header-link" to="/about">О Проекте</Link>
            </nav>
        </header>
    );
}

export default Header;