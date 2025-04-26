import { BrowserRouter } from "react-router";
import "./App.css";
import Route from "./Routes/Route";
import { NavOpenProvider } from "./context/navOpen";
import { UserDataProvider } from "./context/UserData";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <UserDataProvider>
        <NavOpenProvider>
          <Route />
        </NavOpenProvider>
      </UserDataProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;
