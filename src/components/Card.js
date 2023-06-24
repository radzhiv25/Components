import { useState } from 'react'

export const Card = (props) => {
    const [like,setLike] = useState(0)
    return(
        <div className="card p-2 text-left">
            <div className="content">
            <h1 className="font-semibold text-2xl">{props.name}</h1>
            <p className="text-gray-500">{props.bio}</p>
            </div>
            <div className="btn mt-2 flex justify-between">
            <button className="p-1 border hover:border-gray-600 rounded-md">
                <a href={props.link} className="flex gap-2 items-center">
                    <span>
                        <img src="/images/github-mark.png" alt="" className="w-5"/>
                    </span>
                    Source Code</a>
            </button>
            <button className='like flex items-center p-1 border rounded-md space-x-1' onClick={()=> setLike(like + 1)}>
                <img src="/images/heart.png" alt="" className='w-5'/>
                <span>{like}</span>
            </button>
            </div>
        </div>
    )
}