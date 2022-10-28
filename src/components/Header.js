import logo from '../images/header__logo.svg'
import { Route, Link } from 'react-router-dom'

function Header({email}) {
    return (
        <header className="header">
            <Link to="/" className="header__logo" style={{ backgroundImage: `url(${logo})` }}></Link>
            <Route exact path="/">
                <div className='header__wrapper'>
                    <p className='header__user'>{email}</p>
                    <button className='header__logout'>Выйти</button>
                </div>
            </Route>

            <Route path="/signup">
                <Link className="header__auth-link" to="signin">Войти</Link>
            </Route>

            <Route path="/signin">
                <Link className="header__auth-link" to="signup">Регистрация</Link>
            </Route>
            
        </header>
    )
}

export default Header

