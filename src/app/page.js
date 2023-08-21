import { TodoItem } from "@/components/Server/ServerComponents";
import Form from "./todoForm";

export default function Home() {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        <TodoItem title={"Sample"} description={"Sample description 1234"} />
      </section>
    </div>
  );
}
