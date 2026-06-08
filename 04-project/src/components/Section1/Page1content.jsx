
import Boxes from './Boxes'

const arr = [
  { img: "https://images.unsplash.com/photo-1543965860-82ed7d542cc4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbiUyMHVzaW5nJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D", numb: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },  // ✅ just the path
  { img: "https://plus.unsplash.com/premium_photo-1701091956254-8f24ea99a53b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFyayUyMGFlc3RoZXRpY3xlbnwwfHwwfHx8MA%3D%3D", numb: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },  // ✅ just the path
  { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww", numb: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." }, 
  { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww", numb: 4, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },
  { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww", numb: 5, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },
  { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww", numb: 6, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." }, // ✅ just the path
];

const Page1content = () => {
  return (
    <>   
    <div className='flex mt-18 items-center justify-around'>
      <div className='w-[40%]'>
        <h1 className='text-6xl pt-1 leading-14 w-20 tracking-[3px] font-bold'>Prospective </h1>
        <h1 className='text-6xl pt-1 leading-14 w-20 tracking-[3px] font-bold'>Customer </h1>
        <h1 className='text-6xl leading-14 pt-1 w-20 tracking-[3px] font-bold'>Segmentation</h1>
        <p className='text-[16px] pl-1 text-gray-400 font-semibold text-wrap pt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores, veniam quibusdam incidunt aliquid id est dignissimos eligendi fugit temporibus ut dolores molestias accusantium, dolore animi quisquam non. Et, est?</p>
      </div>
       <div className="flex w-2/3 overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 px-6 no-scrollbar">
    {arr.map((item) => (
      <Boxes img={item.img} number={item.numb} text={item.text} />
    ))}
  </div>
    </div>
     </>
  )
}

export default Page1content
