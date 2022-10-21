import { EMAIL, PHONE } from "../../Constants";
import CartIcon from "../../assets/images/icons/cart.svg";

import "./header.scss";

export default function Header() {
  return (
    <header>
      <div>
        <span className="email">{EMAIL}</span>
        <span className="phone">{PHONE}</span>
      </div>
      <nav>
        <div className="select">
          <select id="currency" className="currencies">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="euro">EURO</option>
          </select>
        </div>
        <span className="login">Login</span>
        <span className="whishlist">Wishlist</span>
        <button><img src={CartIcon} alt="cart" className="cart small-icon" /></button>
      </nav>
    </header>
  )
}
