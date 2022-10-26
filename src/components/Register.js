import { Link } from "react-router-dom"

function Register () {
    return (
        <div className="popup popup_type_auth popup_opened">
            <div className={`popup__content popup__content_type_auth`}>
                <h1 className="popup__title popup__title_type_auth">Регистрация</h1>
                <form className="popup__form popup__form_type_auth">
                    <div className="popup__input-field">
                        <input className="popup__input popup__input_content_auth" id="registration-email" name="registration-email" type="email" value='Email' required placeholder="Email" />
                        <span className="popup__input-error" id="error-name"></span>
                    </div>
                    <div className="popup__input-field">
                        <input className="popup__input popup__input_content_auth" id="registration-password" name="registration-password" type="text" minLength='5' maxLength='15' value='Пароль' required placeholder="Пароль" />
                        <span className="popup__input-error" id="error-name"></span>
                    </div>
                    <button type="submit" className="popup__submit-button popup__submit-button_type_auth">Зарегистрироваться</button>
                </form>
                <Link to="sign-in" className="popup__form-caption">Уже зарегестрированы? Войти</Link>

            </div>
        </div>
    )
}

export default Register

// TODO

// разобраться с полями ошибок 

// убирать футер при окнах регистрации

