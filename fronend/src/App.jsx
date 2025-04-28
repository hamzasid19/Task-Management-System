import { BrowserRouter } from "react-router";
import "./App.css";
import Route from "./Routes/Route";
import { NavOpenProvider } from "./context/navOpen";
import { UserDataProvider } from "./context/UserData";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <UserDataProvider>
            <NavOpenProvider>
              <Route />
            </NavOpenProvider>
          </UserDataProvider>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
