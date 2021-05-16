//*la extension para autocompletar es Name: ES7 React/Redux/GraphQL/React-Native snippets
//* el comando para crear un componente funcionar es rfce

import React from "react";
import { Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <Nav
        style={{
          backgroundColor: "#333",
          borderColor: "#333",
          color: "#fff",
        }}
        className="p-3"
      >
        <NavItem tag="h1">
          <FontAwesomeIcon icon={faClipboardList} /> To Do app
        </NavItem>
      </Nav>
    </>
  );
}

export default Header;
