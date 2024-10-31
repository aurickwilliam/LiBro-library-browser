import { SquareLibrary, CircleUser, Pencil, LogOut } from "lucide-react"

// Auth
import { auth } from "../utils/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function AdminSideBar({active}) {

    const route = useNavigate();

    const logout = async () => {
        try {
            await signOut(auth).then(data => {
                route("/adminloginpage");
            })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <aside className="bg-background fixed w-[250px] h-screen rounded-se-xl rounded-ee-xl p-5">
            <div className="p-2">
                <img src="src\assets\libro-logo.svg" alt="logo" />
            </div>

            <ul className="mt-5 flex flex-col gap-5">
                <li>
                    <a className={`w-full flex gap-2 text-lg font-poppins text-secondary items-center p-2 rounded-lg hover:bg-primary ${active === "listOfBooks" ? "bg-primary" : ""}`} href="adminbookspage">
                        <SquareLibrary className="text-secondary" size={25}/>
                        List of Books
                    </a>
                </li>    
                <li>
                    <a className={`w-full flex gap-2 text-lg font-poppins text-secondary items-center p-2 rounded-lg hover:bg-primary ${active === "adminList" ? "bg-primary" : ""}`} href="adminlistpage">
                        <CircleUser  className="text-secondary" size={25}/>
                        Admins
                    </a>
                </li>   
                <li>
                    <a className={`w-full flex gap-2 text-lg font-poppins text-secondary items-center p-2 rounded-lg hover:bg-primary ${active === "featuredAuthor" ? "bg-primary" : ""}`} href="adminfeatureauthorpage">
                        <Pencil  className="text-secondary" size={25}/>
                        Featured Author
                    </a>
                </li>   
            </ul>

            <div className="absolute bottom-0 left-0 m-5">
                <button className="w-full flex gap-2 text-lg font-poppins text-secondary items-center p-2 rounded-lg hover:bg-darkgray" onClick={logout}>
                    <LogOut  className="text-secondary" size={25}/>
                    Sign Out
                </button>
            </div>
            
        </aside>
    )
}