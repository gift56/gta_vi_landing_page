import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/navbar";
import {
  Final,
  FirstVideo,
  Hero,
  Jason,
  Lucia,
  Outro,
  PostCard,
  SecondVideo,
} from "./components/sections";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main>
      <Navbar />
      <Hero />

      <FirstVideo />
      <Jason />

      <SecondVideo />
      <Lucia />

      <PostCard />
      <Final />
      <Outro />
    </main>
  );
};

export default App;
