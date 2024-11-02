import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Carousel({ data, autoSlide, interval }) {
  const slide_length = Object.keys(data).length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const prev_btn = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slide_length - 1 : currentSlide - 1
    );
  };

  const next_btn = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === slide_length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next_btn, interval);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center outline outline-1 outline-[#D9D9D9] p-5 rounded-xl drop-shadow-sm">
      <div className="w-full h-[270px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
        {data.map((data, key) => (
          <img
            src={data.src}
            alt={data.alt}
            key={key}
            className={`rounded-lg size-full ${
              currentSlide === key ? "inline" : "hidden"
            }`}
          />
        ))}
      </div>

      <div className="w-full mt-5 flex items-center justify-center relative">
        <span className="flex gap-2 items-center">
          {data.map((_, key) => (
            <button
              key={key}
              onClick={() => setCurrentSlide(key)}
              className={`size-3 rounded-full ${
                currentSlide === key ? "bg-slate-300" : "bg-slate-100"
              }`}
            ></button>
          ))}
        </span>
        <div className="absolute flex gap-2 right-0">
          <ChevronLeft
            className="bg-white rounded-full size-7 text-darkgray hover:bg-gray cursor-pointer"
            onClick={prev_btn}
          />
          <ChevronRight
            className="bg-white rounded-full size-7 text-darkgray hover:bg-gray cursor-pointer"
            onClick={next_btn}
          />
        </div>
      </div>

      {/* 1360 500 */}
    </div>
  );
}
