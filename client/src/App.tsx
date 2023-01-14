import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter";
import { Header } from "@fromjquerytoreact/ui";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
