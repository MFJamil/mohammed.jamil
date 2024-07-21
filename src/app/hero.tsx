"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2" shown="moveUpfadeIn">
        <div className="row-start-2 lg:row-auto">
          <Typography
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my <br /> Development Portofolio!
          </Typography>
          <Typography
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I&apos;m Mohammed Jamil, a passionate developer based in Germany. Here,
            you&apos;ll get a glimpse of my journey in the world of 
            development, where creativity meets functionality.
          </Typography>
          <div className="grid">
            <Typography
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button 
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={720}
          height={960}
          alt="team work"
          src="/image/MJ_1.jpg"
          className="w-full rounded-xl object-cover"
          style={{opacity: 0.4}}
           
          
        />
      </div>
    </header>
  );
}


export default Hero;
