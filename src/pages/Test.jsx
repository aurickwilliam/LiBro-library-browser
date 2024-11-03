import AddBookPopUp from "../components/AddBookPopUp";
import { useState } from "react";
export default function Test() {
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

  // Variables for new Book
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookLocation, setBookLocation] = useState(0);

  const [img, setImg] = useState("");

  const addBook = () => {
    console.log("Added");
  }


  return (
    <main className="h-screen flex items-center justify-center px-64">
      <button
        className="px-5 py-1 bg-teal-400 rounded-lg text-white"
        onClick={togglePopUp}
      >
        +
      </button>
      <AddBookPopUp isPopUp={popUp} setTrigger={setPopUp} setTitle={setBookTitle} setAuthor={setBookAuthor} setGenre={setBookGenre} setLocation={setBookLocation} setImg={setImg} add_func={addBook} />
    </main>
  );
}
