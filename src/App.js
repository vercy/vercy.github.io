import './App.css';
import fblogo from './Facebook_Logo_Secondary.png'
import ytlogo from './yt_icon_mono_dark.png'
import ghlogo from './GitHub_Logo_White.png'
import inlogo from './LI-In-Bug.png'

function App() {
  return (
    <div className="App">
      <div className='circle-wrapper '>
        <div className='tile vercy'>V</div>
        <div className='tile umlaut deg-0'>
        <a href="https://umlaut.hu">ÜD</a>
        </div>
        <div className='tile facebook deg-288'>
          <a href="https://facebook.com/megavercy">
            <img src={fblogo} alt="f" width="90px" />
          </a>
        </div>
        <div className='tile linkedin deg-216'>
          <a href="https://www.linkedin.com/in/megavercy">
            <img src={inlogo} alt="LinkedIn" height="70px" />
          </a>
        </div>
        <div className='tile youtube deg-72'>
          <a href="https://youtube.com/megavercy">
            <img src={ytlogo} alt="YouTube" width="90px" />
          </a>
        </div>
        <div className='tile github deg-144'>
          <a href="https://github.com/vercy">
            <img src={ghlogo} alt="GitHub" width="100px" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
