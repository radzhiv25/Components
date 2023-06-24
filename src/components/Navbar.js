export const Navbar = () => {
    return(
        <div className="nav p-5 flex justify-between">
            <h1 className="text-3xl font-semibold">Components</h1>
            <ul className="flex gap-10">
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}