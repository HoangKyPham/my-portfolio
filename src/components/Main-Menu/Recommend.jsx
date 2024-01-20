import React from 'react'

const Recommend = () => {
    return (
        <>
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
        </>
    )
}

export default Recommend