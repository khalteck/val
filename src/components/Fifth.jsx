import { getTimeOfDay } from "../utils/getTimeOfDay";

const Fifth = ({ setPage }) => {
  return (
    <div
      className="w-full h-[100dvh] bg-black text-white  relative"
      style={{
        backgroundImage: `url('/images/fifth.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/70 absolute top-0 left-0 px-5 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-bold text-center">Cringeeeee but...</h1>

        <p className="text-[1rem] text-center md:w-[400px]">
          Mirabel, you are a nice, smart, hardworking woman.. and I'm taking a
          moment to express my profound gratitude for you. Thank you for being
          the one who understands me (like 60% tho), laughs with me, and
          supports me through thick and thin (sometimes hmm). You are a good
          person and <br /> I'll forever cherish every moment we share.
        </p>

        <button
          onClick={() => setPage("sixth")}
          className="px-5 py-2 bg-white text-black mt-5 rounded-full"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Fifth;
