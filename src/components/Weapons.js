import {useState} from 'react'
const Weapons = () => {
    const weapons = [
        {
            name:'.52 Gal',
            url:'https://cdn.wikimg.net/en/splatoonwiki/images/e/ed/S3_Weapon_Main_.52_Gal.png'
        },
        {
            name: '.96 Gal',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/55/S3_Weapon_Main_.96_Gal.png'
        },
        {
            name: 'Aerospray MG',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c5/S3_Weapon_Main_Aerospray_MG.png'
        },
        {
            name: 'Aerospray RG',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/2b/S3_Weapon_Main_Aerospray_RG.png'
        },
        {
            name: 'Ballpoint Splatling',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f9/S3_Weapon_Main_Ballpoint_Splatling.png'
        },
        {
            name: 'Big Swig Roller',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/8e/S3_Weapon_Main_Big_Swig_Roller.png'
        },
        {
            name: 'Bamboozler 14 Mk I',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/6d/S3_Weapon_Main_Bamboozler_14_Mk_I.png'
        },
        {
            name: 'Blaster',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/a7/S3_Weapon_Main_Blaster.png'
        },
        {
            name: 'Bloblobber',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/41/S3_Weapon_Main_Bloblobber.png'
        },
        {
            name: 'Carbon Roller',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/21/S3_Weapon_Main_Carbon_Roller.png'
        },
        {
            name: 'Carbon Roller Deco',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/72/S3_Weapon_Main_Carbon_Roller_Deco.png'
        },
        {
            name: 'Clash Blaster',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/2f/S3_Weapon_Main_Clash_Blaster.png'
        },
        {
            name: 'Classic Squiffer',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3c/S3_Weapon_Main_Classic_Squiffer.png'
        },
        {
            name: 'Custom Splattershot Jr.',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/df/S3_Weapon_Main_Custom_Splattershot_Jr..png'
        },
        {
            name: 'Dapple Dualies',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/54/S3_Weapon_Main_Dapple_Dualies.png'
        },
        {
            name: 'Dapple Dualies Nouveau',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e1/S3_Weapon_Main_Dapple_Dualies_Nouveau.png'
        },
        {
            name: 'Dark Tetra Dualies',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c9/S3_Weapon_Main_Dark_Tetra_Dualies.png'
        },
        {
            name: 'Dualie Squelchers',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5a/S3_Weapon_Main_Dualie_Squelchers.png'
        },
        {
            name: 'Dynamo Roller',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5e/S3_Weapon_Main_Dynamo_Roller.png'
        },
        {
            name: 'E-liter 4K',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/10/S3_Weapon_Main_E-liter_4K.png'
        },
        {
            name: 'E-liter 4K Scope',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/eb/S3_Weapon_Main_E-liter_4K_Scope.png'
        },
        {
            name: 'Explosher',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/de/S3_Weapon_Main_Explosher.png'
        },
        {
            name: 'Flingza Roller',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d2/S3_Weapon_Main_Flingza_Roller.png'
        },
        {
            name: 'Forge Splattershot Pro',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d8/S3_Weapon_Main_Forge_Splattershot_Pro.png'
        },
        {
            name: 'Glooga Dualies',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/9/99/S3_Weapon_Main_Glooga_Dualies.png'
        },
        {
            name: 'Goo Tuber',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/8a/S3_Weapon_Main_Goo_Tuber.png'
        },
        {
            name: 'H-3 Nozzlenose',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5a/S3_Weapon_Main_H-3_Nozzlenose.png'
        },
        {
            name: 'Heavy Splatling',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5e/S3_Weapon_Main_Heavy_Splatling.png'
        },
        {
            name: 'Hero Shot Replica',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/24/S3_Weapon_Main_Hero_Shot_Replica.png'
        },
        {
            name: 'Hydra Splatling',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/d1/S3_Weapon_Main_Hydra_Splatling.png'
        },
        {
            name: 'Inkbrush',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/4a/S3_Weapon_Main_Inkbrush.png'
        },
        {
            name: 'Inkbrush Nouveau',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/2e/S3_Weapon_Main_Inkbrush_Nouveau.png'
        },
        {
            name: 'Jet Squelcher',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/69/S3_Weapon_Main_Jet_Squelcher.png'
        },
        {
            name: 'L-3 Nozzlenose',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/2c/S3_Weapon_Main_L-3_Nozzlenose.png'
        },
        {
            name: 'Luna Blaster',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/59/S3_Weapon_Main_Luna_Blaster.png'
        },
        {
            name: 'Luna Blaster Neo',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/11/S3_Weapon_Main_Luna_Blaster_Neo.png'
        },
        {
            name: 'Mini Splatling',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/86/S3_Weapon_Main_Mini_Splatling.png'
        },
        {
            name: "N-ZAP '85",
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f6/S3_Weapon_Main_N-ZAP_%2785.png'
        },
        {
            name: 'Nautilus 47',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/8/81/S3_Weapon_Main_Nautilus_47.png'
        },
        {
            name: 'Octobrush',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3d/S3_Weapon_Main_Octobrush.png'
        },
        {
            name: 'Range Blaster',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1d/S3_Weapon_Main_Range_Blaster.png'
        },
        {
            name: 'Rapid Blaster',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/6a/S3_Weapon_Main_Rapid_Blaster.png'
        },
        {
            name: 'Rapid Blaster Pro',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c6/S3_Weapon_Main_Rapid_Blaster_Pro.png'
        },
        {
            name: 'REEF-LUX 450',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/6/66/S3_Weapon_Main_REEF-LUX_450.png'
        },
        {
            name: 'Slosher',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/42/S3_Weapon_Main_Slosher.png'
        },
        {
            name: 'Slosher Deco',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/a/a5/S3_Weapon_Main_Slosher_Deco.png'
        },
        {
            name: 'Sloshing Machine',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/38/S3_Weapon_Main_Sloshing_Machine.png'
        },
        {
            name: 'Snipewriter 5H',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/3/34/S3_Weapon_Main_Snipewriter_5H.png'
        },
        {
            name: 'Splash-o-matic',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/7b/S3_Weapon_Main_Splash-o-matic.png'
        },
        {
            name: 'Splat Brella',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/2/27/S3_Weapon_Main_Splat_Brella.png'
        },
        {
            name: 'Splat Charger',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/41/S3_Weapon_Main_Splat_Charger.png'
        },
        {
            name: 'Splat Dualies',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e8/S3_Weapon_Main_Splat_Dualies.png'
        },
        {
            name: 'Splat Roller',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/c7/S3_Weapon_Main_Splat_Roller.png'
        },
        {
            name: 'Splatana Stamper',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/4d/S3_Weapon_Main_Splatana_Stamper.png'
        },
        {
            name: 'Splatana Wiper',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/e/e5/S3_Weapon_Main_Splatana_Wiper.png'
        },
        {
            name: 'Splatterscope',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/b2/S3_Weapon_Main_Splatterscope.png'
        },
        {
            name: 'Splattershot',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/b/bf/S3_Weapon_Main_Splattershot.png'
        },
        {
            name: 'Splattershot Jr.',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1e/S3_Weapon_Main_Splattershot_Jr..png'
        },
        {
            name: 'Splattershot Nova',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/10/S3_Weapon_Main_Splattershot_Nova.png'
        },
        {
            name: 'Splattershot Pro',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/7/77/S3_Weapon_Main_Splattershot_Pro.png'
        },
        {
            name: 'Sploosh-o-matic',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/59/S3_Weapon_Main_Sploosh-o-matic.png'
        },
        {
            name: 'Squeezer',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/c/cb/S3_Weapon_Main_Squeezer.png'
        },
        {
            name: 'Tenta Brella',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/1/1e/S3_Weapon_Main_Tenta_Brella.png'
        },
        {
            name: 'Tentatek Splattershot',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/f/f1/S3_Weapon_Main_Tentatek_Splattershot.png'
        },
        {
            name: 'Tri-Slosher',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/d/dc/S3_Weapon_Main_Tri-Slosher.png'
        },
        {
            name: 'Tri-Stringer',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/4/49/S3_Weapon_Main_Tri-Stringer.png'
        },
        {
            name: 'Undercover Brella',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/5/5d/S3_Weapon_Main_Undercover_Brella.png'
        },
        {
            name: 'Zink Mini Splatling',
            url: 'https://cdn.wikimg.net/en/splatoonwiki/images/0/05/S3_Weapon_Main_Zink_Mini_Splatling.png'
        }
    ]
    const [currentWeapon, setCurrentWeapon] = useState(weapons[Math.floor(Math.random() * weapons.length)])
    function pickRandom(arr){
        setCurrentWeapon(weapons[Math.floor(Math.random() * arr.length)])
    }
    
    return(
        <div className='tab--weapon'>
            <div className='tab--weapon__info'>
                <h2>{currentWeapon.name}</h2>
                <img className='tab--weapon__img' src={currentWeapon.url}></img>
            </div>
            <button className='btn tab--btn' type="button" onClick={()=> pickRandom(weapons)}>Pick Weapon</button>
        </div>
    )
}

export default Weapons