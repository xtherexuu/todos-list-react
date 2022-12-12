import React from "react";
import "./style.css";

const Tasks = ({ tasks, hiddenTaskStatus, removeTask, toggleTaskDone}) => (
    <ul className="list">
        {tasks.map((task) => (
            <li key={task.id} className={`list__item ${task.done && hiddenTaskStatus ? "list__item--hidden" : ""}`}>
                <button onClick={() => toggleTaskDone(task.id)} className="list__button list__button--checking">{task.done ? "✔" : ""}</button>
                <span className={`list__taskContent ${task.done ? "list__item--done" : ""}`}>{task.task}</span>
                <button onClick={() => removeTask(task.id)} className="list__button list__button--deleting">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
