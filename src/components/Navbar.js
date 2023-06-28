// import { About } from "./About"
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return(
        <div className="nav p-5 flex justify-between items-center border-b">
            <h1 className="text-3xl font-semibold">Components</h1>
            <ul className="flex gap-10">
                <li>
                    <Link to="/About">
                        About
                    </Link>
                </li>
                <li>Contact</li>
            </ul>
        </div>
    )
}