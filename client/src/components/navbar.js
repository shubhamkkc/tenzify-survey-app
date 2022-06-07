import React,{useState} from "react";
import styled from "styled-components";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    CustomLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,} from "../styles/Navbar.style";
    import LogoImg from "../styles/tenzify-logo.png"
function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
        <div>
        <NavbarContainer>
        <NavbarInnerContainer>
        <LeftContainer>
        <Logo src={LogoImg}></Logo>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer>
                <CustomLink to={"/"}>Home</CustomLink>

                <CustomLink to={"/reserve-value"}>reserver value</CustomLink>
                <CustomLink to={"/reserve-card"}>reserve card</CustomLink>

                <CustomLink to={"/view-share-certificate"}>
                    view share certificate
                </CustomLink>
                <CustomLink to={"/view-poll-results"}>
                    view poll result
                </CustomLink>
                <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
                </NavbarLinkContainer>
        </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to={"/reserve-value"}>reserver value</NavbarLinkExtended>
          <NavbarLinkExtended to={"/reserve-card"}>reserve card</NavbarLinkExtended>
          <NavbarLinkExtended to={"/view-share-certificate"}>
                    view share certificate</NavbarLinkExtended>
          <NavbarLinkExtended  to={"/view-poll-results"}>
                    view poll result</NavbarLinkExtended>
        </NavbarExtendedContainer>
        
      )}
            </NavbarContainer>
        </div>
    );
}

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to);
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//     return (
//         <li style={{ color: `${isActive ? "black" : "blue"}` }}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     );
// }

export default Navbar;
