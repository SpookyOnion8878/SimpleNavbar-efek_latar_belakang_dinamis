import { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to My Next.js App</h1>
      </main>
    </div>
  );
};

export default Home;
