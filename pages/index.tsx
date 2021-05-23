import { useEffect, useState } from "react";
import Meta from "../components/head";
import Person from "../components/Person";
import { FaGithub } from "react-icons/fa";


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
    <div>
      <Meta />
      <nav className="border-b p-3 flex">
      
          <img className="justify-left" src="/codeday-text-color.svg" width="180px"/>
          <div className="justify-right">
                <a
                  href="https://github.com/eilla1/CodeDay-GitHubWorkshop"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-500"
                >
                  <FaGithub size={45} />
                </a>
              </div>
      
      </nav>
      <main className="m-8 md:mx-24">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div>
          
            <h1 className="font-bold text-5xl py-8">
              Virtual CodeDay: Intro to GitHub
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
    </div>
  );
}
