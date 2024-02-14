import { getTimeOfDay } from "../utils/getTimeOfDay";
import Confetti from "react-confetti";

const Sixth = ({ setPage }) => {
  return (
    <div
      className="w-full h-[100dvh] bg-black text-white  relative"
      style={{
        backgroundImage: `url('/images/sixth.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Confetti numberOfPieces={400} />

      <div className="w-full h-full bg-black/80 absolute top-0 left-0 px-5 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-bold text-center">Enjoyyy</h1>

        <p className="text-[1rem] text-center mt-10">
          Enough corniness for today 😖{" "}
        </p>
      </div>
    </div>
  );
};

export default Sixth;
