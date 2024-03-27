import logo from './logo.svg';
import './App.css';
import Sample from './Sample';
import List from './List';
import About from'./About';
function App() {
  const students = [
    {
      name:'oviya',
      branch:'Computer Science'
    },
    {
      name:'raj',
      branch:'Computer Science'
    },
    {
      name:'niharika',
      branch:'Computer Science'
    }
  ]
  const workers = [
    {
      name:"Anu",
      profession:"Designer"
    },
    {
      name:"Jhon",
      profession:"Developer"
    },
    {
      name:"Sandy",
      profession:"Testie"
    },
    {
      name:"Joe",
      profession:"Designer"
    }
  ]
  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <Sample user="Jannu" studentData={students}/>
      <List data={students}/>
      <About pro="Developer" employee={workers}/>
    </div>
  );
}

export default App;
