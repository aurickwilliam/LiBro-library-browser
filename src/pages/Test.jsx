
import { useState } from "react";
import PopUp from "../components/PopUp";

export default function Test() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopUp = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className="bg-blue-300" onClick={togglePopUp}>Open Pop Up</button>
            <PopUp isPopUp={isOpen} setTrigger={setIsOpen} title={"Error"}>
                <h1>Hello Donna</h1>
                <p>Invalid Credentials</p>
            </PopUp>
        </>  
    );
}