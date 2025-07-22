import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 50px;
  overflow: hidden;
  justify-self: center;
  align-self: center;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselImg = styled.div`
  width: 100%;
  transition: transform 0.5s ease-in-out;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  transition: filter 0.3s ease;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 12px;
  display: none;
  &:hover {
    display: flex;
  }
`;

export const Subtitles = styled.figcaption`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
font-size: 18px;
`;
