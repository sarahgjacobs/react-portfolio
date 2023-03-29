import React from 'react';

function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <p>Have a question or comment? Contact Sarah here:</p>
            <br />
            <a href="mailto:sgjacobs14@gmail.com">Send Sarah an Email</a>
            <br />
            <a href="https://github.com/sarahgjacobs">Checkout Sarah's GitHub</a>
            <br />
            <a href="https://www.linkedin.com/in/sarahgjacobs/">Checkout Sarah's LinkedIn</a>
            <form id="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    )
}
export default Contact;