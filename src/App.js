
import React,{useState} from "react";
import data from "./data";
import Tour from "./components/Tour";

function App() {
  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newTours= tours.filter((tour)=>tour.id!==id);
    setTours(newTours)
  };

  if(tours.length===0){
    return(
      <div className="h-[100vh] flex flex-col gap-7 justify-center items-center">
        <h2 className="font-bold text-[40px] capitalize ">No Tours left</h2>
        <button onClick={()=>setTours(data)} className="ref-btn">
            Refresh
        </button>
      </div>
    )
  }
  return (
    <div className="max-w-[100vw] bg-slate-500 pt-[50px]">
        <Tour Tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
