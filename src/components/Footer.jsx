import { Mail } from "lucide-react";
import { FaSquareInstagram, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-background rounded-t-lg mt-10">
            <div className="flex flex-col h-64 px-8 py-8 md:px-16 lg:px-16 lg:flex-row lg:pb-0 2xl:px-64">
                <div className="h-full lg:basis-full">
                    <div className="w-max">
                        <a href="/">
                            <img src="src\assets\libro-logo.svg" alt="logo" className=""/>
                        </a>
                    </div>
                    <div>   
                        <p className="text-sm font-nunito text-secondary">
                            For inquiries/concerns <br />
                            get in touch with us at
                        </p>
                        <div className="mt-3 flex flex-row gap-2 items-center">
                            <Mail color="#fefae0"/>
                            <p className="text-sm text-secondary font-nunito">loniantech24@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-end justify-start py-5 lg:basis-full lg:justify-end">
                    <a href="#">
                        <FaSquareXTwitter className="size-8 text-secondary"/>
                    </a>
                    <a href="#">
                        <FaFacebookSquare className="size-8 text-secondary"/>
                    </a>
                    <a href="https://www.youtube.com">
                        <FaYoutube className="size-8 text-secondary"/>
                    </a>
                    <a href="#">
                        <FaSquareInstagram className="size-8 text-secondary"/>
                    </a>
                </div>
            </div>

            <div className="p-8 md:px-16 lg:px-16 2xl:px-64">
                <hr className="w-full h-px bg-darkgray border-0 rounded-md" />
                <p className="text-center font-nunito mt-2 text-secondary text-sm">LIBRO COPYRIGHT &copy; 2024. ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
}