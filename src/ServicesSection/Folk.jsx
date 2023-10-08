
import { useLoaderData } from 'react-router-dom';
import FolkCard from './FolkCard';

const Folk = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {
                data.map(folk=> <FolkCard key={folk.id} folk={folk}></FolkCard>)
            }
            
        </div>
    );
};

export default Folk;