import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

function Album() {

    let { id } = useParams();
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/`);
            const json = await res.json();
            setData(json);
        };
        fetchData();


    }, [setData]);

    return (
        <div>

            <h1 className='text-3xl font-serif py-4'>Albums</h1>
            <table className='border-2 '>
                <tr>
                    <th className='border-2 '>Id</th>
                    <th className='border-2 '>Title</th>
                    <th className='border-2 '>Actions</th>
                </tr>

                {data.map((val) => {
                    return (
                        parseInt(id) === val.userId ?
                            <tr key={val.id} className='capitalize p-10'>
                                <th className='border-2 px-10'>{val.id}</th>
                                <th className='border-2 '>{val.title}</th>
                                <div>
                                    <th className='border-2 cursor-pointer text-blue-500 px-2' onClick={() => navigate(`/user-details/${id}`)}>View User</th>
                                    <th className='border-2 cursor-pointer text-blue-500 px-2' onClick={() => navigate(`/album-details/${val.userId}`)}>View Photos</th>
                                </div>
                            </tr>
                            : ''
                    )
                })}
            </table>
        </div>
    )
}

export default Album