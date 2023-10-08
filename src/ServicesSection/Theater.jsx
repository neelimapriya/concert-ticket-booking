import { useLoaderData } from "react-router-dom";
import TheaterCard from "./TheaterCard";


const Theater = () => {
    const data = useLoaderData()
    return (
        <div className="gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {
                data.map(theater=> <TheaterCard key={theater.id} theater={theater}></TheaterCard>)
            }
            
        </div>
    );
};

export default Theater;