import styled from 'styled-components';

export const IntroImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 50px;
  cursor: pointer;
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const CharacterLink = styled.a`
  font-size: 30px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 48%;
    width: 100%;
    display: block;
    background: #ebebeb;
  }
`;

export const CharacterWrapper = styled.div`
  padding: 60px;
`;

export const CharacterCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;

export const CardText = styled.div`
  padding-left: 50px;
`;

export const CardTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  margin: 0;
`;
