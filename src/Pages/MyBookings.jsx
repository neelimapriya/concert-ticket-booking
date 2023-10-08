import { useEffect } from "react";
import { useState } from "react";
import BookedCard from "./BookedCard";


const MyBookings = () => {

    const [booked, setBooked]=useState([])
    const [noData, setNoData]=useState(false)
    const [showAll, setShowAll]=useState(false)

    useEffect(()=>{
        const bookedItem =JSON.parse(localStorage.getItem('booked'))

        if(bookedItem){
            setBooked(bookedItem)
        }else{
            setNoData("You don't Booked yet.")
        }
    },[])

    return (
        <div className={noData ? "mb-28 md:mb-[430px]": "mb-10"}>
            {
                noData ? <p className="flex justify-center text-center items-center h-16 text-4xl text-red-500">{noData}</p>
                :
                <div className="gap-4 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        showAll ? booked.map(book=>(<BookedCard key={book.id} book={book}></BookedCard>))
                        :
                        booked.slice(0,4).map(book=> <BookedCard key={book.id} book={book}></BookedCard>)
                    }
                </div>
            }
            {
                            booked.length > 4 && <button onClick={()=>setShowAll(!showAll)} className="btn bg-red-600 text-white">{showAll ? "Show less":"Show all" }</button>
            }
        </div>
    );
};

export default MyBookings;