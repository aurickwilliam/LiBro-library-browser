import { BookText } from "lucide-react";

export default function GenreCard({name, link}) {
    return (
        <a href={link}>
            <div className="transition ease-in-out bg-background w-full h-20 flex items-center p-3 rounded-md gap-1 hover:scale-110">
                <BookText color="#76A836" size={40}/>
                <h2 className="text-lg text-secondary font-poppins">{ name}</h2>
            </div>
        </a>  
    );
}