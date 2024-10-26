export default function BookCard() {
    return (
        <a href="#">
            <div className="bg-gray w-52 h-80 rounded-lg p-5 flex flex-col justify-between transition ease-in-out hover:scale-105 md:w-60 lg:w-64 lg:h-96">
                <div className="">
                    <div className="rounded-md bg-white h-44 flex justify-center lg:h-56">
                        <img className="h-full" src="src\assets\cover_test.jpg" alt="" />
                    </div>
                    <h4 className="mt-2 font-poppins">Noli Me Tangere</h4>
                    <p className="font-nunito text-darkgray text-sm">By Jose Rizal</p>
                </div>

                <div className="">
                    <p>1010</p>
                </div>
            </div>    
        </a>  
    );
}