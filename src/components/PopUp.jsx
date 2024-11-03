import { X } from "lucide-react";

export default function PopUp({isPopUp, setTrigger, title, children}) {
    return isPopUp && (
        <div className="fixed top-0 right-0 left-0 w-full h-screen flex items-center justify-center bg-gray bg-opacity-50">
            <div className="relative bg-white w-1/2 min-h-40 rounded-xl drop-shadow-md md:max-w-[400px]">
                <div className="flex items-center justify-between bg-primary px-5 py-3 rounded-ss-xl rounded-se-xl">
                    <h3 className="text-xl font-poppins text-secondary">{title}</h3>
                    <X className="text-secondary hover:text-background cursor-pointer" size={25}
                    onClick={() => setTrigger(false)}/>
                </div>
                <div className="px-5 py-3">
                    {children}
                </div>
            </div>
        </div>
    );
}