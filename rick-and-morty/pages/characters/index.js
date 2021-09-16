import Link from 'next/link';
import allCharacters from '../../mockdata/allCharacters.json';
import { IntroImage } from './index.styled';

export default function Characters() {
  return allCharacters.data.map((character) => (
    <>
      <Link href={`/characters/${character.id}`}>
        <div>
          <IntroImage src={character.avatar} />
          <div>Name: {character.name}</div>
          <div>Gender: {character.gender}</div>
          <div>Species: {character.species}</div>
        </div>
      </Link>
    </>
  ));
}
