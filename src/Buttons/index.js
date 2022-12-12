import "./style.css";

const Buttons = ({tasks, hiddenTaskStatus, toggleHiddenTaskStatus}) => (
    <div className={`buttonsContainer ${tasks.length ? "" : "buttonsContainer--hidden"}`}>
        <button className="buttons__button" onClick={toggleHiddenTaskStatus}>{hiddenTaskStatus ? "Pokaż" : "Ukryj"}  ukończone</button>
        <button disabled={tasks.every((task) => task.done)} className="buttons__button">
            Zaznacz wszystkie
        </button>
    </div>
);

export default Buttons;
