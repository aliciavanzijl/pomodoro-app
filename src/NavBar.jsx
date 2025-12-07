import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            {/* Using inline styles for active link */}
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? "var(--color-accent-purple)" : "white",
                    fontWeight: isActive ? "bold" : "bold",
                    textDecoration: isActive ? "none": "none",
                    marginRight: "15px",
                    paddingTop: "10px",
                })}
            >
                Digital Timer
            </NavLink>

            <NavLink
                to="/visualtimer"
                style={({ isActive }) => ({
                    color: isActive ? "var(--color-accent-purple)" : "white",
                    fontWeight: isActive ? "bold" : "bold",
                    textDecoration: isActive ? "none": "none",
                })}
            >
                Visual Timer
            </NavLink>
        </nav>
    );
}

export default NavBar;