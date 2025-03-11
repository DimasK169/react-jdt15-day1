import React from "react";
import potrait from "../../assets/potrait.jpg";
import farming from "../../assets/farming.jpg";
import Card from "../../component/card/card";
import mobil from "../../assets/mobil.jpg";
import gitar from "../../assets/gitar.jpg"

const Home: React.FC = () => {
  return (
    <div className="lex flex-row w-full">
      <section className="flex flex-row justify-between m-12">
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold text-sm md:text-5xl uppercase text-center">
            Welcome to my portofolio
          </h1>
          <p className="text-sm md:text-base mt-2">
            Seekor kera, terkurung, terpenjara dalam gua Di gunung tinggi, sunyi
            tempat hukuman para dewa 
          </p>
        </div>
        <img
          src={potrait}
          alt="Potrait"
          className="w=[200px] h-[250px] md:w-[600px] md:h-[550px] object-cover rounded-tl-[20px] rounded-tr-[5px] rounded-bl-[150px] rounded-br-[10px] ml-2"
        />
      </section>

      <section className="flex flex-col">
        <h1 className="font-semibold text-4xl md:text-5xl text-center uppercase">
          My Hobbies
        </h1>
        <div className="flex flex-col md:flex-row gap-10 p-20">
          <div className="flex-1">
            <Card
              imgSrc={farming}
              title="Farming Gaming"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div className="flex-1">
            <Card
              imgSrc={mobil}
              title="Balapan Gaming"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
          <div className="flex-1">
            <Card
              imgSrc={gitar}
              title="Gitar Gaming"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
