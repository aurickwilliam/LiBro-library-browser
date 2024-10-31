import { Menu, User, Search, House, Box} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className=" bg-background px-8 h-full w-full flex items-center justify-between md:px-16 lg:px-16 xl:px-16 2xl:px-64 ">
            <div className='flex items-center'>
                <a href="/">
                    <img src="src\assets\libro-logo.svg" alt="logo" className='size-20' />
                </a>
            </div>

            <div className="gap-3 items-center flex">
                <div className="hidden relative xl:flex items-center">
                    <Search className="absolute left-1 cursor-pointer text-background hover:text-primary" size={25}/>
                    <input type="text" placeholder="Search..."className=" h-10 w-72 rounded-xl pl-8 outline-none focus:outline-primary font-poppins"/>
                </div>

                <a href="adminloginpage" >
                    <User size={25} className="text-secondary hover:text-primary cursor-pointer"/>
                </a>
                
                <Menu size={25} className="text-secondary hover:text-primary cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
            </div>

            <div className={`absolute z-10 top-20 right-0 w-full bg-background flex flex-col items-center font-poppins text-lg transform transition-transform ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} xl:w-80`}
            style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                <li className="list-none text-2xl text-secondary w-full text-center hover:bg-darkgray py-5">
                    <a href="/" className="flex items-center justify-center gap-2 ">
                        <House />
                        Home
                    </a>
                </li>
                <li className="list-none text-2xl text-secondary w-full text-center hover:bg-darkgray py-5">
                    <a href="aboutpage" className="flex items-center justify-center gap-2 ">
                        <Box />
                        About
                    </a>
                </li>
            </div>

            
        </nav>
    ); 
}