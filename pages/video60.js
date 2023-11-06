import React, { useEffect, useState } from 'react';
import Utm from '../public/utm';

function Video60() {
  const [areSectionsDisplayed, setAreSectionsDisplayed] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 21;
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
    script.id = 'scr_654009cc3a83fd0009b0b6b4';
    script.src =
      'https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/654009cc3a83fd0009b0b6b4/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id='vid_654009cc3a83fd0009b0b6b4'
        style={{ position: 'relative', width: '100%', padding: '178.21782178217822% 0 0' }}
      >
        <img
          id='thumb_654009cc3a83fd0009b0b6b4'
          src='https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/654009cc3a83fd0009b0b6b4/thumbnail.jpg'
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
          id='backdrop_654009cc3a83fd0009b0b6b4'
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
          <a href="https://app.chatonline.chat/tiger-20-60" className="custom-button">
            RECEBA SEU PRÊMIO AGORA!</a>
          <Utm/>
        </div>
      )}
    </div>
  );
}

export default Video60;
