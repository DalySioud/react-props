import './App.css';
import Component from './profile/Component';
function App() {
const name = "Sioud Daly"
const biographie = "Seeking for opportunities"
const job = "Student"
const age ="22"
const fn = () => alert(name)
 
  return (

    <div className="App">
      <Component fullname={name} bio={biographie} profession={job} age={age} greeting={fn} />
      <img src="/daly.jpg" alt='user'width="400" />
    </div>
  );
}

export default App;