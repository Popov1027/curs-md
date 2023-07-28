
import styled from 'styled-components';

export const HeadMenuBar = styled.div`
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  height: 30px;
  padding: 5px 20px;
  background-color: #f0f0f0;
`;

export const HeadMenu = styled.div`
  display: flex;
  gap: 20px;
`;

export const MenuItem = styled.a`
  margin-right: 20px;
`;

export const AppContainer = styled.div`
  align-items: center;
  width: 100%;
  max-height: 100vh;
`;

export const Slogan = styled.div`
  font-size: 16px;
`;

export const AboutUs = styled.div`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const GetRates = styled.div`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Contacts = styled.div`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


export const LanguageSwitcherContainer = styled.div`
  font-size: 16px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
