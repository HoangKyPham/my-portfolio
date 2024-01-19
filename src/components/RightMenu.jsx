import React from 'react'
import Info from './Right-Menu/Info'

const RightMenu = () => {
    return (

        <div class="right-menu">

            <div class="contrast">
                <img src="./src/assets/icons/right-menu-contrast.svg" alt="" class="contrast-icon" />
            </div>

            <div class="menu-info">

                <Info />

            </div>


        </div>
    )
}

export default RightMenu