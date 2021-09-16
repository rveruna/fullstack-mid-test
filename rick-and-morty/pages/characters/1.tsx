import { NextPage } from 'next';
import Router from 'next/router';
import {
  CardText,
  CardTitle,
  CharacterCard,
  CharacterImage,
  CharacterLink,
  CharacterWrapper,
} from './index.styled';

const CharacterPage: NextPage = () => {
  return (
    <>
      <CharacterWrapper>
        <CharacterLink onClick={() => Router.back()}>
          &#60; Back to character listing
        </CharacterLink>
        <CharacterCard>
          <div>
            <CharacterImage src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' />
          </div>
          <CardText>
            <CardTitle>Rick Sanchez</CardTitle>
            <div>Status: Alive</div>
            <div>Origin: Earth (C-137)</div>
          </CardText>
        </CharacterCard>
      </CharacterWrapper>
      <div>Location Details</div>
    </>
  );
};

export default CharacterPage;
