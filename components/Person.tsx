export default function Person({ ghUsername, name, randomQuote }) {
  return (
    <div>
      <img
        src={`https://avatars.githubusercontent.com/${ghUsername}`}
        alt="Profile picture"
        className="rounded-full w-16 h-16"
      />
      <p>{name}</p>
      <p>{randomQuote}</p>
    </div>
  );
}
