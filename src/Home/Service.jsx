import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="text-4xl text-white font-semibold">Our Services</h2>
      <p className="mt-4 text-white mb-5">Book Your Ticket Before Sold Out.</p>
      <div className="grid space-x-5 space-y-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="card card-compact  bg-black shadow-2xl p-5 h-[550px]"
        >
          <figure>
            <img src={"https://i.ibb.co/0CB7Hj1/atif.png"} alt="atif" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-semibold">
              Atif Aslam Concerts
            </h2>
            <p>
              Atif Aslam is a Pakistani singer, songwriter, and actor who is
              renowned for his versatile voice and contribution to the music
              industry. He was born on March 12, 1983, in Wazirabad, Punjab,
              Pakistan. Atif Aslam gained widespread recognition for his soulful
              and melodious singing style.
            </p>
            <div className="card-actions justify-end ">
              <Link className="w-full" to="/atif">
                <button className="btn bg-red-800 w-full text-white">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="card card-compact  bg-black shadow-2xl p-5 h-[550px]"
        >
          <figure>
            <img
              src={"https://i.ibb.co/27g7f54/rahat-Fateh-Ali-Khan.png"}
              alt="rahat"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-semibold">
              Rahat Fateh Ali Khan Concerts
            </h2>
            <p>
              Rahat Fateh Ali Khan is a prominent Pakistani Qawwali and playback
              singer known for his powerful and soulful vocal performances. He
              was born on December 9, 1974, in Faisalabad, Pakistan. Rahat Fateh
              Ali Khan comes from a prestigious musical family, as he is the
              nephew of the legendary Qawwali singer Nusrat Fateh Ali Khan.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/rahat">
                <button className="btn bg-red-800 w-full text-white">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="card card-compact  bg-black shadow-2xl p-5 h-[550px]"
        >
          <figure>
            <img src={"https://i.ibb.co/cg7Lyz2/tahsan.png"} alt="atif" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-semibold">
              Tahsan Rahman Khan Concerts
            </h2>
            <p>
              Tahsan Rahman Khan, commonly known as Tahsan, is a well-known
              Bangladeshi singer, songwriter, actor, and model. He was born on
              October 18, 1979, in Dhaka, Bangladesh. Tahsan is one of the most
              popular and influential artists in the Bangladeshi entertainment
              industry.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/tahsan">
                <button className="btn bg-red-800 w-full text-white">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="card card-compact  bg-black shadow-2xl p-5  h-[550px]"
        >
          <figure>
            <img src={"https://i.ibb.co/cy2R2WS/folk-Festive.png"} alt="atif" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-semibold">
              Folk Festival
            </h2>
            <p>
              A folk festival is a cultural event that celebrates the
              traditional music, dance, art, crafts, and customs of a specific
              region, community, or culture. These festivals are often organized
              to preserve and showcase the cultural heritage and traditions of a
              particular group of people. Folk festivals can be found all around
              the world and vary greatly in terms of scale and focus.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/folk">
                <button className="btn bg-red-800 w-full text-white">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="card card-compact  bg-black shadow-2xl p-5  h-[550px]"
        >
          <figure>
            <img src={"https://i.ibb.co/txc4Dym/movie.png"} alt="atif" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-semibold">
              Movies
            </h2>
            <p>
              Our goal is to provide the most modern, comfortable, cinema
              viewing experience of Hollywood and quality Dhallywood releases
              for a locally adjusted price for our youth and family centered
              audiences in Dhaka . We aim to be the highest-value entertainment
              provider in Bangladesh with integrity & professionalism in every
              step.
            </p>
            <div className="card-actions justify-end">
              <Link className="w-full" to="/film">
                <button className="btn bg-red-800 w-full text-white">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="card card-compact  bg-black shadow-2xl p-5  h-[550px]"
        >
          <figure>
            <img src={"https://i.ibb.co/PgW6Xn6/theater.png"} alt="atif" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-white font-semibold">
              Theaters in Bangladesh Shilpakala Academy (BSA)
            </h2>
            <p>
              The Bangladesh Shilpakala Academy (BSA) is a prominent cultural
              institution in Bangladesh that promotes and supports various forms
              of art and culture, including theater. It provides a platform for
              artists and performers to showcase their talents and contribute to
              the countrys rich cultural heritage.
            </p>
            <div className="card-actions justify-end w-full">
              <Link className="w-full" to="/theater">
                <button className="btn bg-red-800 w-full text-white">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
