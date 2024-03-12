import Card from "./Card";
export default function Tour({Tours,removeTour}){
    return (
        <div className="overflow-hidden">
            <div className="w-[300px] mx-auto border-dashed border-[3px] border-black px-[15px] py-[7px] flex justify-center items-center">
                <h2 className="font-sans font-bold text-xl tracking-[1px] capitalize text-black select-none">Tour plan with Me</h2>
            </div>
            <div className="flex flex-wrap py-[10px] ">
                <div className="w-[1100px] mx-auto my-0 flex flex-wrap justify-center items-center pt-[50px] gap-[25px]" id="tour-box">
                    {
                        Tours.map(tours=>{
                        return <Card id={tours.id} name={tours.name} image={tours.image} info={tours.info} price={tours.price} removeTour={removeTour}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
};

// export default Tour;