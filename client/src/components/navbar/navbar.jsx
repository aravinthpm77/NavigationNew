import React,{useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar=()=> {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    

  return (
    <div className=' max-auto px-20 py-5 flex justify-around items-center  text-center bg-stone-200'>
        <div className='flex'>
            <Link to='/' className='logo'>
                <img width="50" height="50" src="https://assets-global.website-files.com/6369a6904656314914c2bae2/6369a8d295be04a841e17ea5_logo.svg" alt="bookmark-ribbon--v1"/>    
            </Link>
            
        </div >
        <Link to='/' className=''>
                <p onClick={toggleDropdown}>Books</p>
        </Link>
        {isDropdownOpen && (
                <div className="absolute ">
                    <div className='flex bg-slate-300 rounded-xl my-70'>
                        <div className='m-10 grid gap-1'>
                            <h5 className='text-4xl'>EXPLORE</h5>
                            <Link to='/'>Bestsellers</Link>
                            <Link to='/'>New Releases</Link>
                            <Link to='/'>Popular Genres</Link>
                        </div>
                        <div className='dropdown-mid m-10 grid gap-1' >
                            <h5>LIBRARIES</h5>
                            <Link to='/'>Browse</Link>
                            <Link to='/'>Membership</Link>
                            <Link to='/'>Accessibility</Link>
                            <Link to='/'>Benefits</Link>
                            <Link to='/'>Membership</Link>
                            
                        </div>
                        <div className='grid '>
                            <img width="200" height="300" className='rounded-tr-2xl' src="https://blmparis.files.wordpress.com/2014/07/day.jpg" alt="image1"/>
                            <p>Book/Author Name</p>
                        </div>  
                    </div>
                      
                </div>
        )}
        
        <Link to='/' className=''>
            <p>For Kids</p>
        </Link>
        <Link to='/' className='cart'>
            <p>Genres</p>
        </Link>
        <Link to='/' className='cart'>
            <p>Authors</p>
        </Link>
      
        
        
        <div className='flex items-center'>
            <Link to='/' className='cart'>
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/search.png" alt="search"/>
            </Link>
            <Link to='/' className='cart'>
                <img width="32" height="32" src="https://img.icons8.com/windows/32/buy.png" alt="buy"/>
            </Link>
            <Link to='/' className='bg-stone-300 py-3 px-6   hover:bg-stone-400 rounded-lg '>
                <button>Login</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;



