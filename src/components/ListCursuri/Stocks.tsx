import React from 'react';
import './Apps.css';
import data from './data.json';

export const Stocks = () => {
  return (
    <div className="w-[70%] h-[485px] border-2 border-solid border-silver mt-[80px] ml-[200px]">
      <div>
        <h1 className="pl-[40px] pr-[10px] font-bold">Cotatiile BNM</h1>
        <form action="post">
          <span className="pl-[10px] font-bold pr-[10px]">
            Cotatiile Bancii Nationale a Moldovei pe date:
          </span>
          <span className="input-group-date" data-input="#BanksCote">
            <input type="date" className="text-center border-[1px] border-solid border-black" />
            <span className="pl-[10px]">
              <button className="w-[70px] bg-orange-600 rounded-2xl"> Afiseaza </button>
            </span>
          </span>
        </form>
      </div>
      <br />
      <div>
        <div className="w-[100%]">
          {data.stockData.map((data, key) => {
            return (
              <div
                className="grid grid-cols-7 text-center p-[8px] gap-1 first:bg-[#f2f2f2]"
                key={key}>
                <div className="flex justify-center items-center">
                  <img className="mr-[5px]" src={data.flag} alt="" width="16px" height="11px" />
                  {data.simbol}
                </div>
                <div className="text-amber-600 :first-child:text-blue-600">{data.denumire}</div>
                <div>{data.cotatie}</div>
                <div>{data.variatie}</div>
                <div>{data.procente}</div>
                <div>{data.actual}</div>
                <div>{data.precedent}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
