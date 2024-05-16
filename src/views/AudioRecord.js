import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const AudioRecorder = () => {
    const [audioURL, setAudioURL] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const randomNumber=Math.round(Math.random())
    const navigate=useNavigate()
    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const newMediaRecorder = new MediaRecorder(stream);
                newMediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        setAudioURL(URL.createObjectURL(event.data));
                    }
                };
                newMediaRecorder.start();
                setMediaRecorder(newMediaRecorder);
                setIsRecording(true);
            })
            .catch(err => console.log("Error accessing microphone:", err));
    };

    const buttonStyle={
        backgroundColor: "dodgerblue",
        marginTop: "15px",
        color: "white",
        padding: "15px 20px",
        border: "none",
        cursor: "pointer",
        opacity: 0.9,
        width: "200px"

    }

    const uploadAudio = async (audioUrl) => {
        const response = await fetch(audioUrl);
        const blob = await response.blob();
        const formData = new FormData();
        formData.append('file', blob, 'audio.wav');
    
        try {
            const res = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    enctype: 'multipart/form-data',
                },
            });
            console.log('Server response:', res.data);
        } catch (error) {
            console.error('Error uploading audio:', error);
        }
    };
 
    const stopRecording = () => {
        mediaRecorder.stop();
        setIsRecording(false);
        uploadAudio(audioURL)
    };

    const handleDashboardClick=()=>{
        navigate('/admin/dashboard')
    }

    const handleresourcePageClick=()=>{
        navigate('/resources')
    }
 
    return (
        <div>
            <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
            &nbsp;&nbsp;
            <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
            <div style={{marginTop: "20px"}}>
                {audioURL && <audio src={audioURL} controls />}
            </div>
            {audioURL!="" && <div>
                {randomNumber==1 ?<div>
                    <h4 style={{marginTop: "15px"}}>You are stuttering</h4>
                    <button style={buttonStyle} onClick={handleresourcePageClick}>Need Help</button>
                </div>
                    :
                <div>
                    <h4 style={{marginTop: "15px"}}>Don't worry!! you are not stuttering</h4>
                    <button style={buttonStyle} onClick={handleDashboardClick}>Go To dashboard</button>
                </div>}
            </div>}
        </div>
    );
};
 
export default AudioRecorder;