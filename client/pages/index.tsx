import type { NextPage } from 'next';
import Link from 'next/link';
import Note from './note';

const Home: NextPage = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/note">Note</Link>
      </li>
    </ul>
  );
};

export default Home;
