import { X } from "lucide-react";

import { genres } from "../utils/data.json";
import { useState } from "react";

import PopUp from "./PopUp";

export default function AddBookPopUp({
  isPopUp,
  setTrigger,
  setImg,
  setTitle,
  setGenre,
  setAuthor,
  setLocation,
  add_func,
}) {
  const [TempGenre, setTempGenre] = useState("");
  const [TempTitle, setTempTitle] = useState("");
  const [TempAuthor, setTempAuthor] = useState("");
  const [TempLocation, setTempLocation] = useState("");
  const [TempImg, setTempImg] = useState("");

  // For PopUp
  const [popUp, setPopUp] = useState(false);
  const [messagePopUp, setMessagePopUp] = useState("");

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  const validate_input = () => {
    if (
      TempGenre === "" ||
      TempTitle === "" ||
      TempAuthor === "" ||
      TempLocation === "" ||
      TempImg === ""
    ) {
      togglePopUp();
      setMessagePopUp("Please Fill-Out all the Fields");
      return;
    }

    if (TempLocation.length < 3 || Number(TempLocation) > 999.999) {
      togglePopUp();
      setMessagePopUp("Invalid Dewey Decimal Classification");
      return;
    }

    if (TempImg.size > 1048487) {
      togglePopUp();
      setMessagePopUp("Invalid Book Cover Image! <br/>Select a small KB/Bit File Image ");
      return;
    }

    console.log(TempImg);

    setTitle(TempTitle);
    setAuthor(TempAuthor);
    setGenre(TempGenre);
    setLocation(Number(TempLocation));
    setImg(TempImg);

    add_func();
    setTrigger(false);
  };
  return (
    isPopUp && (
      <div className="fixed top-0 right-0 left-0 w-full h-screen flex items-center justify-center bg-gray bg-opacity-50">
        <div className="relative bg-white w-3/12 min-h-40 rounded-xl border-0 outline outline-1 outline-[#D9D9D9] drop-shadow-sm p-5">
          <div className="flex justify-between">
            <h3 className="text-xl font-poppins text-background">Add a Book</h3>
            <X
              className="text-background hover:text-primary cursor-pointer"
              size={25}
              onClick={() => setTrigger(false)}
            />
          </div>
          <div className="mt-10 text-background text-lg flex flex-col gap-3">
            <div>
              <h3 className="font-poppins">Title:</h3>
              <input
                type="text"
                className="bg-white w-full border-0 outline outline-1 outline-[#D9D9D9] h-10 rounded-lg p-2 mt-2 text-base focus:outline-2 focus:outline-primary"
                onChange={(e) => setTempTitle(e.target.value)}
              />
            </div>
            <div>
              <h3 className="font-poppins">Author:</h3>
              <input
                type="text"
                className="bg-white w-full border-0 outline outline-1 outline-[#D9D9D9] h-10 rounded-lg p-2 mt-2 text-base focus:outline-2 focus:outline-primary"
                onChange={(e) => setTempAuthor(e.target.value)}
              />
            </div>
            <div>
              <h3 className="font-poppins">Genre:</h3>
              <select
                className="w-full bg-white border-transparent border-r-8 outline outline-1 outline-[#D9D9D9] h-10 rounded-lg p-2 text-base focus:outline-2 focus:outline-primary"
                onChange={(e) => setTempGenre(e.target.value)}
              >
                <option value="" selected disabled hidden>...</option>
                {genres.map((genre, key) => (
                  <option key={key}>{genre.title}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className="font-poppins">Location:</h3>
              <input
                type="number"
                className="bg-white w-full border-0 outline outline-1 outline-[#D9D9D9] h-10 rounded-lg p-2 mt-2 text-base focus:outline-2 focus:outline-primary"
                onChange={(e) => setTempLocation(e.target.value)}
              />
            </div>

            <div className="mt-2">
              <input
                type="file"
                className="file:bg-primary file:rounded-md file:border-0 file:px-3 file:py-1 file:text-base file:text-secondary file:font-poppins text-base text-darkgray"
                accept="image/png, image/jpg, image/jpeg"
                onChange={(e) => setTempImg(e.target.files[0])}
              />
            </div>
          </div>

          <div className="mt-5">
            <button
              className="w-full bg-primary py-2 rounded-lg text-secondary font-poppins"
              onClick={validate_input}
            >
              Add
            </button>
          </div>
        </div>

        {popUp && (
          <PopUp isPopUp={popUp} setTrigger={setPopUp} title={"Invalid Input"}>
            <h1 className="text-base">{messagePopUp}</h1>
          </PopUp>
        )}
      </div>
    )
  );
}
