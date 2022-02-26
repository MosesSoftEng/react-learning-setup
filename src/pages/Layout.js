import {Link, Outlet} from "react-router-dom";

function Layout() {
    return(
        // JSX fragment.
        <>
            <nav>
                <ul>
                    <li>
                        {/*Link Directive
                          * - Used to set URL and track history, used instead of href.
                          */}
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>

            {/*Directive to render current route.*/}
            <Outlet/>
        </>
    );
}

export default Layout;
