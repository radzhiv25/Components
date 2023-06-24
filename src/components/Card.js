export const Card = (props) => {
    return(
        <div className="card p-2 text-left">
            <h1 className="font-semibold text-2xl">{props.name}</h1>
            <p className="text-gray-500">{props.bio}</p>
            <button className="mt-2 p-1 border rounded-md">
                <a href={props.link} className="flex gap-2 items-center ">
                    <span>
                        <img src="/images/github-mark.png" alt="" className="w-5"/>
                    </span>
                    Source Code</a>
            </button>
        </div>
    )
}