import logo from './logo.svg';
import './App.css';
import Student from './component/student/Student';
import StudentCC from './component/student/StudentCC';
import Signature from './component/signature/Signatures';
import CountClick from './component/countClicks/CountClick';
function App() {

  const student = {
    name: "Lisandro",
    lastName: "Ojeda Fernandez",
    age: 35,
    email: "l.ojedafernandez@gmail.com",
    phone: "+540292015323027",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Componente Estudiante
        </p>
        <Student />
        <hr />
        <StudentCC student={student} />
        <CountClick />
        <Signature />
      </header>
    </div >
  );
}

export default App;
