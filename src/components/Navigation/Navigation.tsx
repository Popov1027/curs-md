import React, { useState } from 'react';
// @ts-ignore
import Home from '../../assets/img/home.svg';
// @ts-ignore
import logoCurs from '../../assets/img/logo.png';
// @ts-ignore
import HomeMenu from '../../assets/img/logo-inv.png';
import styled from 'styled-components';

const ContainerLogo = styled.div`
  margin: 40px 80px 20px;
  height: 35px;
  width: 190px;
  @media (max-width: 767px) {
    margin: 0;
    padding: 1px 10px;
  }
`;
const NavHeader = styled.nav`
  @media (max-width: 767px) {
    margin-top: -35px;
  }
`;
const ContainerMenu = styled.div`
  @media (max-width: 767px) {
  }
`;
const HomeWhite = styled.div`
  color: white;
  background: rgba(155, 155, 155, 0.2);
  @media (max-width: 767px) {
    margin-right: auto;
    margin-top: 110px;
    margin-left: 2px;
  }
`;
const ImgLogoCurs = styled.img`
  @media (max-width: 767px) {
    display: none;
  }
`;
const ImgSvgHome = styled.img`
  @media (max-width: 767px) {
    display: none;
  }
`;
const ImgLogoHomeMenu = styled.img`
  @media (max-width: 767px) {
    margin-top: 2px;
  }
`;
const DivHome = styled.div`
  display: flex;
  color: #cacaca;
  background: rgba(155, 155, 155, 0.2);
`;
const SpanShadow = styled.span`
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);
`;
const DivImgAndButton = styled.div`
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
const BurgerMenuContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
  }
`;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ContainerMenu>
      <ContainerLogo>
        <BurgerMenuContainer>
          <div className="logo">
            <ImgLogoCurs src={logoCurs} alt="Curs.md" className="curs-md" />
          </div>
        </BurgerMenuContainer>
      </ContainerLogo>
      <NavHeader className="bg-[#3c4059]">
        <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start ">
              <HomeWhite className="flex flex-shrink-0 items-center">
                <ImgSvgHome src={Home} alt="Home" className="h-7 w-auto cursor-pointer" />
              </HomeWhite>
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                    Rates Evolution
                  </span>
                  <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                    Convertor
                  </span>
                  <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                    Exchange rates
                  </span>
                  <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                    Banks
                  </span>
                  <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                    Exchange offices
                  </span>
                  <span className="text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">
                    Currencies
                  </span>
                </div>
              </div>
            </div>
            <DivImgAndButton className="md:hidden">
              <ImgLogoHomeMenu src={HomeMenu} alt="Home" className="mb-2.5 h-6" />
              <button
                type="button"
                className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
                onClick={toggleMenu}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
              </button>
            </DivImgAndButton>
          </div>
        </div>
        {isMenuOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 md:hidden">
            <DivHome>
              <img src={Home} alt="Home" className="h-5 mt-1.5 ml-px w-auto cursor-pointer" />
              <SpanShadow className="block px-3 py-2 text-sm font-medium cursor-pointer">
                Exchange rates
              </SpanShadow>
            </DivHome>
            <span className="text-white block px-3 py-2 text-sm font-medium cursor-pointer">
              Rates Evolution
            </span>
            <span className="text-white block px-3 py-2 text-sm font-medium cursor-pointer">
              Convertor
            </span>
            <span className="text-white block px-3 py-2 text-sm font-medium cursor-pointer">
              Exchange rates
            </span>
            <span className="text-white block px-3 py-2 text-sm font-medium cursor-pointer">
              Banks
            </span>
            <span className="text-white block px-3 py-2 text-sm font-medium cursor-pointer">
              Exchange offices
            </span>
            <span className="text-white block px-3 py-2 text-base font-medium cursor-pointer">
              Currencies
            </span>
          </div>
        )}
      </NavHeader>
    </ContainerMenu>
  );
};

export default Navbar;
