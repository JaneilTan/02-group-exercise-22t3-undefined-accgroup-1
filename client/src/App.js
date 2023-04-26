import "./App.css";
import ChirpList from "./Components/ChirpList";
import Header from "./Components/Header";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Header />
      <ChirpList />
    </div>
  );
}

export default App;
