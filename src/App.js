import React, { useEffect } from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const getInitialTasks = () => {
    const tasksInLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    return tasksInLocalStorage ? tasksInLocalStorage : [];
};

const getInitialHiddenTaskStatus = () => {
    const hiddenTaskStatusInLocalStorage = JSON.parse(localStorage.getItem("hiddenTaskStatus"));
    return hiddenTaskStatusInLocalStorage === null ? false : hiddenTaskStatusInLocalStorage;
};

function App() {
    const [hiddenTaskStatus, setHiddenTaskStatus] = React.useState(getInitialHiddenTaskStatus);

    let [tasks, setTasks] = React.useState(getInitialTasks);

    const toggleHiddenTaskStatus = () => {
        setHiddenTaskStatus((hiddenTaskStatus) => !hiddenTaskStatus);
    };

    const removeTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        done: !task.done,
                    };
                } else {
                    return task;
                }
            })
        );
    };

    const toggleAllTasksDone = () => {
        setTasks((tasks) =>
            tasks.map((task) => {
                return {
                    ...task,
                    done: true,
                };
            })
        );
    };

    const addNewTask = (task) => {
        setTasks((tasks) => [
            ...tasks,
            {
                id: !tasks.length ? 1 : tasks[tasks.length - 1].id + 1,
                task,
                done: false,
            },
        ]);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem("hiddenTaskStatus", JSON.stringify(hiddenTaskStatus));
    }, [hiddenTaskStatus]);

    return (
        <Wrapper>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
            <Section
                title="Lista zadań"
                extraContent={
                    <Buttons
                        tasks={tasks}
                        hiddenTaskStatus={hiddenTaskStatus}
                        toggleHiddenTaskStatus={toggleHiddenTaskStatus}
                        toggleAllTasksDone={toggleAllTasksDone}
                    />
                }
                body={
                    <Tasks
                        tasks={tasks}
                        hiddenTaskStatus={hiddenTaskStatus}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
            />
        </Wrapper>
    );
}

export default App;
