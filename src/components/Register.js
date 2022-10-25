function Register () {
    return (
        <div className="popup popup_type_register popup_opened">
            <div className={`popup__content popup__content_type_register`}>
                <h1 className="popup__title popup__title_type_register">Регистрация</h1>
                <form className="popup__form popup__form_type_register">
                    <div className="popup__input-field">
                        <input className="popup__input popup__input_content_register" id="registration-email" name="registration-email" type="email" value='Email' required placeholder="Email" />
                        <span className="popup__input-error" id="error-name"></span>
                    </div>
                    <div className="popup__input-field">
                        <input className="popup__input popup__input_content_register" id="registration-password" name="registration-password" type="text" value='Пароль' required placeholder="Пароль" />
                        <span className="popup__input-error" id="error-name"></span>
                    </div>
                    <button type="submit" className="popup__submit-button popup__submit-button_active popup__submit-button_active popup__submit-button_type_register">Зарегистрироваться</button>
                </form>
                <p className="popup__form-caption">Уже зарегестрированы? Войти</p>

            </div>
        </div>
    )
}

export default Register

// TODO

//разобраться с классами сабмит кнопки

// разобраться с полями ошибок 

// кнопка должна быть белой

/*
<div className={`popup__content popup__content_type_register`}>
    <button type="button" className={`popup__close-button popup__close-button_type_register`} aria-label="close-popup"></button>
    <h2 className={`popup__title popup__title_type_register`}>h2</h2>
    <form className={`popup__form popup__form_type_register`} name="edit-profile" action="#" method="post" //noValidate >
        <button type="submit" className="popup__submit-button popup__submit-button_active">кнопка</button>
    </form>
</div>

*/

/* 
<form className={`popup__form popup__form_type_${props.name}`} onSubmit={props.onSubmit} name="edit-profile" action="#" method="post" //novalidate >
{props.children}
<button type="submit" className="popup__submit-button popup__submit-button_active">{props.button}</button>
</form>
*/