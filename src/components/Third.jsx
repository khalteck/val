import { useState } from "react";
import { getTimeOfDay } from "../utils/getTimeOfDay";

const Third = ({ setPage }) => {
  const [answer, setAnswer] = useState("");
  const [error, seterror] = useState(false);

  return (
    <div
      className="w-full h-[100dvh] bg-black text-white  relative"
      style={{
        backgroundImage: `url('/images/third.gif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black/80 absolute top-0 left-0 px-5 flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-bold text-center">Secret Question</h1>

        <p className="text-[1rem] text-center">
          Only both of us know the answer correctly
        </p>

        <form className="mt-5 flex flex-col justify-center items-center w-full">
          <p className="mb-3 font-medium">
            Q. Who is the undisputed queen of Rap? 😝
          </p>
          <input
            type="text"
            className="w-full md:w-[400px] h-10 bg-transparent border-2 p-2 border-white rounded-md outline-none"
            onChange={(e) => {
              seterror(false);
              setAnswer(e?.target?.value);
            }}
          />
          {error && (
            <p className="text-red-500 mt-2 text-center">
              Wrong Answer! Hahaha
              <br /> No epistle for you!
            </p>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              answer?.toLowerCase()?.includes("nicki") ||
              answer?.toLowerCase()?.includes("minaj")
                ? setPage("fourth")
                : seterror(true);
            }}
            className="px-5 py-2 bg-white text-black mt-5 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Third;
