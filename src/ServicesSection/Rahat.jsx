import { useLoaderData } from "react-router-dom";
import RahatCard from "./RahatCard";


const Rahat = () => {
    const data = useLoaderData ()
    
    return (
        <div className="gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {
                data.map(rahat=> <RahatCard key={rahat.id} rahat={rahat}></RahatCard>)
            }
            
        </div>
    );
};

export default Rahat;