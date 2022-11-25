import "./style.css";

const Buttons = (props) => (
    <div className="section__buttonsContainer">
        <button className="section__button">Ukryj ukończone</button>
        <button disabled={props.tasks.every(task => task.done)} className="section__button">Zaznacz wszystkie</button>
    </div>
)

export default Buttons;