import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaYoutube, FaSquareInstagram } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import MemberCard from "../components/MemberCard";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <main>
            <NavBar/>
            
            <section className="flex flex-col min-h-screen 2xl:flex-row 2xl:h-screen">
                <div className="bg-white h-72 2xl:basis-full 2xl:h-full">
                    <img src="src\assets\book_cover.png" alt="cover" className="object-cover size-full opacity-50"/>
                </div>

                <div className="flex flex-col gap-12 items-center px-8 py-8 md:px-16 2xl:px-32 ">
                    <img src="src\assets\cat-logo-full.svg" alt="cat logo" className="size-72 2xl:size-96" />
                    {/* <div className="bg-background w-max px-10 py-5 rounded-lg">
                        <img src="src/assets/libro-logo.svg" alt="logo" />
                    </div> */}

                    <div className="w-full">
                        <h1 className="text-3xl font-poppins text-darkgray text-center 2xl:text-left">LiBro - Library Browser</h1>
                        <br />
                        <p className="text-lg text-justify font-nunito">
                            It is a custom made library catalog software that is designed for a specific university or institution library. In addition, LiBro contains all the wide range of books inside the library, each has its own accurate detail of information for each book. With the multiple convenient features users can easily find the books for their needs. With the user-friendly user interface, users can easily navigate through each book and librarians can conveniently keep track of the records of the book.
                        </p>
                        <br />
                        <br />
                        <br />
                        <h2 className="text-3xl font-domine italic text-center 2xl:text-left">“Finding Your Book That Deepens Your Mind.”</h2>
                    </div>

                    <div className="w-full flex justify-center h-max items-end gap-5 2xl:items-start 2xl:justify-start">
                        <a href="#">
                            <FaSquareXTwitter className="size-8 text-darkgray hover:text-background 2xl:size-12"/>
                        </a>
                        <a href="#">
                            <FaFacebookSquare className="size-8 text-darkgray hover:text-background 2xl:size-12"/>
                        </a>
                        <a href="https://www.youtube.com">
                            <FaYoutube className="size-8 text-darkgray hover:text-background 2xl:size-12" />
                        </a>
                        <a href="#">
                            <FaSquareInstagram className="size-8 text-darkgray hover:text-background 2xl:size-12"/>
                        </a>
                    </div>
                </div>
            </section>

            <section className="min-h-screen mt-20">
                <div className="bg-primary px-8 h-16 flex items-center md:px-16 2xl:px-32">
                    <h1 className="text-secondary font-poppins text-3xl">Team Members</h1>
                </div>

                <div className="grid grid-cols-2 px-8 mt-5 gap-5 place-items-center md:px-16 lg:grid-cols-3 xl:grid-cols-4 2xl:px-32">
                    <MemberCard name="Allen Joseph Cabatingan" position="CEO" motto="Hega lang sapat na" img="src\assets\MemberPic\aj.jpg"/>
                    <MemberCard name="Aurick William Lorenzo" position="CTO" motto="For to love is to remember" img="src\assets\MemberPic\ako.jpg"/>
                    <MemberCard name="Mhart Aaron Navales" position="UI/UX Designer" motto="Ara ara ara" img="src\assets\MemberPic\mhart.jpg"/>
                    <MemberCard name="Tristan Carl Bugas" position="Product Manager" motto="Booga Bugs" img="src\assets\MemberPic\bugs.jpg"/>
                    <MemberCard name="Charle Fulgencio" position="Sales Team" motto="deymmmmmm" img="src\assets\MemberPic\charle.jpg"/>
                    <MemberCard name="Jenny Bonde" position="Sales Team" motto="aigoo" img="src\assets\MemberPic\jenny.jpg"/>
                    <MemberCard name="Edrian Sarte" position="UI/UX Desinger" motto="Damn" img="src\assets\MemberPic\sarte.jpg"/>
                    <MemberCard name="Joshua Marco Ocampo" position="Development Team" motto="Damn" img="src\assets\MemberPic\ai.jpg"/>
                    <MemberCard name="Ivan Cristopher Talion" position="Development Team" motto="Damn" img="src\assets\MemberPic\ai.jpg"/>
                    <MemberCard name="Angelo Barbosa" position="Development Team" motto="Damn" img="src\assets\MemberPic\ai.jpg"/>
                </div>
            </section>
                
            <section className="px-8 mt-10 md:px-16 2xl:px-32">
                <hr className="h-1 border-0 bg-background rounded-full"/>
                <div className="my-8 px-8 xl:px-16 2xl:px-32" >
                    <p className="text-xl text-center font-poppins leading-8">
                    "Dedicated to empowering education through innovation, we design intuitive catalog systems that streamline school operations, enhance learning experiences, and simplify access to knowledge. Our commitment is to provide reliable, user-friendly software that supports educators and students alike, fostering growth and success in every academic journey."
                    </p>
                </div>
            </section>

            <Footer></Footer>
        </main>  
    );
}