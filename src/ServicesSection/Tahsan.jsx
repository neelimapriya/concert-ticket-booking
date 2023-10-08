import { useLoaderData } from "react-router-dom";
import TahsanCard from "./TahsanCard";


const Tahsan = () => {
    const data = useLoaderData()
    return (
        <div className="gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {
                data.map(tahsan=> <TahsanCard key={tahsan.id} tahsan={tahsan}></TahsanCard>)
            }
            
        </div>
    );
};

export default Tahsan;