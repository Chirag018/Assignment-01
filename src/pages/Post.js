import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

function Post() {

  let { id } = useParams();
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await res.json();
      setData(json);
    };
    fetchData();


  }, [setData]);

  return (

    <div className='mb-10'>
      <h1 className='text-3xl font-serif py-10'>Posts</h1>
      <table>
        <tr className='flex justify-evenly space-x-80'>
          <th className='border-2'>Id</th>
          <th className='border-2'>Title</th>
          <th className='border-2 '>Body</th>
          <th className='border-2'>Actions</th>
          {/* <th className='border-2'>Comment</th> */}
        </tr>
      </table>
      {data.map((val) => {
        console.log(id)
        return (
          parseInt(id) === val.userId ?
            <>
              <tr key={val.id} className='text-center capitalize'>
                <td className='border-2 px-10'>{val.id}</td>
                <td className='border-2 '>{val.title}</td>
                <td className='border-2'>{val.body}</td>
                <div className='flex flex-row mr-1'>
                  <td className='border-2 cursor-pointer text-blue-500 px-2' onClick={() => navigate(`/user-details/${id}`)}>View User</td>
                  <td className='border-2 cursor-pointer text-blue-500 px-2' onClick={() => navigate(`/post-details/${id}`)}>View Comments</td>

                </div>
              </tr>
            </>
            : ''
        )
      })}

    </div>
  )
}

export default Post