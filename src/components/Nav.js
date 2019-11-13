import React, {Fragment} from "react"
import { Navbar } from 'react-bulma-components';

const Nav = () => {
  return (
    <Fragment>
      <Navbar.Container position="end">
        <Navbar.Item
          href="#"
        >
          About
        </Navbar.Item>
        <Navbar.Item
          href="#"
        >
          So far
        </Navbar.Item>
        <Navbar.Item
          href="#"
        >
          Projects
        </Navbar.Item>
        <Navbar.Item
          href="#"
        >
          Events
        </Navbar.Item>
        <Navbar.Item
          href="#"
        >
          Contact me
        </Navbar.Item>
      </Navbar.Container>
    </Fragment>
  )
}

export default Nav