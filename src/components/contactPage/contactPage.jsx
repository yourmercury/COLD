import React, {useRef} from 'react';
import "./contactPage.css";

const contactPage = ({display}) => {
    let page = useRef();

    return (
        <section className={`contactPage-container page`} ref={page}>
            <div className={`container ${display ? null : `dim`}`}>
                <div className="contactPage-content">
                    <div className="line"></div>
                    <h3 className="contact-title">CONTACT</h3>
                    <div className="contact-flex">
                        <div className="contact-address">
                            <div className="contact-email">
                                <span><i class="fa fa-envelope" aria-hidden="true"></i> <span id="email">service@mercury.com</span></span>
                            </div>
                            <div className="contact-social">
                                <a href="" ><i class="fa fa-instagram" aria-hidden="true"></i></a>  <a href="" ><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="" ><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form action="">
                                <div className="name-div">
                                    <label htmlFor="form-name" className="label-name form-label">Name</label>
                                    <input type="text" name="name" placeholder="Name" id="form-name" className="form-name form-input" />
                                </div>

                                <div className="email-div">
                                    <label htmlFor="form-email" className="label-email form-label">Email</label>
                                    <input type="email" name="email" placeholder="Email" id="form-email" className="form-email form-input" />
                                </div>

                                <div className="subject-div">
                                    <label htmlFor="form-subject" className="label-subject form-label">Subject</label>
                                    <input type="text" name="subject" placeholder="Subject" id="form-subject" className="form-subject form-input" />
                                </div>

                                <div className="message-div">
                                    <label htmlFor="form-message" className="label-Message form-label">Message</label>
                                    <textarea name="message" placeholder="Message" id="form-message" cols="30" rows="10" className="form-message form-input"></textarea>
                                </div>
                                <button type="submit" className="form-btn">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contactPage;