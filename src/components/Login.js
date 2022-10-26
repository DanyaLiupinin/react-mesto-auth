function Login () {
    return (
        <div className="account">
            
                <h1 className="account__title">Вход</h1>
                <form className="account__form">
                    <div className="account__input-field">
                        <input className="account__input" id="auth-email" name="auth-email" type="email" value='Email' required placeholder="Email" />
                        <span className="account__input-error" id="error-name"></span>
                    </div>
                    <div className="account__input-field">
                        <input className="account__input" id="auth-password" name="auth-password" type="text" minLength='5' maxLength='15' value='Пароль' required placeholder="Пароль" />
                        <span className="account__input-error" id="error-name"></span>
                    </div>
                    <button type="submit" className="account__submit-button account__submit-button_active">Войти</button>
                </form>
            
        </div>
    )
}

export default Login