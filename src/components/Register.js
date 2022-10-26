import { Link } from "react-router-dom"

function Register () {
    return (
        <div className="account">
            <h1 className="popup__title popup__title_type_auth account__title">Регистрация</h1>
                <form className="account__form">
                    <div className="account__input-field">
                        <input className="account__input" id="registration-email" name="registration-email" type="email" value='Email' required placeholder="Email" />
                        <span className="account__input-error" id="error-name"></span>
                    </div>
                    <div className="account__input-field">
                        <input className="account__input" id="registration-password" name="registration-password" type="text" minLength='5' maxLength='15' value='Пароль' required placeholder="Пароль" />
                        <span className="account__input-error" id="error-name"></span>
                    </div>
                    <button type="submit" className="account__submit-button account__submit-button_active">Зарегистрироваться</button>
                </form>
                <Link to="sign-in" className="account__form-caption">Уже зарегестрированы? Войти</Link>

            
        </div>
    )
}

export default Register

// TODO

// разобраться с полями ошибок 

// убирать футер при окнах регистрации

