import './App.css'
import Todos from './Todos';

function App() {
  // create an array of object 
  const actors = [
    {id: 1, name: "SRK"},
    {id: 2, name: "Salman"},
    {id: 3, name: "Aamir"}
  ];
  const stdName = "Shrijon";

  const todos = [
    {id: 1, task:"React", isDone: false},
    {id: 2, task:"JavaScript", isDone: true},
    {id: 3, task:"Python", isDone: false},
    {id: 4, task:"Java", isDone: true},
    {id: 5, task:"Machine Learning", isDone: false}
  ];

  return (
    <>
    <h1>React Learning</h1>
    

    <Student name="Shrijon Biswas" stdName={stdName} age="22"></Student>
    <Student name="Ivy Dey" age="22"></Student>
    <Student name="Anupama Halder" age="23"></Student>
    {/* Todo  */}
    <Todos todos={todos}></Todos>

    {
      actors.map(actor => <Actor key={actor.id} actor={actor}></Actor>)
    }

    </>
  )
}

// Component 
function Student(props){
  console.log(props);
  // destructure the object
  const {name, age, stdName} = props;
  // const num = 2;
  return (
    <div className='student'>
      <p>Name: {name}</p>
      <p>{stdName}</p>
      <p>Age: {age}</p>
    </div>
  )
}

// component 
function Actor({actor}){
  // const {name} = props.actor;
  // console.log(actor);
  // destructure 
  const {name} = actor;
  return(
    <div className='student'>
      <p>Actor name: {name}</p>
    </div>
  )
}


export default App

