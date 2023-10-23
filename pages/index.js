import React from 'react';
import Head from 'next/head';
import Videotg from './videotg';


const Home = () => {
  return (
    <>
    <Head>
    <title>Saúde Perfeita</title>
    <link rel='shortcut icon' href='/Icon.jpg' />

<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6536a37ec05627000846a8c7/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6536a37ec05627000846a8c7/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/6536a366a1e7020009844a79/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>
    </Head>
    <div>
    <div className='video-player-container-tigre'>
    <Videotg/>
    </div>
    </div>
    </>
  );
};

export default Home;


