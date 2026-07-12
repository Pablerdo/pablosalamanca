import Nav from '../components/Nav';
import pabloAndNing from '../assets/photos/PabloAndNing.jpg';
import pikesPeak from '../assets/photos/PikesPeak.png';
import freshmanYear from '../assets/photos/FreshmanYear.jpg';
import pabloAtNurburgring from '../assets/photos/PabloAtNurburgring.PNG';

const photos = [
  {
    src: pabloAndNing,
    caption: 'Ning and me at CVPR.',
  },
  {
    src: pikesPeak,
    caption: 'Pikes Peak, Philadelphia to Los Angeles in a summer.',
  },
  {
    src: pabloAtNurburgring,
    caption: 'BMW M2 competition at the Nürburgring.',
  },
  {
    src: freshmanYear,
    caption: 'Freshman year.',
  },
];

export default function Photos() {
  return (
      <div className="Page-wrapper">
        <Nav />
        <div className="Photos-container">
          <div className="Photos-grid">
            {photos.map((photo) => (
                <div className="Photos-item" key={photo.src}>
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                  <p className="Photos-caption">{photo.caption}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
