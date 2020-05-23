import React from 'react';
const productos = require ('./productos.json'); 

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <header className="header">
                        <img className="logo" src="Fotos/FullColor_TransparentBg_1280x1024_72dpi.png" alt="logo" /><a href=""></a>
                        <ul className="nav">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </header>
                    <h1 className="JDM">Japanese Imports</h1>
                    <div className="parent">
                        {productos.productos.map((item, key) => {
                            return (
                                <article className="child">
                                    <img src={item.image}/>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                </article>
                            )})}
                        }
                    </div>
            </React.Fragment>
        )
    }
}

export default Products;