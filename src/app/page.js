import Coins from "@/app/Sections/Coins";
import Header from "@/app/Sections/Header";
import Hero from "@/app/Sections/Hero";
import News from "@/app/Sections/News";

export default function Home() {

  return (
      <main>
          <Header/>
          <Hero/>
          <Coins/>
          <News/>
      </main>
  );
}
