import React,{ useState } from "react";

const Traffic = () => {
    return (
        <div>
            <div className="Traffic-top">
                
            </div>
            <div className="col-md-1 bg-dark mx-auto rounded">
                <div className="row">
                    <div className="col-md-1 rounded-circle">
                        <button className="RedLight rounded-circle mx-auto mb-1 mt-1"></button>
                    </div>
                 </div>
                <div className="row">
                    <div className="col-md-1 rounded-circle">
                    <button className="YellowLight rounded-circle mx-auto mb-1 mt-1"></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                    <button className="GreenLight rounded-circle mx-auto mb-1 mt-1"></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Traffic;