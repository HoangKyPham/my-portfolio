import React from 'react'

const MainMenu = () => {
    return (
        <div class="container">

            <div class="main-menu">

                {/* <!-- Banner --> */}
                <div class="banner">
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
                </div>

                {/* <!-- Services --> */}

                <div class="services">
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


                </div>

                {/* <!-- Price Plans --> */}

                <div class="price">
                    <div class="price__header">
                        <h2 class="price__header-heading">My services</h2>
                        <p class="price__header-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                    </div>

                    <div class="price__plans-list">

                        <div class="plans-item">
                            <div class="plans-item__header">
                                <h3 class="plans-item__header-title">silver</h3>
                                <div class="plans-item__header-price">
                                    <span class="plans-item__header-price-left">$0.00</span>
                                    <p class="plans-item__header-price-right">/hour</p>
                                </div>
                                <p class="plans-item__header-desc">For most businesses that want to
                                    optimize web queries</p>
                            </div>

                            <div class="plans-item__main">

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-check.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">UI Design</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-check.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">web development</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">logo design</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">seo optimization</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">5 Websites</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">unlimited user</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">20 gB bandwith</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">web development</p>
                                </div>

                                <button class="main-item__btn">ORDER NOW</button>

                            </div>
                        </div>

                        <div class="plans-item">
                            <div class="plans-item__header">
                                <h3 class="plans-item__header-title">silver</h3>
                                <div class="plans-item__header-price">
                                    <span class="plans-item__header-price-left">$0.00</span>
                                    <p class="plans-item__header-price-right">/hour</p>
                                </div>
                                <p class="plans-item__header-desc">For most businesses that want to
                                    optimize web queries</p>
                            </div>

                            <div class="plans-item__main">

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-check.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">UI Design</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-check.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">web development</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">logo design</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">seo optimization</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">5 Websites</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">unlimited user</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">20 gB bandwith</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">web development</p>
                                </div>

                                <button class="main-item__btn">ORDER NOW</button>

                            </div>
                        </div>

                        <div class="plans-item">
                            <div class="plans-item__header">
                                <h3 class="plans-item__header-title">silver</h3>
                                <div class="plans-item__header-price">
                                    <span class="plans-item__header-price-left">$0.00</span>
                                    <p class="plans-item__header-price-right">/hour</p>
                                </div>
                                <p class="plans-item__header-desc">For most businesses that want to
                                    optimize web queries</p>
                            </div>

                            <div class="plans-item__main">

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-check.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">UI Design</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-check.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">web development</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">logo design</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">seo optimization</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">5 Websites</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">unlimited user</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">20 gB bandwith</p>
                                </div>

                                <div class="main-item__benefits">
                                    <img src="./src/assets/icons/price-plans-close.svg" alt="" class="" />
                                    <p class="main-item__benefits-name">web development</p>
                                </div>

                                <button class="main-item__btn">ORDER NOW</button>

                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Recommendations --> */}
                <div class="recommend">

                    <div class="recommend__header">
                        <h2 class="recommend__header-heading">recommendations</h2>
                        <p class="recommend__header-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                    </div>

                    <div class="recommend__list">
                        {/* <!-- 1 --> */}
                        <div class="recommend-item">
                            <div class="recommend-item__top">
                                <div class="recommend-item__top-star">
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                </div>

                                <span class="recommend-item__top-title">Great Quality!</span>
                                <p class="recommend-item__top-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                            </div>
                            <div class="recommend-item__bottom">
                                <img src="./src/assets/img/avatar-8.jpg" alt="" srcset="" class="recommend-item__botom-avatar" />

                                <div class="recommend-item__bottom-info">
                                    <span class="recommend-item__bottom-info-name">James Gouse</span>
                                    <span class="recommend-item__bottom-info-position">Graphic Designer</span>
                                </div>


                            </div>
                        </div>

                        {/* <!-- 2 --> */}
                        <div class="recommend-item">
                            <div class="recommend-item__top">
                                <div class="recommend-item__top-star">
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                </div>

                                <span class="recommend-item__top-title">Great Quality!</span>
                                <p class="recommend-item__top-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                            </div>
                            <div class="recommend-item__bottom">
                                <img src="./src/assets/img/avatar-8.jpg" alt="" srcset="" class="recommend-item__botom-avatar" />

                                <div class="recommend-item__bottom-info">
                                    <span class="recommend-item__bottom-info-name">James Gouse</span>
                                    <span class="recommend-item__bottom-info-position">Graphic Designer</span>
                                </div>


                            </div>
                        </div>

                        {/* <!-- 3 --> */}
                        <div class="recommend-item">
                            <div class="recommend-item__top">
                                <div class="recommend-item__top-star">
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                    <img src="./src/assets/icons/recommend-star.svg" alt="" class="recommend-item__top-star-icon" />
                                </div>

                                <span class="recommend-item__top-title">Great Quality!</span>
                                <p class="recommend-item__top-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                            </div>
                            <div class="recommend-item__bottom">
                                <img src="./src/assets/img/avatar-8.jpg" alt="" srcset="" class="recommend-item__botom-avatar" />

                                <div class="recommend-item__bottom-info">
                                    <span class="recommend-item__bottom-info-name">James Gouse</span>
                                    <span class="recommend-item__bottom-info-position">Graphic Designer</span>
                                </div>


                            </div>
                        </div>


                    </div>

                </div>

                {/* <!-- Education --> */}

                <div class="education">
                    <div class="education__header">
                        <h2 class="education__header-heading">recommendations</h2>
                        <p class="education__header-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                    </div>

                    <div class="education__list">
                        <div class="education-item">
                            <div class="education-item__university">
                                <span class="education-item__university-name">University of Toronto</span>
                                <div class="education-item__university-desc">
                                    <span class="education-item__university-desc-position">Student</span>
                                    <span class="education-item__university-desc-time">Jan 1016 - Dec 2021</span>
                                </div>
                            </div>
                            <div class="education-item__detail">
                                <span class="education-item__detail-name">Certificate of web training</span>
                                <p class="education-item__detail-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque
                                    sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                                    Molestie risus enim neque eget dui.</p>
                            </div>

                        </div>

                        <div class="sperate education__sperate"></div>
                        <div class="education-item">
                            <div class="education-item__university">
                                <span class="education-item__university-name">University of Toronto</span>
                                <div class="education-item__university-desc">
                                    <span class="education-item__university-desc-position">Student</span>
                                    <span class="education-item__university-desc-time">Jan 1016 - Dec 2021</span>
                                </div>
                            </div>
                            <div class="education-item__detail">
                                <span class="education-item__detail-name">Certificate of web training</span>
                                <p class="education-item__detail-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque
                                    sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                                    Molestie risus enim neque eget dui.</p>
                            </div>

                        </div>

                        <div class="sperate education__sperate"></div>
                        <div class="education-item">
                            <div class="education-item__university">
                                <span class="education-item__university-name">University of Toronto</span>
                                <div class="education-item__university-desc">
                                    <span class="education-item__university-desc-position">Student</span>
                                    <span class="education-item__university-desc-time">Jan 1016 - Dec 2021</span>
                                </div>
                            </div>
                            <div class="education-item__detail">
                                <span class="education-item__detail-name">Certificate of web training</span>
                                <p class="education-item__detail-desc">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque
                                    sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque.
                                    Molestie risus enim neque eget dui.</p>
                            </div>

                        </div>

                        <div class="sperate education__sperate"></div>

                    </div>
                </div>

                {/* <!-- Portfolio --> */}
                <div class="portfolio">

                    <div class="portfolio__header">
                        <h2 class="portfolio__header-heading">Portfolio</h2>
                        <p class="portfolio__header-desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                        <div class="portfolio__header-cate">
                            <a href="#!" class="portfolio__header-cate-link">All categories</a>
                            <a href="#!" class="portfolio__header-cate-link">UI Design</a>
                            <a href="#!" class="portfolio__header-cate-link">Web Templates</a>
                            <a href="#!" class="portfolio__header-cate-link">Logo</a>
                            <a href="#!" class="portfolio__header-cate-link">Branding</a>
                        </div>
                    </div>

                    <div class="portfolio__main">
                        <div class="portfolio-list">

                            <div class="portfolio-list__item">
                                <img src="./src/assets/img/portfolio (1).jpg" alt="" class="portfolio-list__item-img" />
                            </div>

                            <div class="portfolio-list__item">
                                <img src="./src/assets/img/portfolio (2).jpg" alt="" class="portfolio-list__item-img" />
                            </div>

                            <div class="portfolio-list__item">
                                <img src="./src/assets/img/portfolio (3).jpg" alt="" class="portfolio-list__item-img" />
                            </div>

                            <div class="portfolio-list__item">
                                <img src="./src/assets/img/portfolio (4).jpg" alt="" class="portfolio-list__item-img" />
                            </div>

                            <div class="portfolio-list__item">
                                <img src="./src/assets/img/portfolio (5).jpg" alt="" class="portfolio-list__item-img" />
                            </div>

                            <div class="portfolio-list__item">
                                <img src="./src/assets/img/portfolio (6).jpg" alt="" class="portfolio-list__item-img" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Contact --> */}
                <div class="contact">

                    <div class="contact__left">
                        <h2 class="contact__left-heading">Leave us your info</h2>
                        <form action="" method="post" class="contact-form">

                            <label for="input-name" class="contact-form__title">Your Full Name ( Required)</label>
                            <input type="text" id="input-name" class="contact-form__input" />
                            <label for="input-email" class="contact-form__title">Your Email ( Required)</label>
                            <input type="email" id="input-email" class="contact-form__input" />
                            <label for="input-subject" class="contact-form__title">Subject</label>
                            <input type="subject" id="input-subject" class="contact-form__input" />
                            <label for="input-mess" class="contact-form__title">Your Message</label>
                            <input type="text" id="input-mess" class="contact-form__input" />

                            <button type="submit" class="contact-form__btn">send message</button>

                        </form>
                    </div>

                    <div class="contact__right">
                        <h2 class="contact__right-heading">Contact information</h2>
                        <div class="contact__right-list">

                            <div class="contact-item">
                                <div class="contact-item__icon">
                                    <img src="./src/assets/icons/contact-location.svg" alt="" class="" />
                                </div>
                                <div class="contact-item__info">
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Country:</span>
                                        <span class="contact-item__info-detail-info">Bangladesh</span>
                                    </div>
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">City:</span>
                                        <span class="contact-item__info-detail-info">Dhaka</span>
                                    </div>
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Streat:</span>
                                        <span class="contact-item__info-detail-info">35 vhatara, Badda</span>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-item__icon">
                                    <img src="./src/assets/icons/contact-mail.svg" alt="" class="" />
                                </div>
                                <div class="contact-item__info">
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Email:</span>
                                        <span class="contact-item__info-detail-info">youremail@gmail.com</span>
                                    </div>
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Skype:</span>
                                        <span class="contact-item__info-detail-info">@yourusername</span>
                                    </div>
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Telegram:</span>
                                        <span class="contact-item__info-detail-info">@yourusername</span>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-item">
                                <div class="contact-item__icon">
                                    <img src="./src/assets/icons/contact-phone.svg" alt="" class="" />
                                </div>
                                <div class="contact-item__info">
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Support services:</span>
                                        <span class="contact-item__info-detail-info">15369</span>
                                    </div>
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Office:</span>
                                        <span class="contact-item__info-detail-info">+58 (021)356 587 235</span>
                                    </div>
                                    <div class="contact-item__info-detail">
                                        <span class="contact-item__info-detail-name">Personal:</span>
                                        <span class="contact-item__info-detail-info">+58 (021)356 587 235</span>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

                {/* <!-- Map --> */}

                <div class="map">
                    <img src="./src/assets/img/Map.png" alt="" class="map__img" />
                </div>

                {/* <!-- Logo --> */}

                <div class="logo">
                    <img src="./src/assets/img/Frame.png" alt="" class="logo__img" />
                    <img src="./src/assets/img/Frame (1).png" alt="" class="logo__img" />
                    <img src="./src/assets/img/Frame (2).png" alt="" class="logo__img" />
                    <img src="./src/assets/img/Frame (3).png" alt="" class="logo__img" />
                </div>

                <footer>2021 All Rights Reserved.Ojjomedia</footer>


            </div>


        </div >

    )
}

export default MainMenu