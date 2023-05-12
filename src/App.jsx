// import "./App.css";
import { PageTitle } from "./components/PageTitle/PageTitle";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { TodoContent } from "./components/TodoContent/TodoContent";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        toastOptions={{ style: { fontSize: "1.4rem" } }}
        containerStyle={{
          top: 60,
        }}
      />
    </>
  );
}

export default App;
