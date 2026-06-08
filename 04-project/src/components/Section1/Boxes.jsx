const Boxes = (props) => {
  return (
    <div className="relative h-[500px] w-[350px] flex-shrink-0 snap-center rounded-2xl overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} alt={props.title} />
      
      {/* Overlay */}
      <div className="absolute  top-0 left-0 w-full p-4 bg-gradient-to-t">
       <p className="text-black bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
  {props.number}
</p>
        <p className="text-white mt-88 text-lg font-semibold">{props.text}</p>
      </div>
    </div>
  )
}

export default Boxes
