import React from 'react';
// @ts-ignore
import Goodsell from './Goodsell';
import Goodbuy from './Goodbuy';

const Statistics = () => {
  return (
    <div className="col-span-8">
      <div className="grid grid-cols-8 gap-12 mx-auto px-[15px]">
        <Goodbuy />
        <Goodsell />
      </div>
    </div>
  );
};

export default Statistics;
