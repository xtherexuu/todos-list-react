import React from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [formValue, setFormValue] = React.useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                formValue.trim() && addNewTask(formValue.trim());
                setFormValue("");
            }}
            className="form"
        >
            <input
                onChange={(event) => setFormValue(event.target.value)}
                value={formValue}
                autoFocus={true}
                className="form__input"
                placeholder="Co jest do zrobienia?"
            ></input>
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;
