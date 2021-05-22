export default function Person({ ghUsername, name, randomQuote }) {
  return (
    <a href={`https://github.com/${ghUsername}`} target="_blank">
    <div className="shadow-md border border-gray-100 hover:shadow-2xl transition transition-delay-15 ease-in-out p-6 space-y-3 rounded-xl">
      <div>
          <img
            src={`https://avatars.githubusercontent.com/${ghUsername}`}
            alt={`${name}'s profile picture`}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <p>{name}</p>
          <p>{randomQuote}</p>
      </div>
    </div>
    </a>
  );
}


