//import logo from './logo.svg';
import './App.css';
import screenshot from './images/Calanka_Soomaaliya.png';

function App() {
  return (
    <div className='App'> 
      <h1>
        <img
          src={screenshot}
          alt="flower"
          className="image"
        />
      </h1>
      <h1>Hello, World!</h1>
      <p>Welcome to my first React app.</p>
      <h2>About Me:</h2>
      <b>this sentence is bold</b>
      <br></br>
      <i>this sentence is italicized</i>
      <ul>
        <li><b>Coding</b></li>
        <li><i>Quran</i></li>
        <li>Reading</li>
      </ul>
      <h2>My Skills:</h2>
      <ol>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ol>
      <h3>My Favorite Website</h3>
      <a href="https://www.youtube.com/shorts/Oinm9S8V3eU">Visit Example Website</a>
    </div>
  );
}

export default App;
