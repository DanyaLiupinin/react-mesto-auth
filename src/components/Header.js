import logo from '../images/header__logo.svg'
import { Route, Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo" style={{ backgroundImage: `url(${logo})` }}></Link>
            <Route exact path="/">
                <div className='header__wrapper'>
                    <p className='header__user'>email@email.com</p>
                    <button className='header__logout'>Выйти</button>
                </div>
            </Route>

            <Route path="/sign-up">
                <Link className="header__auth-link" to="sign-in">Войти</Link>
            </Route>

            <Route path="/sign-in">
                <Link className="header__auth-link" to="sign-up">Регистрация</Link>
            </Route>
            
        </header>
    )
}

export default Header

