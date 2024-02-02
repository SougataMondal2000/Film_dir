import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

/* eslint-disable react/prop-types */
const ShowDetails = ({
  image,
  title,
  description,
  genres,
  showDetailUrl,
  language,
  rating,
  status,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt=""
            className="h-fit w-full rounded object-cover  lg:w-1/2"
            src={image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <div className="flex gap-2 shadow-3xl">
              {" "}
              {genres.map((i) => (
                <p
                  key={i.genre}
                  className="text-sm text-gray-800 font-semibold "
                >
                  {i}
                </p>
              ))}
            </div>
            <h1 className="my-4 text-3xl font-semibold text-black">{title}</h1>
            <div className="mb-2 flex gap-2 shadow-3xl text-black font-semibold">
              <span className="text-gray-800">Language:</span>
              {language}
            </div>
            <div className="mb-2 flex gap-2 shadow-3xl text-black font-semibold">
              <span className="text-gray-800">Rating:</span>
              {rating}
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="mt-4 flex gap-2 shadow-3xl text-black font-semibold">
              <span className="text-gray-800">Status:</span>
              {status}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Link
                to={showDetailUrl}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Official Site
              </Link>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showModal === true && (
          <Modal
            close={() => setShowModal(false)}
            title={title}
            imageSrc={image}
          />
        )}
      </div>
    </section>
  );
};

export default ShowDetails;
