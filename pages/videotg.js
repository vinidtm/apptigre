import React, { useEffect, useState } from 'react';

function Videotg() {
  const [areSectionsDisplayed, setAreSectionsDisplayed] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 7;
    const CLASS_TO_DISPLAY = '.esconder';

    let attempts = 0;
    let elsHiddenList = [];
    let elsDisplayed = false;
    const elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);
    const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

    setTimeout(() => {
      elsHiddenList = Array.from(elsHidden);
    }, 0);

    const showHiddenElements = () => {
      elsDisplayed = true;
      elsHiddenList.forEach((e) => (e.style.display = 'block'));
      localStorage.setItem(alreadyDisplayedKey, 'true');
      setAreSectionsDisplayed(true);
    };

    const startWatchVideoProgress = () => {
      if (
        typeof smartplayer === 'undefined' ||
        !(smartplayer.instances && smartplayer.instances.length)
      ) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(startWatchVideoProgress, 1000);
      }

      smartplayer.instances[0].on('timeupdate', () => {
        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY)
          return;
        showHiddenElements();
      });
    };

    if (alreadyElsDisplayed === 'true') {
      setTimeout(() => {
        showHiddenElements();
      }, 100);
    } else {
      startWatchVideoProgress();
    }

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'scr_6536a37ec05627000846a8c7';
    script.src =
      'https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6536a37ec05627000846a8c7/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id='vid_6536a37ec05627000846a8c7'
        style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
      >
        <img
          id='thumb_6536a37ec05627000846a8c7'
          src='https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6536a37ec05627000846a8c7/thumbnail.jpg'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          id='backdrop_6536a37ec05627000846a8c7'
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
          }}
        ></div>
      </div>
      {areSectionsDisplayed && (
          <div className='button-cont'>
          <a href="https://app.sistemacp7kparticipe.chat/f3-7k" className="custom-button">
            RECEBA SEU PRÉMIO AGORA</a>
        </div>

      )}
    </div>
  );
}

export default Videotg;
