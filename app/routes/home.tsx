import { StockTableExample } from "~/components/StockTableExample";
import type { Route } from "./+types/home";
import { Button } from "react-aria-components";
import { StockTableExample1 } from "~/components/StockTableExample1";
import { StockTableExample2 } from "~/components/StockTableExample2";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container p-6 flex flex-col space-y-4">
      <StockTableExample />
      <StockTableExample1 />
      <StockTableExample2 />
    </div>
  );
}
