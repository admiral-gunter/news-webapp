import { useState } from "react"
import Select from 'react-select';

const FIELDS = [
    {key:'first_name', title:'First Name', type:'text'},
    {key:'last_name', title:'Last Name', type:'text'},
    {key:'email', title:'Email', type:'email'},
    {key:'password', title:'Password', type:'password'},
    {key:'jenis_kelamin', type:'select', title:'Jenis Kelamin',options:[
        {value:1, label:'Laki laki'},
        {value:2, label:'Perempuan'},
    ]},
    {key:'kota', type:'select', title:'Kota',options:[
        {value:1, label:'Jakarta'},
        {value:2, label:'Bandung'},
        {value:3, label:'Yogyakarta'},
        {value:4, label:'Malang'},
        {value:5, label:'Maluku'},
    ]},
    {key:'provinsi', type:'select', title:'Provinsi',options:[
        {value:1, label:'Jawa Barat'},
        {value:2, label:'Jawa Tengah'},
        {value:3, label:'Jawa Timur'},
        {value:4, label:'Timor Timur'},
        {value:5, label:'Papua Merdeka'},
    ]}
]

//LOL papua merdeka cuman jokes :(

const INPUT = "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 " 

const Register = ()=>{
    const [inputVal, SetInputVal] = useState({
        first_name:null,
        last_name:null,
        email:null,
        password:null,
        jenis_kelamin:null,
        kota:null,
        provinsi:null
    })
    const SET_VAL = (e:any, key:string)=>{
        SetInputVal(prevState => ({
            ...prevState,
            [key]: e.target.value
        }))
    }

    const SUBMIT = (e:any)=>{
        e.preventDefault()
        console.log('le summitear')
    }

    return(
        <form className='flex justify-center overflow-auto' onSubmit={SUBMIT}>
            <div className=" bg-white w-fit rounded-md shadow-md p-[40px] mt-[2.5%]">
                <p className='text-2xl font-bold text-center text-blue-700 hover:text-blue-900'>REGISTER</p>
                <div className='my-[10px]'>
                    <hr />
                </div>
                <div className="md:flex justify-evenly gap-[200px]">

                    <div>
                    {
                        FIELDS.map((e, index)=>{
                            if(index <= 3){
                                return(
                                    <div className="my-[10px]">
                                        <p><span style={{color:'red'}}>*</span> {e.title}</p>
                                        <input className={INPUT} type={e.type} onChange={(event)=>SET_VAL(event, e.key)} required/>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                    <div>
                    {
                        FIELDS.map((e, index)=>{
                            if(index > 3){
                                if(e.type == 'select'){
                                    return (
                                        <div className="my-[10px]">
                                            <p><span style={{color:'red'}}>*</span> {e.title}</p>
                                            <Select
                                            className="w-[300px]"
                                            placeholder={'Pilih..'}
                                                onChange={(e)=>console.log(e)}
                                                options={e.options}
                                            />
                                        </div>
                                    )
                                }
                                return(
                                    <div>
                                        <p>{e.title}</p>
                                        <input className={INPUT} type={e.type} onChange={(event)=>SET_VAL(event, e.key)} />
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                </div>
                <div className='flex justify-center my-[20px]'>
                    <button 
                        disabled={
                            Object.values(inputVal).every(x=>x === null || x=='')
                        }
                        type="submit" 
                        className={
                            Object.values(inputVal).every(x=>x === null || x=='') ?
                            'bg-green-200 p-[10px] rounded-md shadow-md text-white font-bold w-full text-center'
                            :
                            'bg-green-500 hover:bg-green-700 p-[10px] rounded-md shadow-md text-white font-bold w-full text-center'}
                    >Daftar</button>
                </div>
            </div>
        </form>
    )
}

export default Register