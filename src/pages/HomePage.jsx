import React, { useCallback, useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import Cards from "../components/Card/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";
/* import Card from '../components/Card/Card'
import Cards from '../components/Card/Cards'
import SearchBar from '../components/Search/SearchBar'
import characters, { Rick } from '../data'
 */

const HomePage = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [ search, setSearch] = useState("")

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="">
      <h1 className="text-center ubuntu  my-4 text-primary">Rick and Morty </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row ">
            <Cards className='col-2' results={results}/>
          
       
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber } setPageNumber={setPageNumber}/>
    </div>
  );
};

export default HomePage;
