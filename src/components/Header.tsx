import { Link,useLocation } from "react-router-dom"

const DEFAULT = `"text-gray-800 
hover:bg-gray-50 
focus:ring-4 
focus:ring-gray-300 
font-medium rounded-lg 
text-sm px-4 lg:px-5 
py-2 lg:py-2.5 mr-2 
dark:hover:bg-gray-700 
focus:outline-none dark:focus:ring-gray-800"`

const Header = ()=>{
    const location = useLocation();
    return(
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <p  className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">IDK News</span>
                    </p>
                    <div className="flex items-center lg:order-2">
                        {location.pathname.includes('ogin') || location.pathname.includes('egister') ? <Link to='/login'>
                            <p
                                className={location.pathname.includes('ogin') ? `${DEFAULT} dark:text-blue-500 ` : `${DEFAULT} dark:text-white`}
                                    >Log in</p>
                        </Link> : ''}
                    
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header