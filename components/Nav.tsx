import { FaGithub } from "react-icons/fa";
export default function Nav() {
  return (
    <div>
      <nav className="border-b p-3 flex justify-between px-5 dark:bg-gray-200 sticky">
        <img
          className="justify-left"
          src="/codeday-text-color.svg"
          width="180px"
        />
        <div className="justify-right">
          <a
            href="https://github.com/eilla1/CodeDay-GitHubWorkshop"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub size={45} className="dark:text-gray-800" />
          </a>
        </div>
      </nav>
    </div>
  );
}
