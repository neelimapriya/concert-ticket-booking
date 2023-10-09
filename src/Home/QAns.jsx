// extra section

const QAns = () => {
  return (
    <div className="border border-red-600 max-w-3xl mx-auto mt-10  p-5 rounded-tl-3xl rounded-br-3xl">
      <h2 className="text-white text-3xl text-center font-semibold">Some Common Question Answer <br /> You May want to know.</h2>
      <div className="collapse collapse-arrow bg-gray-300 text-black mt-3">
        <input type="radio" name="my-accordion-2"  />
        <div className="collapse-title text-2xl font-medium">
        Can i booked ticket physically?
        </div>
        <div className="collapse-content">
          <p>Yes!</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-300 text-black mt-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Which seat is best in cinema?
        </div>
        <div className="collapse-content">
          <p>Experts recommend the seats farthest from the screen, specifically the second or third row from the back and in the middle, for the ultimate cinematic experience.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-300 text-black mt-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        What day are movie tickets cheapest?
        </div>
        <div className="collapse-content">
          <p>Just wait for a Tuesday night and spend those extra dollars you save on your ticket on popcorn and a drink.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-300 text-black mt-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Can we cancel movie tickets paid?
        </div>
        <div className="collapse-content">
          <p>No, Sorry.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-gray-300 text-black mt-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How long do concerts last?
        </div>
        <div className="collapse-content">
          <p>A Concert  of popular and light classical music played usually about 3 hours long.</p>
        </div>
      </div>
    </div>
  );
};

export default QAns;
