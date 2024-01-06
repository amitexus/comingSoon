import Image from "next/image";
import { Inter } from "next/font/google";
import ComingSoon from "@/assets/comingSoon.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`max-h-screen overflow-y-hidden flex  justify-center items-center  text-center ${inter.className}`}
    >
      <Image
        src={ComingSoon}
        height={"auto"}
        width={"auto"}
        alt="coming soon"
      />
    </main>
  );
}
