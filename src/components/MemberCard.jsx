export default function MemberCard({name, position, motto, img}) {
    return (
        <div className="bg-gray w-56 h-76 rounded-xl flex flex-col transition ease-in-out hover:scale-105 lg:w-60 lg:h-80 xl:w-64 xl:h-96">
            <div className="basis-2/3 flex flex-col items-center p-5 xl:basis-11/12">
                <div className=" size-32 rounded-full bg-yellow-500 overflow-hidden outline outline-offset-1 outline-4 outline-primary lg:size-40 xl:size-52">
                    <img src={img} alt="member" className="size-full object-cover" />
                </div>
                <h3 className="mt-3 font-poppins text-background text-center text-sm">{name}</h3>
                <p className="font-poppins text-darkgray text-sm">{position}</p>
            </div>
            <div className=" basis-1/3 flex items-end justify-center p-5 xl:basis-1/12">
                <p className="font-nunito text-center text-sm">{ motto}</p>
            </div>
        </div>
    );
}