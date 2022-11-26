import "./style.css";

const Form = () => (
    <form className="form">
        <input autoFocus={true} className="form__input" placeholder="Co jest do zrobienia?"></input>
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;
