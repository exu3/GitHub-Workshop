const fs = require("fs");
const path = require("path");

interface ThePeople {
  name: string;
  githubUser: string;
  quote: string;
}

export default async (req, res) => {
  let data: ThePeople[] = [];

  const files = fs.readdirSync(
    path.join(__dirname, "..", "..", "..", "..", "..", "people")
  );

  files.forEach((file) => {
    const content = fs.readFileSync(
      path.join(__dirname, "..", "..", "..", "..", "..", "people", file),
      "utf8"
    );

    data.push(JSON.parse(content));
  });

  try {
    data = data.sort(() => Math.random() - 0.5);
  } catch (err) {}
  res.status(200).json(data);
};
