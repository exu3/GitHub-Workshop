import { useEffect, useState } from "react";
import Meta from "../components/head";
import Person from "../components/Person";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [thepeople, setThePeople] = useState([]);
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setThePeople(data);
      });
  }, []);

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <Meta />
      <Nav />
      <main className="m-8 md:mx-24 h-full">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div>
            <h1 className="font-bold text-5xl py-8">
              Intro to Git & GitHub
            </h1>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
            {thepeople.map((person, i) => {
              return (
                <Person
                  key={i}
                  name={person.name}
                  ghUsername={person.githubUser}
                  randomQuote={person.quote}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
