import styled from 'styled-components'
import Link from 'next/link'

export default function Navbar(props) {
  return (
    <NavbarContainer>
      <NavbarItem>
        <Link href="/">
          <NavbarLink>{props.navbar.title}</NavbarLink>
        </Link>
      </NavbarItem>
      {props.navbar.showStarBadge ? <NavbarItem>
        <iframe src="https://ghbtns.com/github-btn.html?user=AmreshSinha&repo=codemocked&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub" />
      </NavbarItem> : null}
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1rem 1rem;
  border-bottom: 1px solid #ccc;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
  z-index: 1;
  max-width: 100%;
  min-height: 30px;
`

const NavbarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavbarLink = styled.a`
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 5px;
    background: 
      linear-gradient(currentColor 0 0) 
      bottom /var(--d, 20%) 3px 
      no-repeat;
    transition:0.5s;
    :hover {
        --d: 80%;
    }
`
