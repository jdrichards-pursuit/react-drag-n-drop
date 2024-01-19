import { render } from "react-dom";
// import Example from "./example";
import Container from "./Container";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
