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
                <div className="absolute mx-80 my-100;">
                    <div className='flex bg-slate-50 rounded-3xl my-12 mx-50' >
                    <div class='m-10 grid gap-0.5'>
                        <h5 class='text-0.5xl font-semibold leading-6 text-gray-900'>EXPLORE</h5>
                        <Link to='/' class='mt-2'>Bestsellers</Link>
                        <Link to='/' class='mt-2'>New Releases</Link>
                        <Link to='/' class='mt-2'>Popular Genres</Link>
                        <div className=''>
                            <div class='mt-20'>
                                <button class=" hover:bg-orange-200 ...   rounded-lg mx-5">
                                <p class='text-sm text-orange-600 mx-6 my-4'>Browse all </p>
                                {/* <div>
                                    <img width="16" height="16" src="https://img.icons8.com/small/16/forward-arrow.png" alt="forward-arrow"/>
                                </div> */}
                                </button>
                            </div>  
                        </div>
                    </div>

                        <div className='dropdown-mid m-10 grid gap-1' >
                            <h5 className='text-0.5xl  font-semibold leading-6 text-gray-900 mx-20'>LIBRARIES</h5>
                            <Link to='/'>Browse</Link>
                            <Link to='/'>Membership</Link>
                            <Link to='/'>Accessibility</Link>
                            <Link to='/'>Benefits</Link>
                            <Link to='/'>Membership</Link>
                            
                        </div>
                        <div class='grid overflow-hidden my-3 mx-4 rounded-3xl'>
                            <div class='bg-sky-400 hover:bg-sky-700 h-250 w-250'>
                                <div class='my-8 mx-1'>
                                    <h2 class='text-white text-center'>FEATURED</h2>
                                    <img width="150" height="150" class='mx-14 my-7   rounded-3xl hover:translate-x-0.5' src="https://blmparis.files.wordpress.com/2014/07/day.jpg" alt="image1"/>
                                    <p class='text-center text-white'>Book/Author Name</p>
                                </div>

                            </div>
                            
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



