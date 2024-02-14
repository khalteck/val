import { getTimeOfDay } from "../utils/getTimeOfDay";

const Fourth = ({ setPage }) => {
  return (
    <div
      className="w-full h-[100dvh] bg-black text-white  relative"
      style={{
        backgroundImage: `url('/images/fourth.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/80 absolute top-0 left-0 px-5 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-bold text-center">
          You agreed lmaoo!!
        </h1>

        <p className="text-[1rem] text-center">Oya read uppppp</p>

        <button
          onClick={() => setPage("fifth")}
          className="px-5 py-2 bg-white text-black mt-5 rounded-full"
        >
          Read Epistle
        </button>
      </div>
    </div>
  );
};

export default Fourth;
