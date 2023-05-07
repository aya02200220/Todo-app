// import "./App.css";
import { PageTitle } from "./components/PageTitle/PageTitle";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { TodoContent } from "./components/TodoContent/TodoContent";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo List</PageTitle>
        <div>
          <AppHeader />
          <TodoContent />
        </div>
      </div>
    </>
  );
}

export default App;
