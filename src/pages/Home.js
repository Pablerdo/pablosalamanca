import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import pdf from '../assets/Pablo_Salamanca_Rising_Senior.pdf';
import profilePhoto from '../assets/chillaxedPablo.JPG';
import Nav from '../components/Nav';

export default function Home() {
  return (
      <div className="Page-wrapper">
        <Nav />
        <div className="Bio-container">
          <h1 className="App-title">Pablo Salamanca</h1>

          <div className="Bio-row">
            <div className="Bio-left">
              <h4 className="App-text">Video AI @ Netflix</h4>
              <h4 className="App-text">Computer Science @ UPenn</h4>

              <p className="Bio-text">
                I am passionate about multimodal AI, especially video.
                I'm currently a machine learning engineer at Netflix, where I am now part of the InterPositive team following{' '}
                <a
                    className="Bio-inline-link"
                    href="https://www.inc.com/leila-sheridan/ben-affleck-just-sold-his-stealth-ai-startup-to-netflix-for-600-million-heres-what-it-actually-does/91315812"
                    target="_blank"
                    rel="noreferrer"
                >
                  Netflix's acquisition
                </a>{' '}
                of the company.
              </p>

              <div className="Button-row">
                <a
                    className="Scholar-button"
                    href={pdf}
                    target="_blank"
                    rel="noreferrer"
                >
                  <PictureAsPdfIcon fontSize="small" />
                  Resume
                </a>
                <a
                    className="Scholar-button"
                    href="https://scholar.google.com/citations?user=_OBxZAEAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                  <SchoolIcon fontSize="small" />
                  Google Scholar
                </a>
              </div>

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
                  <img src={require('../assets/arduino_logo.png')} alt="logo" height='28' />
                </a>
                <a className='App-icon-link' target='_blank' href='https://www.hackster.io/Pablerdo/wireless-laser-gate-timing-system-for-track-and-field-ba8cd9' rel='noreferrer'>
                  <img src={require('../assets/hackster_logo.png')} alt="logo" height='28' />
                </a>
                <a className='App-icon-link' target='_blank' href='https://twitter.com/pablosalaman' rel='noreferrer'>
                  <TwitterIcon fontSize={"large"} />
                </a>
              </div>
            </div>

            <div className="profile-image-frame">
              <img src={profilePhoto} alt="Pablo Salamanca" className="profile-image" />
            </div>
          </div>

          <div className="Papers-section">
            <h2 className="Papers-title">Papers</h2>

            <div className="Paper-item">
              <p className="Paper-title-text">
                <a className="Bio-inline-link" href="https://arxiv.org/abs/2604.21915" target="_blank" rel="noreferrer">
                  Vista4D: Video Reshooting with 4D Point Clouds
                </a>
              </p>
              <p className="Paper-meta">K.H. Lin, Z. Liu, P. Salamanca, Y. Kant, R. Burgert, Y. Xu, K. Namekata, Y. Zhao, et al. — CVPR 2026</p>
            </div>

            <div className="Paper-item">
              <p className="Paper-title-text">
                <a className="Bio-inline-link" href="https://arxiv.org/abs/2604.06161" target="_blank" rel="noreferrer">
                  DiffHDR: Re-Exposing LDR Videos with Video Diffusion Models
                </a>
              </p>
              <p className="Paper-meta">Z. Yu, L. Ma, M. He, L. Isikdogan, Y. Xu, D. Smirnov, P. Salamanca, D. Mi, et al. — arXiv, 2026</p>
            </div>
          </div>
        </div>
      </div>
  );
}
