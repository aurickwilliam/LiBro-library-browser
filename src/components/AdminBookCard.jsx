import { Pencil, Trash2 } from 'lucide-react';

export default function AdminBookCard({ book, index }) {
    return (
        <div className="w-full max-h-12 flex items-center gap-4 p-2 rounded-lg hover:bg-slate-50 mb-5">
            <p className="font-sans">{index}</p>
            <div>
                <img src={book.imgURL} alt="book cover" className="w-8"/>
            </div>
            <div className="grid grid-cols-5 gap-3 w-full font-sans text-left items-center">
                <p className="col-span-2 line-clamp-1">{book.title}</p>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                <p>{book.location}</p>
            </div>
            <div className="flex items-center gap-3">
                <button className='p-1 rounded-md bg-darkgray hover:bg-[#D9D9D9]'>
                    <Pencil className='text-white' />
                </button>
                <button className='p-1 rounded-md bg-red-400 hover:bg-red-300'>
                    <Trash2 className='text-white'/>
                </button>
            </div>
        </div>
    )
}