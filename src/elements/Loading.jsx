import React from "react";

const Loading = () => {
  return (
    <>
      <div>
        <div className="bg-black relative flex items-center justify-center min-h-64 min-w-64 p-10 rounded-full border-t-4 border-b-4 border-r-4 border-l-4 border-red-500">
          <div class="rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 bg-white flex items-center justify-center">
            <div class="bg-black rounded-full w-8 h-8"></div>
          </div>
          <div className="rounded-full h-64 w-32 border-b-8 border-green-500 "></div>
          <div class="rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 bg-white flex items-center justify-center">
            <div class="bg-black rounded-full w-8 h-8"></div>
          </div>
          <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            ...
          </div>
        </div>
      </div>
      <br />
      <h3>Loading...</h3>
    </>
  );
};

export default Loading;
