import { getTimeOfDay } from "../utils/getTimeOfDay";

const Home = ({ setPage }) => {
  const time = getTimeOfDay();

  return (
    <div
      className="w-full h-[100dvh] bg-black text-white flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url('/images/home.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[2rem] font-bold">Hello! 👋</h1>

      <p className="text-[1.5rem]">Good {time}, Mirabel</p>

      <button
        onClick={() => setPage("second")}
        className="px-5 py-2 bg-white text-black mt-5 rounded-full"
      >
        Continue
      </button>
    </div>
  );
};

export default Home;
