import React from 'react';
// @ts-ignore
import Point from '../../assets/img/point2.png';

const Goodsell = () => {
  return (
    <div className="col-span-4 pt-[1em] mx-[-15px]">
      <div className="w-full float-left relative px-[15px] min-h-[1px]">
        <div className="border-[1px] border-solid border-[transparent] mb-[20px] rounded shadow-sm">
          <div className="p-0 font-medium text-sm border-[1px] border-solid border-[transparent]">
            Cel mai avantajos poți vinde 100,00 EUR către:
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end p-[8px] text-[11px] font-normal text-[#9b9b9b]">
              Primesti
            </div>
            <div className="">
              <div className="flex justify-between  p-[8px] leading-5 border-t-[1px] border-t-[#8D8D8D] border-dotted border-l-0 border-b-0 border-r-0">
                <div>
                  <a
                    className="text-[#f2a200] no-underline font-medium hover:text-[#23527c] hover:underline"
                    data-offices="maib"
                    data-offer="cumpărare cu 19,46 MDL/EUR">
                    maib
                  </a>
                  <img
                    className="relative text-[#9b9b9b] t-[1px] w-[14px] h-[14px]"
                    src={Point}
                    alt="Copy to clipboard"
                  />
                </div>
                <div>
                  <span className="font-medium" title=" ">
                    1.945,94 MDL
                  </span>
                </div>
              </div>
              <div className="flex justify-between  p-[8px] leading-5 border-t-[1px] border-t-[#8D8D8D] border-dotted border-l-0 border-b-0 border-r-0">
                <div>
                  <a
                    className="text-[#f2a200] no-underline font-medium hover:text-[#23527c] hover:underline"
                    data-offices="micb"
                    data-offer="cumpărare cu 19,47 MDL/EUR">
                    Moldindconbank
                  </a>
                  <img
                    className="relative text-[#9b9b9b] t-[1px] w-[14px] h-[14px]"
                    src={Point}
                    alt="Copy to clipboard"
                  />
                </div>
                <div>
                  <span className="font-medium" title="+1,00 MDL">
                    1.946,94 MDL
                  </span>
                </div>
              </div>
              <div className="flex justify-between  p-[8px] leading-5 border-t-[1px] border-t-[#8D8D8D] border-dotted border-l-0 border-b-0 border-r-0">
                <div>
                  <a
                    className="text-[#f2a200] no-underline font-medium hover:text-[#23527c] hover:underline"
                    data-offices="energbank"
                    data-offer="cumpărare cu 19,49 MDL/EUR">
                    Energbank
                  </a>
                  <img
                    className="relative text-[#9b9b9b] t-[1px] w-[14px] h-[14px]"
                    src={Point}
                    alt="Copy to clipboard"
                  />
                </div>
                <div>
                  <span className="font-medium" title="+3,00 MDL">
                    1.948,95 MDL
                  </span>
                </div>
              </div>
              <div className="text-center text-sm	px-[15px] py-[10px] border-t-[1px] border-t-[#8D8D8D] border-dotted border-l-0 border-b-0 border-r-0">
                <a
                  role="button"
                  className="border-[1px] border-solid border-[#979797] bg-[#f5f5f5] px-[8px] py-[6px] text-[#4a4a4a] hover:bg-[#e0e0e0] no-underline"
                  href="/">
                  vezi lista completă
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goodsell;
