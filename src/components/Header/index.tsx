import Image from "next/image";
import Link from "next/link";

import logo from '../../../public/logo.png';

export function Header() {
  return (
    <Link href="/">
      <Image 
        src={logo} 
        alt="Explosion logo" 
        className="mx-auto md:max-w-96 max-w-60" 
        priority 
      />
    </Link>
  )
}