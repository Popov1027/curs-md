import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import currency from './currency.json';
import ButtonCurrency from './ButtonCurrency';
// @ts-ignore
import Arrow from '../../assets/img/arrow.svg';
// @ts-ignore
import AngleDown from '../../assets/img/angle-down.svg';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const ButtonBar = () => {
  const currencyList = currency.slice(0, 6);
  return (
    <Menu as="div" className="relative flex w-full align-middle pt-[0.5em]">
      {currencyList.map((valuta, index) => {
        return <ButtonCurrency key={index} name={valuta.name} description={valuta.description} />;
      })}
      <Menu.Button className="border-[1px] border-solid border-[#979797] py-[4px] w-[15%] hover:bg-[#e0e0e0] ml-[-1px]">
        <img className="h-[16px] w-[10px] m-[1px]" src={AngleDown} alt="Select currency" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute w-full px-[12px] py-[6px] text-sm border-[1px] border-solid border-[#cccccc] z-10 mt-[30px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <label htmlFor="input-group-search" className="sr-only">
            Search
          </label>
          <div className="relative px-[4px] py-[3px] m-0">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                src={Arrow}
                alt="Copy to clipboard"
              />
            </div>
            <input
              type="text"
              id="input-group-search"
              className="m-[1px] py-[4px] pr-[20px] pl-[5px] w-full h-auto border-1 border-solid border-[#aaa] text-[1em] leading-normal"
            />
          </div>
          <ul
            className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton">
            {currency.map((valuta, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <li>
                      <div
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}>
                        {valuta.name} - {valuta.description}
                      </div>
                    </li>
                  )}
                </Menu.Item>
              );
            })}
          </ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ButtonBar;
