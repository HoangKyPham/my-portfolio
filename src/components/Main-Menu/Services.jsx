import React from 'react'

const Services = () => {
    return (
        <>
            <div class="services-header">
                <h2 class="services-header__heading">My services</h2>
                <p class="services-header__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>

            <div class="services-list">
                <div class="services-item">
                    <img src="./src/assets/icons/services-web.svg" alt="" class="services-item__icon" />
                    <span class="services-item__heading">web development</span>
                    <span class="services-item__title">blog, e-commerce</span>
                </div>

                <div class="services-item">
                    <img src="./src/assets/icons/services-uiux.svg" alt="" class="services-item__icon" />
                    <span class="services-item__heading">UI/UX design</span>
                    <span class="services-item__title">Mobile app, website design</span>
                </div>

                <div class="services-item">
                    <img src="./src/assets/icons/services-sound.svg" alt="" class="services-item__icon" />
                    <span class="services-item__heading">Sound design</span>
                    <span class="services-item__title">Voice Over, Beat Making</span>
                </div>

                <div class="services-item">
                    <img src="./src/assets/icons/services-game.svg" alt="" class="services-item__icon" />
                    <span class="services-item__heading">Game design</span>
                    <span class="services-item__title">Character Design, Props & Objects</span>
                </div>

                <div class="services-item">
                    <img src="./src/assets/icons/services-sound.svg" alt="" class="services-item__icon" />
                    <span class="services-item__heading">Photography</span>
                    <span class="services-item__title">Portrait, product photography</span>
                </div>

                <div class="services-item">
                    <span class="services-item__heading">Advertising</span>
                    <span class="services-item__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vitae nulla diam in ac dictum a urna viverra morbi. </span>
                    <div class="services-item__oder">
                        <a href="#!" class="services-item__oder-btn">ORDER NOW</a>
                        <img src="./src/assets/icons/services-btn-arrow.svg" alt="" class="services-item__oder-icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services