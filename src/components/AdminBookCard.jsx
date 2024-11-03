import { Pencil, Trash2 } from 'lucide-react';

export default function AdminBookCard({ book, index, delfunc }) {
    return (
        <div className="w-full max-h-12 flex items-center gap-4 p-2 rounded-lg hover:bg-slate-50 mb-3">
            <p className="font-sans">{index}</p>
            <div>
                <img src={book.imgURL} alt="book cover" className="w-8"/>
            </div>
            <div className="grid grid-cols-5 gap-3 w-full font-sans text-left items-center">
                <p className="col-span-2 line-clamp-1">{book.title}</p>
                <p className='line-clamp-1'>{book.author}</p>
                <p className='line-clamp-1'>{book.genre}</p>
                <p className='line-clamp-1'>{book.location}</p>
            </div>
            <div className="flex items-center gap-3">
                <button className='p-1 rounded-md bg-darkgray hover:bg-[#D9D9D9]'>
                    <Pencil className='text-white' />
                </button>
                <button className='p-1 rounded-md bg-red-400 hover:bg-red-300' onClick={delfunc}>
                    <Trash2 className='text-white'/>
                </button>
            </div>
        </div>
    )
}