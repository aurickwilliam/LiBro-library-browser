import { Children, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ children: slide, autoSlide=false, interval=3000 }) {
    const arrayChildren = Children.toArray(slide);
    
    const [slide_no, setSlide_no] = useState(0);

    const prev_btn = () => setSlide_no((slide_no) => (slide_no === 0 ? Children.count(slide) - 1 : slide_no - 1))

    const next_btn = () => setSlide_no((slide_no) => (slide_no === Children.count(slide) - 1 ? 0 : slide_no + 1))

    // Auto Slide
    useEffect(() => {
        if (!autoSlide) return
        
        const slideInterval = setInterval(next_btn, interval);
        return () => clearInterval(slideInterval);
    }, [])

    return (
        <div className="overflow-hidden relative bg-yellow-400 h-full">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${slide_no * 100}%)`}}>
                {slide}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-2">
                <button onClick={prev_btn} className="p-1 bg-slate-100 rounded-full shadow text-gray-800 hover:bg-white">
                    <ChevronLeft size={30}/>
                </button>

                <button onClick={next_btn} className="p-1 bg-slate-100 rounded-full shadow text-gray-800 hover:bg-white">
                    <ChevronRight size={30}/>
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {Children.map(arrayChildren, (_, i) => (
                        <div className={`transition-all w-3 h-3 bg-slate-50 rounded-full ${slide_no === i ? "bg-white" : "bg-opacity-50"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
