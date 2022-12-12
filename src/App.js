import React from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

function App() {
    const [hiddenTaskStatus, setHiddenTaskStatus] = React.useState(false);

    let [tasks, setTasks] = React.useState([
        { id: 1, task: "Pozmywać naczynia", done: true },
        { id: 2, task: "Posprzątać pokój", done: false },
    ]);

    const toggleHiddenTaskStatus = () => {
        setHiddenTaskStatus((hiddenTaskStatus) => !hiddenTaskStatus);
    };

    const removeTask = (id) => {
        setTasks((tasks) => (tasks = [...tasks.slice(0, id - 1), ...tasks.slice(id)]));
    };

    return (
        <Wrapper>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie" body={<Form />} />
            <Section
                title="Lista zadań"
                extraContent={
                    <Buttons
                        tasks={tasks}
                        hiddenTaskStatus={hiddenTaskStatus}
                        toggleHiddenTaskStatus={toggleHiddenTaskStatus}
                    />
                }
                body={<Tasks tasks={tasks} hiddenTaskStatus={hiddenTaskStatus} removeTask={removeTask} />}
            />
        </Wrapper>
    );
}

export default App;
