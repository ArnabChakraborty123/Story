import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex">
      <ul className="menu-bar flex">
         <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-4">
          <Link href="/about/appology">Apology page</Link>
        </li>
        <li>
          <Link href="/about/thanku">Thanku page</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
