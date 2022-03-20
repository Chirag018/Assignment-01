import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import UserDetail from '../pages/UserDetail';
import Post from '../pages/Post';
import Album from '../pages/Album';
import PostDetail from '../pages/PostDetail';
import AlbumDetail from '../pages/AlbumDetail';

function Home() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/user-details/:id' element={<UserDetail />} />
                    <Route path='/posts/:id' element={<Post />} />
                    <Route path='/albums/:id' element={<Album />} />
                    <Route path='/post-details/:id' element={<PostDetail />} />
                    <Route path='/album-details/:id' element={<AlbumDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home