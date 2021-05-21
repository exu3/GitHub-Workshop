import Meta from "../components/head";
import Person from "../components/Person";

export default function Home() {
  return (
    <div>
      <Meta />
      <main className="m-8 md:mx-24">
        <h1 className="font-sofia font-bold text-5xl leading-loose">
          Virtual CodeDay: Intro to GitHub
        </h1>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <Person
              name="Naaaaame0"
              ghUsername="eilla1"
              randomQuote="hihihihih"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
