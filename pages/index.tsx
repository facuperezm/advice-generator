import Image from "next/image";
import dividerdesktop from "../public/pattern-divider-desktop.svg";
import dice from "../public/icon-dice.svg";
import { GetServerSideProps } from 'next'
import { useState, useEffect } from "react";
import axios from 'axios';

interface Advice {
  id: number;
  advice: string;
}

interface ApiResponse {
  slip: Advice;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get<ApiResponse>("https://api.adviceslip.com/advice");
    return {
      props: {
        advices: res.data.slip,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        advices: null,
      },
    };
  }
};

const Home = ({ advices }) => {
  const [newAdvice, setNewAdvice] = useState<Advice>(advices);

  useEffect(() => {
    if (newAdvice === advices) {
      setNewAdvice(advices);
    }
  }, [advices, newAdvice]);

  const handleFetch = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setNewAdvice(data.slip);
  }

  return (
    <main className="bg-darkb flex flex-col items-center justify-center min-h-screen py-2">
    <div className="font-sans bg-darkgrayb flex flex-col max-w-md mx-3 rounded-md p-3 justify-center items-center text-center">
      <div className="w-auto p-3 drop-shadow-xl">
        <h4 className="font-semibold tracking-[0.2rem] my-3 text-neongr text-xs">
          ADVICE #{newAdvice.id}
        </h4>
        <p className="text-lightcy my-4 font-bold text-xl" id="advice-text">“{newAdvice.advice}”</p>
        <Image src={dividerdesktop} alt="divider" width={400} height={100} />
        <button className="drop-shadow-md rounded-full bg-neongr p-4 pb-2 translate-y-11 -my-5 hover:shadow-[0px_0px_20px_neongr] hover:shadow-neongr" onClick={handleFetch} id="advice-button">
          <Image
            className="pb-2"
            src={dice}
            alt="dice image"
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  </main>
  );
};

export default Home;