import "./style.css";

const Buttons = (props) => (
    <div className="buttonsContainer">
        <button className="buttons__button">Ukryj ukończone</button>
        <button disabled={props.tasks.every((task) => task.done)} className="buttons__button">
            Zaznacz wszystkie
        </button>
    </div>
);

export default Buttons;
