import type { Route } from "./+types/home";
import { Button } from "react-aria-components";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container p-6">
      <div className="bg-gradient-to-r from-teal-300 to-cyan-500 p-12 rounded-lg flex justify-center">
        <Button
          className={`
      relative overflow-hidden
      inline-flex items-center justify-center rounded-md bg-black bg-opacity-50 bg-clip-padding border border-white/20 px-6 py-4 text-white text-lg
      hover:bg-opacity-60 pressed:bg-opacity-70 transition-colors cursor-default outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
        >
          Book flight
        </Button>
      </div>
    </div>
  );
}
