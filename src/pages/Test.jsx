
import AdminBookCard from "../components/AdminBookCard";

import { useState } from "react";

export default function Test() {

    const [img, setimg] = useState("");
    const [currentImg, setCurrentImg] = useState("");

    const handleClick = () => {
        console.log(img);
        const reader = new FileReader();

        reader.addEventListener("load", () => { 
            setCurrentImg(reader.result);
            console.log(typeof(String(reader.result)));
        })
        reader.readAsDataURL(img);

        
    }

    return (
        <main className="h-screen flex items-center justify-center px-64">
            <div className="bg-white outline outline-1 outline-[#D9D9D9] rounded-xl p-5 w-full ">
                <input type="file" onChange={(e) => setimg(e.target.files[0])} /> <br />
                <button onClick={handleClick}>Submit</button>

                <img src={ currentImg} alt="img" />
            </div>
        </main>  
    );
}