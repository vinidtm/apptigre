import React from 'react';
import Head from 'next/head';
import Video60 from './video60';



const Pg60 = () => {
  return (
    <>
    <Head>
    <title>Tiger S </title>
    <link rel='shortcut icon' href='/Icon.jpg' />

<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/654009cc3a83fd0009b0b6b4/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/654009cc3a83fd0009b0b6b4/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/654009c4ff93bd00091a321c/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>

    </Head>
    <div>
    <div className='video-player-container-tigre'>
    <Video60/>
    </div>
    </div>
    </>
  );
};

export default Pg60;


