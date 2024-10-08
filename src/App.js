import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import pdf from './assets/Pablo_Salamanca_Rising_Senior.pdf';
import ParticleBackground from "./ParticleBackground";

function App() {

  return (
      <div className="wrapper">
        <ParticleBackground />
        <Text />
      </div>

  );

  function Text() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Pablo Salamanca</h1>
            <h4 className="App-text">Computer Science and Mathematics @ University of Pennsylvania</h4>
            <h4 className="App-text">
              <a className="App-link" href={pdf} target="_blank" rel="noreferrer" >
                Resume
              </a>
            </h4>
            <div className="App-icon-bar">
              <a className='App-icon-link' target='_blank' href='https://github.com/Pablerdo' rel='noreferrer'>
                <GitHubIcon fontSize={"large"} />
              </a>
              <a className='App-icon-link' target='_blank' href='https://www.linkedin.com/in/pablo-salamanca-97a848134/' rel='noreferrer'>
                <LinkedInIcon fontSize={"large"} />
              </a>
              <a className="App-icon-link" target='_blank' href='https://www.youtube.com/channel/UC8zVlsl3olsvZrFF8P1vGkw' rel='noreferrer'>
                <YouTubeIcon fontSize={"large"} />
              </a>
              <a className='App-icon-link' target='_blank' href='https://create.arduino.cc/projecthub/Pablerdo/wireless-laser-gate-timing-system-for-track-and-field-ba8cd9?ref=search&ref_id=track%20and%20field&offset=2' rel='noreferrer'>
                <img src={require('./assets/arduino_logo.png')} alt="logo" height='28' />
              </a>
              <a className='App-icon-link' target='_blank' href='https://www.hackster.io/Pablerdo/wireless-laser-gate-timing-system-for-track-and-field-ba8cd9' rel='noreferrer'>
                <img src={require('./assets/hackster_logo.png')} alt="logo" height='28' />
              </a>
              <a className='App-icon-link' target='_blank' href='https://twitter.com/pablosalaman' rel='noreferrer'>
                <TwitterIcon fontSize={"large"} />
              </a>
            </div>
          </header>
        </div>
    );
  }
}

export default App;
