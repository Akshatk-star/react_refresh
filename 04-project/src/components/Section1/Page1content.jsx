
import Boxes from './Boxes'

const arr = [
  { img: "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=900&auto=format&fit=crop&q=60&ixlib=rb-4...", numb: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },  // ✅ just the path
  { img: "box2.png", numb: 2, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },  // ✅ just the path
  { img: "box3.png", numb: 3, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." },  // ✅ just the path
];

const Page1content = () => {
  return (
    <>   
    <div className='flex mt-18 items-center justify-around'>
      <div className='w-1/3'>
        <h1 className='text-6xl pt-1 leading-14 w-20 tracking-[3px] font-bold'>Prospective </h1>
        <h1 className='text-6xl pt-1 leading-14 w-20 tracking-[3px] font-bold'>Customer </h1>
        <h1 className='text-6xl leading-14 pt-1 w-20 tracking-[3px] font-bold'>Segmentation</h1>
        <p className='text-[16px] pl-1 text-gray-400 font-semibold text-wrap pt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores, veniam quibusdam incidunt aliquid id est dignissimos eligendi fugit temporibus ut dolores molestias accusantium, dolore animi quisquam non. Et, est?</p>
      </div>
       {arr.map((item) => (
         <Boxes img={item.img} number={item.numb} text={item.text} />
       ))}
    </div>
     </>
  )
}

export default Page1content
