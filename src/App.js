import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Blog from './pages/Blog';


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
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
