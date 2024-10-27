import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AtSign, Lock, Eye, EyeOff} from "lucide-react";
import { useState } from "react";

export default function AdminLoginPage() {
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <main>
            <NavBar/>
            <section className="min-h-screen flex items-center justify-center px-8">
                <div className="bg-background w-full rounded-xl p-7 sm:w-96 lg:w-[500px]">
                    <h1 className="text-3xl text-secondary font-poppins mb-7">Admin Login</h1>

                    <div className="flex flex-col gap-5">                        
                        <div className="relative w-full flex items-center">
                            <AtSign className="absolute left-3 text-primary"/>
                            <input type="text" name="email" placeholder="Email..." onChange={ (e) => setEmail(e.target.value)} className="w-full h-12 pl-10 rounded-lg border-0 font-sans outline-none border-primary focus:border-2"/>
                        </div>

                        <div className="relative w-full flex items-center">
                            <Lock className="absolute left-3 text-primary"/>
                            <input type={passwordVisibility ? "text" : "password"} name="email" placeholder="Password..." onChange={ (e) => setPassword(e.target.value)} className="w-full h-12 px-10 rounded-lg border-0 font-sans outline-none border-primary focus:border-2" />
                            <div className="absolute right-3 cursor-pointer" onClick={() => setPasswordVisibility(!passwordVisibility)}>
                                {passwordVisibility ?  <EyeOff className="text-primary"/>: <Eye className="text-primary"/>}
                            </div>
                        </div>
                        <button onClick={login} className="w-full bg-primary h-12 rounded-lg text-xl font-poppins text-secondary hover:bg-[#85C534]">Login</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}