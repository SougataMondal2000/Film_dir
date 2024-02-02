/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ image, title, showDetailUrl, description, genres }) => {
  return (
    <div className="">
      <div className="relative h-[280px] w-[210px]">
        <img src={image} alt="" className="z-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <div className="flex gap-2 shadow-3xl">
            {" "}
            {genres.map((i) => (
              <p key={i.genre} className="text-sm text-red-600 font-semibold ">
                {i}
              </p>
            ))}
          </div>

          <p className="mt-2 text-sm text-gray-300">{description}...</p>
          <Link
            to={showDetailUrl}
            className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
