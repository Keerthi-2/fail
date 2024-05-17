import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
 
export default function Eye() {
 
    const navigate=useNavigate()
    const [file, setFile] = useState();
    function handleChange1(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const buttonStyle={
        backgroundColor: "dodgerblue",
        marginTop: "15px",
        color: "white",
        padding: "15px 20px",
        border: "none",
        cursor: "pointer",
        opacity: 0.9,
        width: "200px"

    };
     
    const handleClick = ()=>{
        navigate('/speechdoc')
    }
    return (
        <div style={{ color: "whitesmoke", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection:"column" }}>
            <h5 style={{fontSize: "30px"}}>Upload the image of your eye</h5>
            <div style={{display:"flex",justifyContent:"center", alignItems:"center", marginTop:"15px"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent:"center",alignItems:"center"}}>
                    <input style={{display:"flex",alignItems:"center", marginLeft:"120px"}}type="file" onChange={handleChange1} />
                    <div style={{marginTop: "20px"}}>
                        <img src={file} height='100px' />
                    </div>
                </div>
            </div>
            <div>
                {file!=null && <button style={buttonStyle} onClick={handleClick}>Need Help</button>}
            </div>
        </div > 
 
    )
}