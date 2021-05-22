export default function Person({ ghUsername, name, randomQuote }) {
  return (
    <a href={`https://github.com/${ghUsername}`} target="_blank">
      <div className="shadow-md border border-gray-100 hover:shadow-2xl transition transition-delay-15 ease-in-out p-6 space-y-3 rounded-xl h-full">
        <div>
          <img
            src={`https://avatars.githubusercontent.com/${ghUsername}`}
            alt={`${name}'s profile picture`}
            className="w-32 h-32 rounded-full mx-auto border-4 border-pink"
          />
          <h3 className="text-2xl text-center font-semibold leading-loose">
            {name}
          </h3>
          <p className="font-light italic text-center">"{randomQuote}"</p>
        </div>
      </div>
    </a>
  );
}
