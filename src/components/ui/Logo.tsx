import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="header-logo-link">
      <Image
        src="/images/logo.png"
        alt="REEBAU"
        width={90}
        height={90}
        priority
      />
    </Link>
  );
};

export default Logo;
