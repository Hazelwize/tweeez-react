import {useState} from 'react'
const Tab = ({number, component, tabImg}) => {
    const [show,setShow] = useState(false)
    return (
        <div className={'tab'+ number + (show ? ' tab tab--clicked' : ' tab')}>
            <div>{show && component}</div>
            <div className='tab--img__container' onClick={()=>setShow(!show)}>
                <img className='tab--img'src={tabImg} alt=''></img>
            </div>
            
        </div>
    )
}

export default Tab