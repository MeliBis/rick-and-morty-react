import React, { useEffect, useState } from "react";
import Filters from "../components/Filters/Filters";
import Cards from "../components/Card/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";


const HomePage = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [ search, setSearch] = useState("")
  let [status,setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="">
    
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
            <Filters 
            setSpecies={setSpecies}
            setGender={setGender} 
            setStatus={setStatus} 
            setPageNumber={setPageNumber}/>
        
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
