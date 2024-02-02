import Form from "./Form";

/* eslint-disable react/prop-types */
const Modal = ({ close, title, imageSrc }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-gradient-to-b from-[#FA7268] to-[#B0235F] p-4  relative transform translate-y-0 opacity-100 rounded-lg shadow-lg px-6 py-8 bg-white w-full max-w-md">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={close}
            type="button"
            className="inline-flex items-center justify-center p-2 text-black rounded-lg hover:bg-red-200 focus:outline-none"
          >
            <span className="text-base mr-2">Close</span>
            <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10l-4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6 ">
          <div className="">
            <Form />
          </div>

          <div className="lg:col-span-1">
            <img
              src={imageSrc}
              alt={title}
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
