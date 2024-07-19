import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const navLists = ["About" , "Websites", "Contact"]

const Navbar = () => {
  return (
    <header className='w-full py-5 flex justify-between items-center'>
        <nav className='flex w-full'>
          <div className='flex justify-center'>
            <img src={logo} alt="logo" width={40} height={40} />
            <h1 className='font-bold tracking-widest content-center pl-3'>Matt Mister - Website Development</h1>
          </div>

          <div className='flex flex-1 md:justify-end items-center max-sm:hidden'>
            {navLists.map((nav) => (
              <div key={nav} className='px-5 cursor-pointer'>
                {nav}
              </div>
            ))}
          </div>

          <div className='md:hidden'>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </nav>
    </header>
  )
}

export default Navbar