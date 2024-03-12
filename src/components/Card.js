
import { useState } from "react";

function Card(props){
    const [readMore,setReadMore]=useState(false);
    const description=readMore?props.info:`${props.info.substring(0,78)}....`;
    function readMoreHandler(){
        setReadMore(!readMore);
    }

    return (
        <div className="flex flex-col flex-wrap w-[350px]  p-[15px] shadow-md shadow-black rounded-md bg-blue-300">
            <img src={props.image} title="tour image" alt="image" className=" w-[400px] aspect-square object-cover" loading="lazy"></img>
            <div>
                <div className="">
                    <h4 className="text-xl text-red-600 pt-2">{props.name}</h4>
                    <h4 className="text-xl text-gray-700 font-bold py-2">{props.price}</h4>
                </div>
                <div className="">
                    <p className="inline text-wrap text-[17.6px] text-black font-[500]">{description}</p>
                    <span onClick={readMoreHandler} className="cursor-pointer text-xl text-slate-700 font-[500] ">
                        {readMore?`  show less`: `  read more`}
                    </span>
                </div>
            </div>
            <button onClick={()=>props.removeTour(props.id)} className="btn">
                Not Interested
            </button>
        </div>
    )
};

export default Card;