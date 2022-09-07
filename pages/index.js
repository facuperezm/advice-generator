import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import dividermobile from "../public/pattern-divider-mobile.svg";
import dividerdesktop from "../public/pattern-divider-desktop.svg";
import dice from "../public/icon-dice.svg";
import favicon from "../public/favicon.ico";

const home = () => {
  const [Advice, setAdvice] = useState([
    {
      id: 10,
      advice: "life",
    },
  ]);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip);
    setAdvice(data.slip);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="text-manrope bg-darkgrayb flex flex-col max-w-md mx-3 rounded-md p-3 justify-center items-center text-center">
      <Head>
        <link rel="shortchut icon" href="../public/favicon.ico" />
        <title>Advice Generator</title>
      </Head>
      <div className=" w-auto p-3 drop-shadow-xl">
        <h4 className="font-semibold tracking-[0.2rem] my-3 text-neongr text-xs">
          ADVICE #{Advice.id}
        </h4>
        <p className="font-manrope  text-lightcy my-4 font-bold text-xl">
          “{Advice.advice}”
        </p>
        <Image src={dividerdesktop} />
        <button
          className=" drop-shadow-md rounded-full bg-neongr p-4 pb-2 translate-y-11 -my-5 hover:shadow-[0px_0px_20px_neongr] hover:shadow-neongr "
          onClick={fetchAdvice}
        >
          <Image className="pb-0" src={dice} />
        </button>
      </div>
    </div>
  );
  S;
};

export default home;
