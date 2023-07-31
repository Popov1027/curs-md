import React from 'react';
import ButtonBar from './ButtonBar';

const InputLeft = () => {
  return (
    <div className="col-span-4 pt-[1em] lg:mx-[-15px] md:mx-0">
      <div className="w-full float-left relative px-[15px] min-h-[1px]">
        <span className="text-[11px] pb-[0.2em] inline-block">Introdu suma</span>
        <div className="relative flex border-separate mx-auto">
          <input
            className="bg-white align-middle rounded-none relative w-full mb-0 float-left z-[2] border-[1px] border-solid border-[#979797] font-normal h-[34px] px-[12px] py-[6px] text-right"
            type="text"
            inputMode="numeric"
            min="0.0"
            step="1"
            placeholder="Introdu suma"
            autoComplete="transaction-amount"
          />
          <span className="align-middle bg-[#eeeeee] px-[8px] py-[7px] font-medium border-[1px] border-solid border-l-0 border-[#979797] rounded-none text-[14px] leading-none text-center">
            EUR
          </span>
        </div>
        <div
          className="relative flex w-full align-middle pt-[0.5em]"
          role="group"
          aria-label="Source currency">
          <ButtonBar />
        </div>
      </div>
    </div>
  );
};

export default InputLeft;
