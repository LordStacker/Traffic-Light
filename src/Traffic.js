import React,{ useState } from "react";

const Traffic = () => {
    const [onred, setRed] = useState(false);
    const [onyellow, setYellow] = useState(false);
    const [ongreen, setGreen] = useState(false);
    const Changecolor = (o) => {
        if(o.target.id === "redlight"){
            setRed(true);
            setYellow(false);
            setGreen(false);
        }
        else if(o.target.id === "yellowlight"){
            setRed(false);
            setYellow(true);
            setGreen(false);
        }
        else if(o.target.id === "greenlight"){
            setRed(false);
            setYellow(false);
            setGreen(true);
        }

    }

    return (
        <div>
            <div className="Traffic-top">
                
            </div>
            <div className="col-md-1 bg-dark mx-auto rounded">
                <div className="row">
                    <div className="col-md-1">
                        <button id="redlight" className={`RedLight rounded-circle mx-auto mb-1 mt-1 ${onred === true ? "highlighter" : ""}`} onClick={Changecolor}></button>
                    </div>
                 </div>
                <div className="row">
                    <div className="col-md-1">
                    <button id="yellowlight" className={`YellowLight rounded-circle mx-auto mb-1 mt-1 ${onyellow === true ? "highlighter" : ""}`} onClick={Changecolor}></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                    <button id="greenlight" className={`GreenLight rounded-circle mx-auto mb-1 mt-1 ${ongreen === true ? "highlighter" : ""}`} onClick={Changecolor}></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Traffic;