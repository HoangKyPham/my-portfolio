import React from 'react'

const Banner = () => {
    return (
        <>
            <div class="banner-left">
                <h1 class="banner-left__heading">I’m Rayan Adlrdard
                    Front-end Developer </h1>
                <p class="banner-left__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
                    feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>

                <div class="banner-left__cta">
                    <a href="#!" class="banner-left__btn">HIRE ME</a>
                    <span class="banner-left__btn-icon" >
                        <img src="./src/assets/icons/banner-btn.svg" alt="" />
                    </span>
                </div>
            </div>
            <div class="banner-right">
                <img src="./src/assets/img/Your Image 1.png" alt="" class="banner-right__img" />
            </div>
        </>
    )
}

export default Banner