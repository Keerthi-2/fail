import React from "react";
import AudioRecorder from './AudioRecord';


function SpeechTest(){
    const sentences=[["I want to go to the park",1.4],["I'm not sure what you mean by that",2.7],["Could you please repeat that",2],
    ["Thanks for everything. I really appreciate it",3.2],["hello is anyone there",2.1],["why would you say something like that",2.7],
    ["can you help me with this",1.5],["let's just take a moment to think about this",2.8]]
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center", height:"100vh"}}>
        <div style={{textAlign:"center"}}>
            <div>
               Please speak the below sentence
            </div>
            <div style={{margin: "15px"}}>
                <h3>{sentences[Math.floor(Math.random()*(8))][0]}</h3>
            </div>
            <div>
                <AudioRecorder />
            </div>
        </div>
    </div>
  )
}

export default SpeechTest;
