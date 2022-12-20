const Weapons = ({currentWeapon, changeWeapon}) => {
    return(
        <div className='tab--weapon'>
            <div className='tab--weapon__info'>
                <h2>{currentWeapon.name}</h2>
                <img className='tab--weapon__img' src={currentWeapon.url} alt={currentWeapon.name}></img>
            </div>
            <button className='btn tab--btn' type="button" onClick={() => changeWeapon()}>Pick Weapon</button>
        </div>
    )
}

export default Weapons