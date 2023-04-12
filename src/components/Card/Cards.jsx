import React from 'react'
import styles from './Cards.css'

const Cards = ({ results}) => {
  let display;

  if(results){
    display= results.map((x) =>{
      let {id,name,image,location,status}=x;
      return  (
      <div key={id} className='col-4 mb-4 position-relative'>
        <div className='card border-primary'>
          <img src={image} className=' rounded-start' alt="" />
          <div style={{padding: '10px'}} className='content'>
            <div className="fs-4 fw-bold mb-4"> {name}</div>
            <div className="">
              <div className="fs-6">Last Location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
         </div>
         <div className={`${styles.badge} badge bg-danger`}>{status} </div>
      </div>)
    });
  }else{
    display ='not found :/'
  }

  return (
    < >
      {display}
    </>
  )
}

export default Cards