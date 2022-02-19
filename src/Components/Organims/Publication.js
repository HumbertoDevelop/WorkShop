import React from "react";

const Publication = ({ title, author, fecha, content, fechaM }) => {
  return (
    <div className="h-full flex items-start mt-2">
      <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
        <span className="text-cyan-500 pb-2 mb-2 border-b-2 border-gray-200">
          {fechaM}
        </span>
        <span className="font-medium text-lg text-gray-400 title-font leading-none">
          {fecha}
        </span>
      </div>
      <div className="flex-grow pl-6">
          <span className="flex-grow flex flex-col ">
            <span className="title-font font-medium text-gray-100">
              {author}
            </span>
          </span>
        <h1 className="title-font text-xl font-medium text-cyan-600 mb-3">
          {title}
        </h1>
        <p className="leading-relaxed mb-5">{content}</p>
      </div>
    </div>
  );
};

export default Publication;
