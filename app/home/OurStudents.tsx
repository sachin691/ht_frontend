"use client";
import * as React from "react";

const studentsArray = [
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.36-AM.jpeg?fit=640%2C195&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.37-AM.jpeg?fit=640%2C177&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.39-AM.jpeg?fit=640%2C168&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Screenshot-2024-07-11-at-2.25.36-AM.png?fit=640%2C176&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.29-AM.jpeg?fit=640%2C191&ssl=1",
  "https://i0.wp.com/hindustanitongue.com/wp-content/uploads/2024/07/Image-11-07-24-at-2.31-AM.jpeg?fit=640%2C177&ssl=1",
];

const videosArray = [
  "https://hindustanitongue.com/54ba15c6-7b1b-41b1-afc7-907eba6cd922-mp4/#t=26",
  "https://www.youtube.com/embed/pNUnEVHW0oA",
  "https://www.youtube.com/embed/e3FkYMjXs1s",
  "https://www.youtube.com/embed/kGCZOk5Ut2o",
];

export function OurStudents() {
  return (
    <div className="max-w-6xl p-4 grid gap-4">
      {/* Row 1: Video on the left, two images on the right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-md shadow-md">
            <iframe
              src={videosArray[0]}
              title="Video 1"
              className="w-full h-full object-fit"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative h-24 sm:h-32 md:h-36 lg:h-40 overflow-hidden rounded-md shadow-md">
            <img
              src={studentsArray[0]}
              alt="Student 1"
              className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative h-24 sm:h-32 md:h-36 lg:h-40 overflow-hidden rounded-md shadow-md">
            <img
              src={studentsArray[1]}
              alt="Student 2"
              className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Image on the left, video on the right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-md shadow-md">
          <img
            src={studentsArray[2]}
            alt="Student 3"
            className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-md shadow-md">
          <iframe
            src={videosArray[1]}
            title="Video 2"
            className="w-full h-full object-fit"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>

      {/* Row 3: Video on the left, two images on the right */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-md shadow-md">
            <iframe
              src={videosArray[2]}
              title="Video 3"
              className="w-full h-full object-fit"
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative h-24 sm:h-32 md:h-36 lg:h-40 overflow-hidden rounded-md shadow-md">
            <img
              src={studentsArray[3]}
              alt="Student 4"
              className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="relative h-24 sm:h-32 md:h-36 lg:h-40 overflow-hidden rounded-md shadow-md">
            <img
              src={studentsArray[4]}
              alt="Student 5"
              className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Row 4: Image on the left, video on the right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-md shadow-md">
          <img
            src={studentsArray[5]}
            alt="Student 6"
            className="w-full h-full object-fit transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-md shadow-md">
          <iframe
            src={videosArray[3]}
            title="Video 4"
            className="w-full h-full object-fit"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
