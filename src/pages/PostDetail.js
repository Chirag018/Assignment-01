import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

function PostDetail() {

  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const json = await res.json();
      setData(json);
    };
    fetchData();


  }, [setData]);

  return (
    <div className='mt-10 space-y-3'>
      <div className='flex flex-row justify-between mr-20'>
        <h1 className='text-3xl font-serif'>Post</h1>
        <button className='border-2 border-black p-1 px-10' onClick={() => navigate(`/user-details/${id}`)}>View User</button>

      </div>
      <div>
        <p className=''>Details :</p>
        {data && data.map((val) => {
          return (
            <div key={val.id} className='flex space-x-3'>
              <span>{val.id}</span>
              <h1 className='text-xl capitalize'>{val.name}</h1>
            </div>
          )
        })}

      </div>
      <h1 className='text-2xl font-serif'>Comments</h1>
      <div className='flex flex-col '>
        {data.map((val) => {
          return (
            <div key={id} className='border-2 capitalize space-y-4 my-3'>
              <h1>Name : {val.name}</h1>
              <h3>Email : {val.email}</h3>
              <p>Comments : {val.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PostDetail