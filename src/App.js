import Header from "./Header";
import Wrapper from "./Wrapper";
import Section from "./Section";
import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const tasks = [
  {id: 1, task: "Pozmywać naczynia", done: true},
  {id: 2, task: "Posprzątać pokój", done: false},
]

const hiddenTaskStatus = false;

function App() {
    return (
        <Wrapper>
          <Header title="Lista zadań" />
          <Section title="Dodaj nowe zadanie" body={<Form />} />
          <Section title="Lista zadań" extraContent={<Buttons />} body={<Tasks tasks={tasks} hiddenTaskStatus={hiddenTaskStatus}/>}/>
        </Wrapper>
    );
}

export default App;
