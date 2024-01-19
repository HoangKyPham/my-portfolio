import React from 'react'
import General from './Left-Menu/General'
import About from './Left-Menu/About'
import Languages from './Left-Menu/Languages'
import Skills from './Left-Menu/Skills'
import Extra from './Left-Menu/Extra'

const LeftMenu = () => {
    return (
        <div class="left-menu">

            {/* <!-- General --> */}
            <div class="general">
                <General />
            </div>

            <div class="sperate"></div>

            {/* <!-- About --> */}

            <div class="about">
                <About />
            </div>

            <div class="sperate"></div>

            {/* <!-- Languages --> */}

            <div class="languages">
               <Languages />
            </div>

            <div class="sperate"></div>

            {/* <!-- Skills --> */}

            <div class="skills">
               <Skills />
            </div>

            <div class="sperate"></div>

            {/* <!-- Extra Skills --> */}

            <div class="extra">
                <span class="extra-title">Extra Skills</span>

                <Extra />

            </div>

            <div class="sperate"></div>

            <div class="btn btn-menu-cv">
                <a href="#!" class="btn-title">Download cv</a>
                <img src="./src/assets/icons/left-menu-btn.svg" alt="" class="btn-icon" />
            </div>

        </div>
    )
}

export default LeftMenu