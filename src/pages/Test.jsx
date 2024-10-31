
import Carousel from "../components/Carousel";
import { slides } from "../utils/carouselData.json";

export default function Test() {
    return (
        <>
            <div className=" w-full flex items-center justify-center py-8 px-8 md:px-16 2xl:px-64">
                <Carousel data={slides} autoSlide={true} interval={3000}/>
            </div>
        </>  
    );
}