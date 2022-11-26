import React from "react";
import "./style.css";

const Tasks = ({tasks, hiddenTaskStatus}) => (
    <ul className="list">
        {tasks.map((task) => (
            <li key={task.id} className={`list__item ${task.done && hiddenTaskStatus ? "list__item--hidden" : ""}`}>
                <button className="list__button list__button--checking">{task.done ? "✔" : ""}</button>
                <span className={`list__taskContent ${task.done ? "list__item--done" : ""}`}>{task.task}</span>
                <button className="list__button list__button--deleting">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;
