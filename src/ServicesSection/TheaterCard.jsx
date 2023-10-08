

const TheaterCard = ({theater}) => {
    const { id, name, description, price, location, thumbnail, date } = theater;
  return (
    <div className="card  bg-gray-300 text-black shadow-xl ">
       <figure className="p-5">
        <img className="w-full h-[400px]" src={thumbnail} alt="atif" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <p className="text-xl">{description}</p>
        <p className="text-2xl font-semibold">Location: {location}</p>
        <p className="text-xl">Date: {date}</p>
        <p className="text-2xl font-bold">Ticket Price: {price}$</p>
        <div className="card-actions justify-end">
          <button className="btn w-full bg-red-700 text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default TheaterCard;