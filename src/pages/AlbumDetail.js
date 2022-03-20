import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function AlbumDetail() {

    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
            const json = await res.json();
            setData(json);
        };
        fetchData();


    }, [setData]);
    return (
        <div className='space-y-3'>
            <h1 className='text-3xl font-serif'>Album</h1>
            <p>Details : </p>
            {data && data.map((val) => {
                return (
                    <div key={val.id} className='flex space-x-3'>
                        <span>{val.id}</span>
                        <h1 className='text-xl capitalize'>{val.title}</h1>
                    </div>
                )
            })}
            <h1 className='text-3xl font-serif'>Photos :</h1>
            <div >
                {data.map((val) => {
                    return (
                        <div key={val.id} className='border-2 flex max-w-lg flex-row justify-between items-center capitalize'>
                            <h1>{val.title}</h1>
                            <img src={val.thumbnailUrl} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AlbumDetail




// context api for repeatation of api calling
// details part remaining in albumdetail ,PostDetail




