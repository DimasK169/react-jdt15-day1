import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col shadow min-h-[400px] rounded-xl outline-2 outline-emerald-400 ">
      <img
        src={imgSrc}
        alt={"hobbies ${title}"}
        className="h-72 rounded-t-xl object-cover outline-emerald-400"
      />
      <div className="py-3 px-6 space-y-2">
        <h1 className="font-semibold text-lg">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
