import { useEffect, useState } from "react";
import Meta from "../components/head";
import Person from "../components/Person";
import ella from '../people/ella.json';



export default function Home() {
  const [thepeople, setThePeople] = useState([]);
  useEffect(()=>{
    fetch("/api/data").then((res)=>res.json())
    .then((data)=>{setThePeople(data)
    
    }

    )

  },[])
  
  return (
    <div>
      <Meta />
      <main className="m-8 md:mx-24">
        <h1 className="font-sofia font-bold text-5xl leading-loose">
          Virtual CodeDay: Intro to GitHub
        </h1>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
            
            {thepeople.map((person, i)=>{
                return <Person key={i} name={person.name} ghUsername={person.githubUser} randomQuote={person.quote}/>
                
            })}
            
            
            
            
          </div>
        </section>
      </main>
    </div>
  );
}
