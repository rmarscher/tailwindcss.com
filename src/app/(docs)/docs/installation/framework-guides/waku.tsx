import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/waku.react.svg";
import LogoDark from "@/docs/img/guides/waku-white.react.svg";

export let tile: Tile = {
  title: "Waku",
  description: "The minimal React framework.",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "Install Tailwind CSS with Waku",
  description: "Setting up Tailwind CSS in an Waku project.",
};

export let steps: Step[] = [
  {
    title: "Create your project",
    body: (
      <p>
        Start by creating a new Waku project if you don't have one set up already. The most common approach is to use{" "}
        <a href="https://waku.gg/#getting-started">create waku</a>.
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm create waku@latest --project-name my-project
        cd my-project
      `,
    },
  },
  {
    title: "Start using Tailwind in your project",
    body: (
      <p>
        The default template for Waku includes Tailwind as a PostCSS plugin. You can start using it immediately. The
        `src/styles.css` file imports tailwind and the default layout `src/pages/_layout.tsx` imports the styles.css
        file and uses Tailwind's utility classes for styling. You can add your own `tailwind.config.js` or edit
        `postcss.config.js` to customize Tailwind.
      </p>
    ),
    code: {
      name: "src/pages/index.tsx",
      lang: "tsx",
      code: js`
        export default function Home() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];
