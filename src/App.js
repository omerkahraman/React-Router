import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import BlogLayout from './pages/blog';
import Categories from './pages/blog/Categories';
import Post from './pages/blog/Post';
import Blog from './pages/blog/Blog';


function App() {
  return (
    <> 
      <NavLink to="/" className={({isActive}) => isActive && 'aktif'}>Home Page</NavLink>
      <NavLink to="/contact" style={({isActive}) => ({
        backgroundColor: isActive ? 'red' : 'transparent'
      })}>Contact</NavLink>
      <NavLink to="/blog">
        {({isActive}) => (
          <>
          Blog
          {isActive && 'Aktif'}
          </>
        )}
      </NavLink>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogLayout />}>
          <Route index={true} element={<Blog />} />
          <Route path='categories' element={<Categories />} />
          <Route path='post/:url' element={<Post />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
