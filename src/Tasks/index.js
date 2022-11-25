import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map((task) => (
            <React.Fragment>
                <li className={`list__item ${task.done && props.hiddenTaskStatus ? "list__item--hidden" : ""}`}>
                    <button className="list__button list__button--checking">{task.done ? "✔" : ""}</button>
                    <span className={`list__taskContent ${task.done ? "list__item--done" : ""}`}>{task.task}</span>
                    <button className="list__button list__button--deleting">🗑</button>
                </li>
            </React.Fragment>
        ))}
    </ul>
);

export default Tasks;
