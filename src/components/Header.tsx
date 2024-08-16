import { Link } from "react-router-dom"

function HeaderComponent() {
    return (
        <>
            <div className="header">
                <Link to="/" className="logo"> <img src="" alt="Logo" className="logo-size"/></Link>
                <div className="header-right">
                    <Link className="active" to="/cart"><img className="header-icon-size" src="images/cart.png" alt="cart" /></Link>
                    <Link to="/"><img className="header-icon-size" src="images/settings.png" alt="settings" /></Link>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;