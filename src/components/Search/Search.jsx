import React from 'react'
import styles from './Search.module.css'


const Search = ({setSearch, setPageNumber}) => {
  return (
    <div className='container'>
        <form action="" className='d-flex justify-content-center gap-4 mb-5'>
            <input 
            onChange={(e)=> {
               setPageNumber(1); 
              setSearch(e.target.value);
            }}
            type="text" 
            className={styles.input} 
            placeholder='Search for Characters'/>
            <button onClick={e=> {e.preventDefault()}} className={`${styles.btn} btn btn-primary fs-5 border`}>Search</button>
        </form>

    </div>
  )
}

export default Search