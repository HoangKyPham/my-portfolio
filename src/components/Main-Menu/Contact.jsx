import React from 'react'

const Contact = () => {
    return (
        <>

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
        </>
    )
}

export default Contact