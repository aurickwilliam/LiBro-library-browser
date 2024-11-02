import AdminSideBar from "../components/AdminSideBar";

import { useState, useEffect } from "react";

// Firestore
import { bookDB } from "../utils/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function AdminBooksPage() {
  const [bookList, setBookList] = useState([]);

  // Variables for new Book
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookLocation, setBookLocation] = useState(0);
  const [bookImgUrl, setBookImgUrl] = useState();

  const [img, setImg] = useState("");

  // Reference to the Database
  const booksCollectionRef = collection(bookDB, "books");

  const getBookList = async () => {
    try {
      const data = await getDocs(booksCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBookList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBookList();
  }, []);

  let url = "";

  const generateURL = () => {
    const reader = new FileReader();
    reader.onload = () => {
      url = reader.result;
    };
    reader.readAsDataURL(img);
  };

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
  const addBook = async () => {
    generateURL();
    try {
      await sleep(1000);
      await addDoc(booksCollectionRef, {
        title: bookTitle,
        author: bookAuthor,
        genre: bookGenre,
        location: bookLocation,
        imgURL: url,
      });
      console.log("URL: " + url);
      getBookList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBook = async (id) => {
    try {
      const bookDoc = doc(bookDB, "books", id);
      await deleteDoc(bookDoc);

      getBookList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className=" bg-gray">
      <AdminSideBar active={"listOfBooks"} />
      <section className="h-max pl-[300px] py-5 pr-12">
        <h1 className="text-3xl font-poppins text-primary">Welcome!</h1>
        <br />
        <div className="w-full h-12 rounded-lg bg-primary flex items-center pl-3">
          <h1 className="text-lg font-poppins text-secondary">
            List of Books:
          </h1>
        </div>
        <br />
        <div className="w-full h-max bg-white rounded-xl border-0 outline outline-1 outline-[#D9D9D9] p-3 drop-shadow-sm">
          {bookList.map((book, key) => (
            <div key={key} className="mb-10">
              <img src={book.imgURL} alt="book cover" className="w-16"/>
              <h1>{book.title}</h1>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Location: {book.location}</p>
              <button
                onClick={() => deleteBook(book.id)}
                className="bg-red-400 p-2 rounded-md text-secondary"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <br />
        <br />
        <div className="flex flex-col gap-3 w-max">
          <input
            type="text"
            placeholder="Book Title..."
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Author..."
            onChange={(e) => setBookAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Genre..."
            onChange={(e) => setBookGenre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Book Location..."
            onChange={(e) => setBookLocation(Number(e.target.value))}
          />
          <input
            type="file"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />

          <button
            className="bg-primary text-left h-10 p-2 rounded-md"
            onClick={addBook}
          >
            Add
          </button>
        </div>
      </section>
    </main>
  );
}
