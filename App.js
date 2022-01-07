import axios from "axios";
import { useState } from "react";
export default function App() {
    return (
        <div className="container-fluid">
            {""}
            <Mycomponent/>
        </div>
    );
}
function Mycomponent() { 
    const heraderApp = "MyChat";
    
    const [inputchat, setinputchat] = useState("");
    const handleinput = (e) => {
        const newvalue = e.targeget.value;
        setinputchat(newvalue);
    };
    const sendmassge = () => { };
    
    

    return (
        <div>
            <div className="row bg-secondary p-3">
                <div className="col fs-1">{heraderApp} </div>
                
               
             </div>
            <div className="row mt-2">
                <div className="col-10" p-2 h-50>
                    <input type="text" placeholder="chat here.."
                        className="form-control w-100 p-3 rounded-pill"
                        onChange={handleinput} />
                       <div className="col-2 p-2">
                        <input
                            type="button"
                            value="send"
                          className="form-control w-100 p-3 rounded-pill" 
                            
                        />
                   </div>
                </div>
            </div>
           


       </div>
        
    )

}
