import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="pt-8">
      <hr />
      <div className="flex flex-col justify-center text-center">

        <div className="flex flex-row items-center space-x-3 justify-center">
          <p>Toggle theme:</p>{" "}
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              document
                .querySelector("#theme_toggle")
                .classList.toggle("rotate-180");
            }}
            className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
            id="theme_toggle"
          >
            <FaSun size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
