import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router'

function UserDetail() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const json = await res.json();
            setData(json);
        };
        fetchData();


    }, [setData]);

    console.log(typeof id)

    return (
        <div className='flex flex-col space-y-4'>
            <h1 className='text-3xl font-serif'>User</h1>
            <span>Details :</span>
            {data.map((val) => {
                return (
                    parseInt(id) === val.id ?
                        <div key={val.id}>
                            <h1 className='font-bold'>User : {val.name}</h1>
                            <h3 className='font-bold'>Email : {val.email}</h3>
                            <h3 className='font-bold'>Phone : {val.phone}</h3>
                            <h3 className='font-bold'>Company : {val.company.name}</h3>
                            <h3 className='font-bold'>Website : {val.website}</h3>
                        </div>
                        : ''
                )
            })}
            <div className='flex flex-row justify-center space-x-10'>
                <button className='border-2 p-4 border-black text-blue-500 cursor-pointer' onClick={() => navigate(`/posts/${id}`)}>View Posts</button>
                <button className='border-2 p-4 border-black text-blue-500 cursor-pointer' onClick={() => navigate(`/albums/${id}`)}>View Albums</button>
            </div>

        </div >
    )
}

export default UserDetail