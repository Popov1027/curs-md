import React from 'react';
import InputLeft from './InputLeft';
import InputRight from './InputRight';
import Statistics from './Statistics';
const Converter = () => {
  return (
    <div className="mt-[20px]">
      <div className="xl:w-[1170px] lg:w-[970px] md:w-[750px] md:px-0 mx-auto">
        <div className="grid lg:grid-cols-12 gap-1 relative px-[15px] mih-h-[1px] md:grip-cols-8">
          <div className="col-span-8">
            <div className="mb-[1em] border-solid border-[1px] border-[#d1d1d1]">
              <div className="grid lg:grid-cols-9 mx-auto px-[15px] md:grip-cols-8">
                <InputLeft />
                <div className="col-span-1 float-left h-[100px] w-[3%] mt-[20px] py-[20px] pr-[20px] justify-self-center font-bold text-5xl text-[#9B9B9B] lg:inline-block max-[1023px]:hidden">
                  =
                </div>
                <InputRight />
              </div>
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Converter;
