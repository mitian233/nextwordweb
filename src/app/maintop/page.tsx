import Image from "next/image";
import MainTop from "./maintop";

export default function mainpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainTop></MainTop>
    </main>
  );
}
