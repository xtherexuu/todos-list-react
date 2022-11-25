import "./style.css";

const Header = (props) => (
    <header className="header">
        <h1 className="header__heading">{props.title}</h1>
    </header>
);

export default Header;
