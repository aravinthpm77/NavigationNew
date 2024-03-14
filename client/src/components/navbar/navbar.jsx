import React,{useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar=()=> {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    

  return (
    <div className='  px-20 py-5 flex  justify-evenly items-center  text-center bg-stone-200'>
        <div className='flex '>
            <Link to='/' className='logo pr-60 cursor-auto'>
                <img width="50" height="50" className='cursor-pointer' src="https://assets-global.website-files.com/6369a6904656314914c2bae2/6369a8d295be04a841e17ea5_logo.svg" alt="bookmark-ribbon--v1"/>    
            </Link>
            
        </div >
        
        <button onClick={toggleDropdown} className='mr-10 py-3 px-6  ml-2 transition-all duration-300 pointer-events-auto rounded-lg hover:bg-slate-50  cursor-pointer'>Books</button>
        
        {isDropdownOpen && (
                <div className=" mx-120 my-100 ">
                    <div className='absolute flex bg-slate-50 rounded-xl  border border-stone-300   left-40 my-10 mx-48 py-2  w-21 shadow-lg  scale-90'  >
                        <div class='m-10 grid gap-0.5  '>
                            <h5 class='text-0.5xl font-semibold leading-6 text-gray-900 text-left tracking-wider'>EXPLORE</h5>
                            <Link to='/' class='mt-2 text-left tracking-wider'>Bestsellers</Link>
                            <Link to='/' class='mt-2 text-left tracking-wider'>New Releases</Link>
                            <Link to='/' class='mt-2 text-left tracking-wider'>Popular Genres</Link>
                            <div className=''>
                                <div class='mt-10  '>
                                    <button class=" hover:bg-orange-200 ...   rounded-lg mx-5">
                                    <p class='text-sm text-orange-600 mx-6 my-4 tracking-wider '>Browse all </p>
                                    </button>
                                </div>  
                            </div>
                        </div>

                        <div className='dropdown-mid m-10 grid gap-1 text-left mr-20' >
                            <h5 className='text-left text-0.5xl   font-semibold  text-gray-900 tracking-wider '>LIBRARIES</h5>
                            <Link to='/' className='text-left tracking-wider'>Browse</Link>
                            <Link to='/' className='text-left tracking-wider'>Membership</Link>
                            <Link to='/' className='text-left tracking-wider'>Accessibility</Link>
                            <Link to='/' className='text-left tracking-wider'>Benefits</Link>
                            <Link to='/' className='text-left tracking-wider'>Membership</Link>
                            
                        </div> 
                        <div class='grid overflow-hidden my-3 mx-4 rounded-xl '>
                        
                            <div class='bg-stone-200 transition-all duration-500  hover:bg-stone-300 hover:scale-105 h-250 w-250'>
                                <div class='my-8 mx-1'>
                                <h2 class='text-gray-800 font-bold text-center tracking-wider'>FEATURED</h2>
                                    <img width="150" height="150" class='mx-14 my-7 transition-all duration-500 scale-105  rounded-xl hover:scale-110' src="https://blmparis.files.wordpress.com/2014/07/day.jpg" alt="image1"/>
                                    <p class='text-center text-gray-800 font-semibold tracking-wider'>Book/Author Name</p>
                                </div>

                            </div>
                            
                        </div>

                    </div>
                      
                </div>
        )}
        
        <Link to='/' className='mr-10 py-3 px-6  ml-2 transition-all duration-300 rounded-lg hover:bg-slate-50 '>
            <p>For Kids</p>
        </Link>
        <Link to='/' className='mr-10 py-3 px-6 ml-2 transition-all duration-300 rounded-lg hover:bg-slate-50 '>
            <p>Genres</p>
        </Link>
        <Link to='/' className='mr-10 py-3 px-6  ml-2 transition-all duration-300 rounded-lg hover:bg-slate-50 '>
            <p>Authors</p>
        </Link>
      
        
        
        <div className='flex items-center '>
            <Link to='/' className='mr-10 p-3 ml-2 transition-all duration-300 rounded-lg hover:bg-stone-300 '>
                <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/search.png" alt="search"/>
            </Link>
            <div className='w-0.5 h-8 mr-3 bg-stone-400'>

            </div>
            <Link to='/' className='p-2 ml-2 mr-2 border border-stone-400  transition-all duration-300  rounded-lg hover:bg-stone-300 '>
                <img width="32" height="32" src="https://img.icons8.com/windows/32/buy.png" alt="buy"/>
            </Link> 
            <Link to='/' className='bg-stone-300 h-12 py-3 px-6 transition-all duration-300   hover:bg-stone-400 rounded-lg '>
                <button>Login</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar;



