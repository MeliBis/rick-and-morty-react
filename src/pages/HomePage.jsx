import React, { useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import Cards from "../components/Card/Cards";
/* import Card from '../components/Card/Card'
import Cards from '../components/Card/Cards'
import SearchBar from '../components/Search/SearchBar'
import characters, { Rick } from '../data'
 */

const HomePage = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="">
      <h1 className="text-center ubuntu  my-4 text-primary">Rick and Morty </h1>
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
    </div>
  );
};

export default HomePage;
