import React, { useState } from 'react';

const AudioRecorder = () => {
    const [audioURL, setAudioURL] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [duration, setDuration]=useState(0)
    let audiochunks=[]
    // const newMediaRecorder = new MediaRecorder(stream);

    const buttonStyle={
        backgroundColor: "dodgerblue",
        color: "white",
        padding: "15px 20px",
        border: "none",
        cursor: "pointer",
        width: "100%",

        opacity: 0.9
    }

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const newMediaRecorder = new MediaRecorder(stream);
                newMediaRecorder.ondataavailable = (event) => {
                    audiochunks.push(event.data);
                    // if (event.data.size > 0) {
                    //     setAudioURL(URL.createObjectURL(event.data));
                    // }
                };
                // newMediaRecorder.addEventListener("stop", () => {
                //     // Step 5: Create a blob from the audio chunks
                //     const audioBlob = new Blob(audiochunks, { type: "audio/mp3" });
                //     const audioUrl = URL.createObjectURL(audioBlob);
                    
                //     console.log(audioUrl); 
                //     setAudioURL(audioUrl)
                //     // var audio = new Audio(audioUrl); 
                //     // audio.addEventListener('loadedmetadata', function() {
                //     // console.log("Duration in seconds:", audio.duration);
                   
                //   });
                newMediaRecorder.start();
                setMediaRecorder(newMediaRecorder);
                setIsRecording(true);
            })
            .catch(err => console.log("Error accessing microphone:", err));
    }
      
    const stopRecording = () => {
        mediaRecorder.stop()
        setIsRecording(false);        
    };

    return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <div style={{margin: "10px"}}>
                <div style={{display:"flex"}}>
                    <button onClick={startRecording} disabled={isRecording} style={buttonStyle}>Start Recording</button>
                        &nbsp;&nbsp;
                    <button onClick={stopRecording} disabled={!isRecording} style={buttonStyle}>Stop Recording</button>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <div style={{marginTop:"8px"}}>
                {audioURL && <audio id="audio" src={audioURL} controls />}
                
            </div>
        </div>
    );
};

export default AudioRecorder;