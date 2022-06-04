import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul>
                <CustomLink to={"/"}>Home</CustomLink>

                <CustomLink to={"/reserve-value"}>reserver value</CustomLink>
                <CustomLink to={"/reserve-card"}>reserve card</CustomLink>

                <CustomLink to={"/view-share-certificate"}>
                    view share certificate
                </CustomLink>
                <CustomLink to={"/view-poll-results"}>
                    view poll result
                </CustomLink>
            </ul>
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li style={{ backgroundColor: `${isActive ? "black" : "blue"}` }}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;
