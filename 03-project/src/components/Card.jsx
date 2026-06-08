import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
   <>
   <div className='parent'>
    <div className='card '>
    <div className='top'>
      <img src={props.img} alt="Card Image" />
      <button>Save <Bookmark color="rgba(133, 129, 129, 1)" size={16} /> </button>
    </div>
    <div className='center'>
    <div className='info'>
        <p><b>{props.company}</b></p>
        <p className='date'>{props.days}</p>
    </div>
    <h3>{props.role}</h3>
    </div>
    <div className='center-buttons'>
      <button>Apply Now</button>
      <button>Share</button>    
    </div>
    <div className='divider'>
      <hr />
    </div>
    <div className='bottom'>
    <div className='salary'>
        <p><b>{props.Salary}</b></p>
        <p className='location'>{props.location}</p>

    </div>
    <button>Apply Now</button>
    </div>
    </div>
   </div>
   
   </>
  )
}

export default Card
