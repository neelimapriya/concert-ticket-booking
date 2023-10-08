import { RiAdvertisementFill } from "react-icons/ri";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import {
  AiOutlineMail,
  AiOutlineWifi,
  AiOutlineClockCircle,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="text-gray-100 mb-24 mt-10  max-w-xl mx-auto">
      <h1 className="text-5xl my-10">About Us</h1>
      <h2 className="text-3xl underline font-semibold">Categories</h2>
      <p className="flex text-xl gap-3 ">
        <RiAdvertisementFill className="text-3xl"></RiAdvertisementFill>{" "}
        Advertising agency
      </p>
      <h2 className="mt-7 underline text-3xl font-semibold ">Contact info</h2>
      <div className="mt-3 gap-3 flex ">
        <BsFillHouseDoorFill className="text-3xl"></BsFillHouseDoorFill>
        <div>
          <h2 className="text-2xl ">Gulshan 02, Dhaka, Bangladesh, 1212</h2>
          <p className="text-start">Address</p>
        </div>
      </div>
      <div className="mt-3 gap-3 flex ">
        <MdCall className="text-3xl"></MdCall>
        <div>
          <h2 className="text-2xl ">01937-117013</h2>
          <p className="text-start">Mobile</p>
        </div>
      </div>
      <div className="mt-3 gap-3 flex ">
        <AiOutlineMail className="text-3xl"></AiOutlineMail>
        <div>
          <h2 className="text-2xl ">info@starbox.com.bd</h2>
          <p className="text-start">Email</p>
        </div>
      </div>

      <h2 className=" mt-7 text-3xl font-semibold underline">Basic info</h2>
      <div className="mt-2 gap-3 flex ">
        <AiOutlineWifi className="text-3xl"></AiOutlineWifi>

        <h2 className="text-2xl ">Offers free Wi-Fi</h2>
      </div>
      <div className="mt-2 gap-3 flex ">
        <AiOutlineClockCircle className="text-3xl"></AiOutlineClockCircle>

        <h2 className="text-2xl ">Open now </h2>
      </div>
    </div>
  );
};

export default About;
