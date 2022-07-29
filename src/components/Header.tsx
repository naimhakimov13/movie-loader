import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='bg-gray-500 text-white h-[60px] flex justify-between items-center px-[15px]'>
      <h1 className='text-2xl'>
        <Link to='/'>Movie Loader</Link>
      </h1>
      <div>
        <Link to='/' className='text-lg px-2'>Home</Link>
        <Link to='/favorites' className='text-lg px-2'>Favorites</Link>
      </div>
    </nav>
  )
}
export default Header