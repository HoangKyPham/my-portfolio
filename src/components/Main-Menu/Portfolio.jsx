import React from 'react'

const Portfolio = () => {
    return (
        <>
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
        </>

    )
}

export default Portfolio