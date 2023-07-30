import React from 'react';

const ButtonCurrency = (props: { name: string; description: string }) => {
  return (
    <button
      type="button"
      rel={props.name}
      className="border-[1px] border-solid border-[#979797] py-[4px] w-[15%] ml-0 hover:bg-[#e0e0e0] active:bg-[#F6AA2D] active:text-[#FFFFFF] active:font-medium]"
      title={props.description}>
      {props.name}
    </button>
  );
};

export default ButtonCurrency;
