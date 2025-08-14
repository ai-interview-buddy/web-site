import Image from "next/image";

export default function Home() {
  return <Image className="dark:invert" src="/logo.png" alt="AI Interview Buddy Logo" width={180} height={38} priority />;
}
