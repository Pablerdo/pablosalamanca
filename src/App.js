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
          <img src='http://www.stickpng.com/img/icons-logos-emojis/tech-companies/arduino-logo.png' alt="logo" height='30'/>
          <IconButton target='_blank' href='https://twitter.com/Pablerdo'>
            <TwitterIcon />
          </IconButton>
        </div>
      </header>
    </div>
  );
}

export default App;
