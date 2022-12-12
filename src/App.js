import React from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const tasks = [
    { id: 1, task: "Pozmywać naczynia", done: true },
    { id: 2, task: "Posprzątać pokój", done: false },
];

function App() {
    const [hiddenTaskStatus, setHiddenTaskStatus] = React.useState(false);

    const toggleHiddenTaskStatus = () => {
        setHiddenTaskStatus((hiddenTaskStatus) => !hiddenTaskStatus);
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
                    hiddenTaskStatus = {hiddenTaskStatus} 
                    toggleHiddenTaskStatus={toggleHiddenTaskStatus} />
                } 
                body={
                    <Tasks 
                    tasks={tasks} 
                    hiddenTaskStatus={hiddenTaskStatus} />
                } 
            />
        </Wrapper>
    );
}

export default App;
