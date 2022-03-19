import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            setData(json);
        };
        fetchData();


    }, [setData])

    let navigate = useNavigate();


    return (
        <div className="flex ">
          
            <div className='flex flex-col space-x-36 space-y-10 text-center justify-between'>
                <h1 className='font-serif text-3xl mt-8 ml-24'>Users</h1>
                <table className=''>
                    <tr>
                        <th className='border-2 space-x-4'>Id</th>
                        <th className='border-2'>Name</th>
                        <th className='border-2'>Email</th>
                        <th className='border-2'>Actions</th>
                    </tr>
                    {data.map((val) => {
                        return (
                            <tr key={val.id} className='border-2'>
                                <td className='border-2'>{val.id}</td>
                                <td className='border-2 hover:text-blue-400 cursor-pointer'  onClick={() => navigate(`/user-details/${val.id}`)}>{val.name}</td>
                                <td className='border-2'>{val.email}</td>
                                <div className='flex flex-row items-center justify-center'>
                                    <td className='border-2 cursor-pointer text-blue-500 px-2' onClick={() => navigate(`/posts/${val.id}`)}>View Posts</td>
                                    <td className='border-2 cursor-pointer text-blue-500 px-2' onClick={() => navigate(`/albums/${val.id}`)}>View Albums</td>
                                </div>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

export default HomePage