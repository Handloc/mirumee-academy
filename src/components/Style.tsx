import styled from "styled-components";

export const Body = styled.div`
  font-family: Barlow;
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-left: calc(100vw - 100%);
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 65vw;
  max-width: 1000px;
  top: 96px;
  background: #e0e6ee;
  border-radius: 8px;
  margin-top: 96px;
  height: auto;
  padding-bottom: 42px;
`;

export const Logo = styled.img`
  display: block;
  margin-top: 32px;
  height: 64px;
`;

export const Episode = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 60vw;
  max-width: 940px;
  margin-top: 16px;
  background: #ffffff;
  border-radius: ${({ active }) => (active ? "4px 4px 0 0" : "4px")};
  box-shadow: ${({ active }) =>
    active
      ? "0px 4px 12px rgba(224, 230, 238, 0.5)"
      : "0px 2px 1px rgba(196, 196, 196, 0.2)"};
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-left: 16px;
  color: #00687f;
`;

export const Details = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 60vw;
  max-width: 940px;
  padding-top: 10px;

  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;

export const PlanetRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 58vw;
  max-width: 908px;
  margin-bottom: 34px;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    padding-top: 21px;

    &:nth-child(even) {
      background: rgba(229, 229, 229, 0.5);
      width: 60vw;
    }
  }
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 58vw;
  max-width: 908px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const Cell = styled.div`
  display: flex;
  justify-content: right;
  width: 8vw;
  max-width: 96px;
  margin-right: 18px;
  text-align: right;

  @media screen and (max-width: 1050px) {
    &::before {
      position: absolute;
      left: 0;
      display: flex;
      align-items: left;
      color: black;
    }
    &:nth-of-type(1):before {
      content: "Planet Name";
    }
    &:nth-of-type(2):before {
      content: "Rotation period";
    }
    &:nth-of-type(3):before {
      content: "Orbital period";
    }
    &:nth-of-type(4):before {
      content: "Diameter";
    }
    &:nth-of-type(5):before {
      content: "Climate";
    }
    &:nth-of-type(6):before {
      content: "Surface water";
    }
    &:nth-of-type(7):before {
      content: "Population";
    }
    margin-bottom: 23px;
    justify-content: left;
    text-align: left;
  }
`;

export const Line = styled.div`
  width: 58vw;
  max-width: 908px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  margin-top: 7px;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const Sorting = styled.img`
  margin-left: 8px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const Label = styled.div`
  text-align: right;
`;

export const Button = styled.img<{ active: boolean }>`
  margin-right: 16px;
  transition: transform 0.35s;
  transform: ${({ active }) => (active ? "rotate(-540deg)" : "rotate(0deg)")};
`;
