import React from 'react';
import './CaesarPoem.css'; 
function CaesarPoem() {
  return (
    <div className='container'>
      <div className='content'>
      {/* <p className='title'></p> */}
      <div className='poem-container'>
      <pre className='poem'>
        {`.Rockstar Presents

GDSC's a CTFFFFFFF
my mind is waitin
It's waitin

Put my mind of GDSC into This
my flag is not found
put This into my flag
put my flag into GDSC

shout GDSC
shout GDSC
shout GDSC

My song's something
put GDSC into This

Knock This down, down, down
put This into CTF

shout CTF
my lyric is nothing
Put This without my song into my lyric
Knock my lyric down, down, down

shout my lyric

Put my lyric into This
Put my song with This into my lyric
Knock my lyric down

shout my lyric

Build my lyric up, up, up

shout my lyric
shout GDSC
shout It

GDSC CTF is fun
security is important
Fun is fun
Put security with fun into GDSC CTF
Build Fun up
shout fun times GDSC CTF
put fun times GDSC CTF into my song

build it up

shout it
shout it

build it up, up
shout it
shout GDSC
shout It
        `}
      </pre>
      
    </div>

    
    </div>
      <div className='image-container'>
        <img src='/assets/pic.png' alt='pic' width={750} ></img>
      </div>
      <div className='image-container1'>
        <img src='/assets/pic1.png' alt='pic' width={300} ></img>
      </div>
       <div className='image-container2'>
        <img src='/assets/pic2.png' alt='pic' width={1200} ></img>
      </div>
    </div>
  );
}

export default CaesarPoem;
