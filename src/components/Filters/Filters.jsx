import React from "react";
import Gender from './Category/Gender'
import Status from './Category/Status'
import Species from './Category/Species'


const Filters = ({setStatus,setPageNumber, setGender}) => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
  );
};

export default Filters;
