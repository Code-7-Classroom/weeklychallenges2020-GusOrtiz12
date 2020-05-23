import React from 'react';
import '../index.css'

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <img className="logo" src="StandardPack/FullColor_TransparentBg_1280x1024_72dpi.png" alt="logo" /><a href=""></a>
                    <ul className="nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </header>

                <img className="skyline" src="StandardPack/r322.jpg" alt="skyline" />
                <img className="hidden" src="StandardPack/index.jpg" alt="hidden" />
                <div className="showcase container">
                    <h2 className="text-primary">Contact Us</h2>
                </div>
                <form className="container">

                    <div className="forminput">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required/>
                    </div>
                        <div className="forminput">
                            <label for="phone">Phone</label>
                            <input type="text" id="phone" name="phone" required/>
                        </div>

                            <div className="forminput">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" required/>
                            </div>

                                <div className="forminput">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message"></textarea>
                                </div>

                                <button type="submit" className="btn"> Submit </button>
                </form>
                        <footer className="footer1">
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
                            <ul className="ul-2">
                                <li><a className="facebook"><i className="fa fa-fw fa-2x fa-inverse fa-facebook"></i></a></li>
                                <li><a className="twitter"><i className="fa fa-fw fa-2x fa-inverse fa-twitter"></i></a></li>
                                <li><a className="instagram"><i className="fa fa-fw fa-2x fa-inverse fa-instagram"></i></a></li>
                            </ul>
                            <a className="a" href="#" id="footer">
                                <h3> JDM</h3>
                            </a>
                            <h3> &copy;2020 | Gustavo A. Ortiz</h3>
                        </footer>
            </React.Fragment>
        )
    }
}

export default Contact;