import dynamic from "next/dynamic";
const Home = dynamic(() => import("./components/Main"), { ssr: false });

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
