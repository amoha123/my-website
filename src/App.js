// App.js
import './App.css';
import screenshot from './images/Calanka_Soomaaliya.png';
import Resume from './resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Abdirahman Mohamed</h1>
        <p>Aspiring Computer Scientist completing my Bachelor's in Computer Science, graduating Spring 2025.</p>
      </header>

      <main className="container">
        {/* About Me Section */}
        <section>
          <h2>About Me</h2>
          <p>
            I’m passionate about computer science and cybersecurity, actively involved in projects and competitions that test and expand my skillset. My interests include coding, exploring cybersecurity, and learning about system vulnerabilities and defenses.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2>Projects</h2>
          <h3>Weather App</h3>
          <p>React application that displays the weather for any city using the OpenWeatherMap API.</p>

          <h3>Java Applications</h3>
          <p>Several Java-based projects involving data manipulation with tweets, focusing on implementing interfaces, comparing content, and analyzing data.</p>
        </section>

        {/* Skills and Education Section */}
        <section>
          <h2>Skills & Education</h2>
          <h3>Technical Skills</h3>
          <ul>
            <li>Python, Java</li>
            <li>Object-Oriented Programming</li>
            <li>Data Structures & Algorithms</li>
          </ul>

          <h3>Relevant Coursework</h3>
          <ul>
            <li>Computer Organization, Operating Systems</li>
            <li>3D Game Programming, Database Theory & Implementation</li>
            <li>Cybersecurity Basics and System Vulnerabilities</li>
          </ul>
        </section>

        {/* Professional Affiliations */}
        <section>
          <h2>Professional Affiliations</h2>
          <p>Member of the San Diego State University Cyber Defense Team, participating in:</p>
          <ul>
            <li>National Cyber League (NCL) Individual & Team Game, Fall 2020</li>
            <li>Collegiate Cyber Defense Competition (CCDC) Invitationals, Fall 2020</li>
          </ul>
        </section>

        {/* Resume Component */}
        <section>
          <h2>Resume</h2>
          <Resume />
        </section>

        {/* Contact Information */}
        <section>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:abdirahman.a.mohamed@gmail.com" className="link">abdirahman.a.mohamed@gmail.com</a></p>
        </section>
      </main>

      {/* Footer with Image at the Bottom */}
      <footer className="footer">
        <img src={screenshot} alt="Personal logo" className="image" />
      </footer>
    </div>
  );
}

export default App;
