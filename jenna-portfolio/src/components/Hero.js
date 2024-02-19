import Image from "next/image";
import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <div className="relative flex flex-row items-center overflow-hidden">
      {/* Text Container */}

      <div className="w-full md:w-1/2 text-center md:text-center lg:p-20 z-10 relative">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Animal Lover.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image Container */}
      <div className="hidden lg:block absolute inset-0 ">
        <div className="w-full h-full ">
          <Image
            src={"/img/hero-image.jpg"}
            alt="hero-image"
            layout="fill"
            objectFit="cover"
            className="shadow"
          />
          {/* <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
