import img from "./react.svg";
function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={img} alt="" className="img" />
        <div className="note">ReactFacts</div>
        <ul className="navItems">
         React Course - Project 1
        </ul>
      </nav>
    </header>
  );
}
export default Header;
