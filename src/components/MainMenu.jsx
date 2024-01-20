import React from 'react'
import Banner from './Main-Menu/Banner'
import Services from './Main-Menu/Services'
import Price from './Main-Menu/Price'
import Recommend from './Main-Menu/Recommend'
import Educations from './Main-Menu/Educations'
import Portfolio from './Main-Menu/Portfolio'
import Contact from './Main-Menu/Contact'
import Logo from './Main-Menu/Logo'

const MainMenu = () => {
    return (
        <div class="container">

            <div class="main-menu">

                {/* <!-- Banner --> */}
                <div class="banner">
                  <Banner />
                </div>

                {/* <!-- Services --> */}

                <div class="services">
                    <Services />
                </div>

                {/* <!-- Price Plans --> */}

                <div class="price">
                    <Price />
                </div>

                {/* <!-- Recommendations --> */}
                <div class="recommend">
                    <Recommend />

                </div>

                {/* <!-- Education --> */}

                <div class="education">
                    <Educations />
                </div>

                {/* <!-- Portfolio --> */}
                <div class="portfolio">
                    <Portfolio />
                </div>

                {/* <!-- Contact --> */}
                <div class="contact">
                    <Contact />
                </div>

                {/* <!-- Map --> */}

                <div class="map">
                    <img src="./src/assets/img/Map.png" alt="" class="map__img" />
                </div>

                {/* <!-- Logo --> */}

                <div class="logo">
                    <Logo />
                </div>

                <footer>2021 All Rights Reserved.Ojjomedia</footer>


            </div>


        </div >

    )
}

export default MainMenu