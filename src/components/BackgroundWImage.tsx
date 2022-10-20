import IMAGE from '../../assets/backgroundImage.jpeg'

const Background = (prop:any)=>{
    return(
        <div
        className='h-full'
        style={{
            backgroundImage: `url("${IMAGE}")`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            height:'90vh'
        }}
    > 

    </div>
    )
}

export default Background