import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
  <Hero />
  <Footer />
    </div>
  )

};