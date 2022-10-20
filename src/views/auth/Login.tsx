import './Login.css'
import { useNavigate } from 'react-router-dom';

const INPUT = "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 

const Login = ()=>{
    const history = useNavigate();
    const handleSubmit=(e:any, route:string)=> {
        e.preventDefault();

        history(route);
    }
    return(
            <div className='flex justify-center'>
                <div className='flex-col bg-white w-fit rounded-md shadow-md p-[30px] mt-[3%]'>
                    <p className='text-2xl font-bold text-center text-blue-700 hover:text-blue-900'>PORTAL BERITA</p>
                    <div className='my-[10px]'>
                        <hr />
                    </div>

                    <div className='p-[10px]'>
                        <p className='text-sm font-light'>Please enter the user and password to login.</p>
                        <div className='my-[10px]'>
                            <p>Email</p>
                            <input type="email" className={INPUT} />
                        </div>


                        <div className='my-[10px]'>
                            <p>Password</p>
                            <input type="password" className={INPUT} />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <button 
                            className='bg-green-500 hover:bg-green-700 p-[10px] rounded-md shadow-md text-white font-bold w-full text-center'
                            onClick={(event)=>handleSubmit(event, '/berita')}
                        >
                            Login
                        </button>
                    </div>

                    <div className='my-[20px]'>
                        <hr />
                    </div>

                    <div className='flex justify-center'>
                        <p className='text-center w-[250px] text-sm'>Please use your credentials to login. if you are not a member, please register your identity</p>
                    </div>
                </div>
            </div>
    )
}

export default Login