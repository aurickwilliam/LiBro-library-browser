import Slider from '../components/Slider';
import GenreCard from '../components/GenreCard';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';



const slider_img = [
  "src\\assets\\img1.png",
  "src\\assets\\img2.png",
  "src\\assets\\img3.png"
]


export default function App() {

  const genre_list = [
    "Technology",
    "Fiction",
    "Non-Fiction",
    "History",
    "Science",
    "Novels",
    "Programming",
    "Mathematics"
  ]


  return (
    <main className='box-border'>
      <NavBar></NavBar>
      <section className="">

        <div className="px-8 py-8 h-full flex flex-col md:px-16 2xl:px-32">
          <div className='mb-4'>
            <h2 className=' text-2xl font-poppins text-primary md:text-3xl'>Magandang Umaga!</h2>
          </div>

          <div className='p-5 rounded-md border border-1 border-background '>
            {/* <div className='bg-yellow-500 h-full'>
              <Slider autoSlide={false} interval={3000}>
                {slider_img.map((slide) => (
                  <img src={ slide } alt="" className='rounded-md w-full'/>
                ))}
              </Slider>
            </div> */}
            <div className="h-full bg-red-500 rounded-md flex justify-center">
              <img src="src\assets\img1.png" alt="" className='w-full size-[200px] rounded-md md:size-full lg:size-8/12 2xl:size-4/6'/>
            </div>
          </div>
          
        </div>
      </section>

      <section>
        <div className='px-8 mb-16 md:px-16 2xl:px-32'>
          <h2 className='text-2xl text-primary font-poppins mb-4 md:text-3xl'>Genre</h2>

          <div className='w-full grid grid-cols-2 gap-8 lg:grid-cols-3 2xl:grid-cols-4'>
            {
              genre_list.map((genre) => (
                <GenreCard name={genre} link='#'/>
              ))
            }
          </div>
        </div>
        
        <div className='px-8 mb-16 md:px-16 2xl:px-32'>
          <h2 className='text-2xl text-primary font-poppins mb-4 md:text-3xl'>Popular Books</h2>
          
          <div className='w-full grid grid-cols-2 gap-5 place-items-center lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-8'>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
          </div>
        </div>
      </section>

      <section className='bg-secondary py-16 flex flex-col gap-8 px-8 md:px-16 lg:flex-row 2xl:px-32'>
        <div className='rounded-lg h-64 flex justify-center lg:w-full'>
          <img src="src\assets\fujimoto.png" alt="fujimoto" className='rounded-lg'/>
        </div>

        <div className=''>
          <h2 className='text-2xl font-poppins text-background mb-5 lg:text-3xl' >Featured Author</h2>
          <div className='w-max'>
            <h4 className='text-xl font-nunito italic text-background lg:text-2xl'>Tatsuki Fujimoto</h4>
            <hr className='w-full h-1 mt-2  mb-5 rounded-md bg-primary border-0' />
          </div>

          <p className='text-justify text-base font-nunito lg:text-lg'>
          A Japanese manga artist best known for creating Chainsaw Man and Fire Punch. Born on October 10, 1992, Fujimoto is recognized for his unique storytelling, blending dark, violent themes with quirky humor and deep emotional depth. His art style is gritty yet expressive, and his works often explore complex psychological and philosophical questions. Chainsaw Man in particular has gained international acclaim, thanks to its unpredictable plot, dynamic action sequences, and well-developed characters. Fujimoto's approach often breaks conventional manga tropes, making his stories highly original and compelling.
          </p>
        </div>
      </section>
      
      <Footer></Footer>
    </main>
  );
}
