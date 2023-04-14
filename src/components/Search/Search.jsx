import React from 'react'
import styles from './Search.module.css'
const Search = () => {
  return (
    <div className='container'>
        <form action="" className='d-flex justify-content-center gap-4 mb-5'>
            <input type="text" className={styles.input} placeholder='Search for Characters'/>
            <button className='btn btn-primary fs-5 border'>Search</button>
        </form>

    </div>
  )
}

export default Search