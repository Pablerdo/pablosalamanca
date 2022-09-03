import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button, IconButton} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Pablo Salamanca</h1>
        <h4 className="App-text">Computer Science @ University of Pennsylvania</h4>
        <h4 className="App-text">Curriculum Vitae</h4>
        <div className="App-icon-bar">
          <IconButton target='_blank' href='https://github.com/Pablerdo'>
            <GitHubIcon />
          </IconButton>
          <IconButton target='_blank' href='https://www.linkedin.com/in/pablo-salamanca-97a848134/'>
            <LinkedInIcon />
          </IconButton>
          <IconButton target='_blank' href='https://www.youtube.com/channel/UC8zVlsl3olsvZrFF8P1vGkw'>
            <YouTubeIcon />
          </IconButton>
          <a target='_blank' href='https://create.arduino.cc/projecthub/Pablerdo/wireless-laser-gate-timing-system-for-track-and-field-ba8cd9?ref=search&ref_id=track%20and%20field&offset=2' >
            <img src={require('./assets/arduino_logo.png')} alt="logo" height='20' />
          </a>
          <IconButton target='_blank' href='https://twitter.com/Pablerdo'>
            <TwitterIcon />
          </IconButton>
        </div>
      </header>
    </div>
  );
}

export default App;
