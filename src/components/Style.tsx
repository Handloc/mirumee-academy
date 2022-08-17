import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65.83vw;
  height: 521px;
  top: 96px;
  background: #e0e6ee;
  border-radius: 8px;
  margin-top: 96px;
`;

export const Logo = styled.img`
  display: block;
  margin-top: 32px;
  height: 64px;
`;

export const Episode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 60.83vw;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const ShowButton = styled.img`
  margin-right: 16px;
`;

export const Title = styled.p`
  font-family: Barlow;
  font-weight: 700;
  margin-left: 16px;
  color: #00687f;
`;
