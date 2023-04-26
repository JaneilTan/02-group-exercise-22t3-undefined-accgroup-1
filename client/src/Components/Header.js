import "./Header.css";
import LoginButton from "./LoginButton";

function Header() {
  return (
    <header className="header">
      <h1>🐥 Chirpie App</h1>
      <LoginButton />
    </header>
  );
}

export default Header;
