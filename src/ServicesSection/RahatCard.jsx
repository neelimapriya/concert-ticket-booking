import Swal from 'sweetalert2'

const RahatCard = ({rahat}) => {
    const { id, name, description, price, location, thumbnail, date } = rahat;

    const handleAddBook=()=>{
      const addedBooked =[];
  
      const bookedItem=JSON.parse(localStorage.getItem('booked'))
  
      if(!bookedItem){
        addedBooked.push(rahat)
        localStorage.setItem('booked', JSON.stringify(addedBooked))
        Swal.fire(
          'Thank You!',
          'For booked Ticket with STARBOX!',
          'success'
        )
      }else{
        const itemExist=bookedItem.find(rahat =>rahat.id == id)
  
        if(!itemExist){
          addedBooked.push(...bookedItem, rahat)
          localStorage.setItem('booked', JSON.stringify(addedBooked))
          
          Swal.fire(
            'Thank You!',
            'For booked Ticket with STARBOX!',
            'success'
          )
        }else{
          Swal.fire(
            'Sorry!',
            'You have already booked this!',
            'error'
          )
        }
  
      }
    }

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
          <button onClick={handleAddBook} className="btn w-full bg-red-700 text-white">Book Now</button>
        </div>
      </div>
    </div>
  )
};

export default RahatCard;