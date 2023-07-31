import React from 'react';
// @ts-ignore
import Clippy from '../../assets/img/clippy.svg';
import ButtonBar from './ButtonBar';

const InputRight = () => {
  return (
    <div className="col-span-4 pt-[1em] lg:mx-[-15px] md:mx-0">
      <div className="w-full float-left relative px-[15px] min-h-[1px]">
        <span className="text-[11px] pb-[0.2em] inline-block">Curs BNM în data de</span>
        <div
          className="relative text-[11px] pb-[0.2em] inline-block w-[10em] border-separate color-[#666666]"
          data-input="#SuggestCotDate">
          <input
            type="date"
            className="w-auto font-semibold  border-none p-0 text-[11px] underline decoration-red-50 decoration-dashed cursor-pointer mr-[5px] inline-flex"
          />
          <span className="relative pb-[1px] w-[1%] hidden">
            <button
              type="button"
              className="relative p-0 text-[11px] font-semibold ml-[-1px]"
              aria-label="Calendar">
              <img
                className="h-[14px]"
                src="https://www.curs.md/images/icon/angle-down.svg"
                alt="Alege data"
              />
            </button>
          </span>
        </div>
        <div className="relative flex border-separate mx-auto">
          <input
            className="bg-white align-middle rounded-none relative w-full mb-0 float-left z-[2] border-[1px] border-solid border-r-0 border-[#979797] font-normal h-[34px] px-[12px] py-[6px] text-right"
            type="text"
            inputMode="numeric"
            min="0.0"
            step="1"
            placeholder="Introdu suma"
            autoComplete="transaction-amount"
          />
          <span className="relative whitespace-nowrap rounded-none table-cell align-middle">
            <button
              type="button"
              className="relative bg-white rounded-none py-[6px] px-[10px] border-[1px] border-solid border-[#979797] mb-0 align-middle hover:bg-[#e0e0e0] text-sm"
              aria-label="Copy to clipboard"
              data-clipboard-target=".tgt-sum"
              title="Copiază în clipboard">
              <img
                className="h-[14px] w-[14px] align-middle"
                src={Clippy}
                alt="Copy to clipboard"
              />
            </button>
          </span>
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

export default InputRight;
