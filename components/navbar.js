import Link from 'next/link';

function Navbar() {
  return (
    <nav className="grid w-full grid-cols-4">
     <div>
          <Link href="/">Home</Link>
          </div>
        <div>
          <Link href="/about">About</Link>
          </div>
          <div>
          <Link href="/about/appology">Apology </Link>
          </div>
          <div>
          <Link href="/about/thanku">Thank you</Link>
          </div>
    </nav>
  );
}

export default Navbar;
