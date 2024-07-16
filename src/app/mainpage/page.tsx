import Image from "next/image";
import MainPart from "./mainpart";

export default function mainpage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainPart></MainPart>
    </main>
  );
}
