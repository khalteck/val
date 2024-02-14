import { getTimeOfDay } from "../utils/getTimeOfDay";

const Second = ({ setPage }) => {
  return (
    <div
      className="w-full h-[100dvh] px-5 bg-red-500 text-white flex flex-col justify-center items-center relative"
      style={{
        backgroundImage: `url('/images/second.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-[2rem] font-bold text-center">Happy Valentines!</h1>

      <p className="text-[1rem] text-center mt-5">
        I wrote you an epistle..
        <br /> Answer the secret question to read it
      </p>

      <button
        onClick={() => setPage("third")}
        className="px-5 py-2 bg-white text-black mt-5 rounded-full"
      >
        Answer Question
      </button>
    </div>
  );
};

export default Second;
