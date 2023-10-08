import { useLoaderData } from "react-router-dom";
import FilmCard from "./FilmCard";

const Films = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="gap-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
            {
                data.map(film=> <FilmCard key={film.id} film={film}></FilmCard>)
            }
            
        </div>
    );
};

export default Films;