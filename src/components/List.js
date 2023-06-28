// import { useEffect } from "react"

export const List = () => {;
    return (
        <div className="list my-1 p-2">
            <h1 className="text-xl font-bold my-2">Languages</h1>
            <ul className="grid grid-cols-2 cursor-pointer">
                <div className="item1 flex items-center">
                    <li className="eng">English</li>
                    {/* <input type="checkbox" name="" id="" className=""/> */}
                </div>
                <li className="">Chinese</li>
                <li className="">French</li>
                <li className="">Japanese</li>
            </ul>
        </div>
    )
}