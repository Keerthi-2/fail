import React, { useState } from 'react';
 
 
export default function Eye() {
    const [isChecked, setIsChecked] = useState(false);
 
    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };
 
    const [file, setFile] = useState();
    function handleChange1(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div style={{ color: "whitesmoke", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <div style={{ display: "flex", flexDirection:'column'}}>
                    <div>
                    <p style={{ fontSize: "25px", display: 'flex', justifyContent:"center" }}>Do you want to be test your eyes? </p>
                    </div>
                    <div style={{display:"flex", justifyContent:'center',alignItems: 'center'}}>
                        <br></br>
                        <label style={{alignItems:"center",paddingTop: "10px", paddingLeft:"10px"}}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleChange}
                        />
                        </label>
                        <p style={{marginLeft: "10px"}}>If yes click on the checkbox</p>

                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"center", alignItems:"center", marginTop:"15px"}}>
                    {isChecked &&
                    <div style={{display: "flex", flexDirection: "column", justifyContent:"center",alignItems:"center"}}>
                    <input style={{display:"flex",alignItems:"center", marginLeft:"120px"}}type="file" onChange={handleChange1} />
                        <div style={{marginTop: "20px"}}>
                            <img src={file} height='100px' />
                        </div>
                    </div>
                    }
                </div>
            </div > 
        </div>
 
    )
}