import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <main className="main w-[95%] m-auto h-[800px] mt-11">
      <div className="pt-[240px] pl-[80px] ">
        <div className="flex flex-col gap-4">
          <article>
            <p className="text-[25px]">Classic Exclusive</p>
            <h1 className="text-[40px] font-bold">Women's Collection</h1>
            <p className="text-[20px]">UPTO 40% OFF</p>
          </article>
          <button className="w-[120px] flex items-center gap-3 bg-black text-white h-[44px] rounded-lg justify-center">
            Shop now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
