const ButtonTab = ({number, tabClick, tabImg}) => {
    return (
        <div className={'tab'+ number + ' tab'}>
            <div className='tab--img__container' onClick={()=> tabClick()}>
                <img className='tab--img'src={tabImg} alt=""></img>
            </div>
            
        </div>
    )
}

export default ButtonTab