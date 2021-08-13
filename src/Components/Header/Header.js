import Nav from "../Nav/Nav";
import SearchPanel from "../SearchPanel/SearchPanel";

function Header(props) {
  return (
    <div className="header">
      <img
        src={props.icon}
        className="logo"
        onClick={props.clickOpenModalCartComponent}
      />
      <Nav />
      <SearchPanel place={"Search"} />
    </div>
  );
}

export default Header;
