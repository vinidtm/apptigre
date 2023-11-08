import React from 'react';
import Head from 'next/head';
import Video120 from './video120';
import ScriptUTM from '../public/Scriptutm';

const Pg120 = () => {
  return (
    <>
    <Head>
    <title>Tiger S </title>
    <link rel='shortcut icon' href='/Icon.jpg' />

<link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/653c0b4909054e00092a6b14/player.js" as="script"/>
<link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script"/>
<link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/653c0b4909054e00092a6b14/thumbnail.jpg" as="image"/>
<link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/653c0b3e67a28d0008192ed0/main.m3u8" as="fetch"/>
<link rel="dns-prefetch" href="https://cdn.converteai.net"/>
<link rel="dns-prefetch" href="https://scripts.converteai.net"/>
<link rel="dns-prefetch" href="https://images.converteai.net"/>
<link rel="dns-prefetch" href="https://api.vturb.com.br"/>

    </Head>
    <div>
    <div className='video-player-container-tigre'>
    <Video120/>
    <ScriptUTM/>
    </div>
    </div>
    </>
  );
};

export default Pg120;


