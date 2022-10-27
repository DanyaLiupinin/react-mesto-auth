import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import React from 'react';
import ImagePopup from './ImagePopup'
import api from '../utils/Api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import ProtectedRoute from './ProtectedRoute';
import * as mestoAuth from '../utils/mestoAuth';

function App() {

   // попапы

   const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
   const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
   const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
   const [selectedCard, setSelectedCard] = React.useState({})
   const [currentUser, setCurrentUser] = React.useState({})
   const [loggedIn, setLoggedIn] = React.useState(false) 
   

   function checkToken() {
      const token = localStorage.getItem('token')
      console.log(token)
   }

   // проверить написание jst
   // в mestoAuth сохраняю в локальное хранилище как jwt, дальше пишу как токен
   // проверка и сохранение токена при входе на сайт

   checkToken()


   React.useEffect(() => {
      api.getUserInfo()
         .then((data) => {
            setCurrentUser(data)
         })
         .catch((err) => {
            apiError(err)
         })
   }, [])

   // стейт карточек и обращение к api за начальным массивом 

   const [cards, setCards] = React.useState([])

   React.useEffect(() => {
      api.getInitialCards()
         .then(cards => {
            setCards(cards)
         })
         .catch((err) => {
            apiError(err)
         })

   }, [currentUser])

   function handleCardLike(card) {

      const isLiked = card.likes.some(like => like._id === currentUser._id)

      if (!isLiked) {

         // отправляем запрос на постановку лайка
         // далее в стэйт отправляем функцию колбэк
         // функция колбэк принимает старое значение (массив карточек) как параметр
         // пробегаем по старому массива и сравнвиаем id всех карточек с id карточки из запроса на лайк
         // если карточка не та, возвращаем её
         // если карточка та, создаём новую, уже с лайком

         api.putLike(card._id)
            .then((newCard) => {
               setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
               apiError(err)
            })
            
      } else {
         api.deleteLike(card._id)
            .then((newCard) => {
               setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
            })
            .catch((err) => {
               apiError(err)
            })
      }
   }

   function handleCardDelete(card) {

      api.deleteCard(card._id)
         .then(() => {
            setCards((state) => state.filter((element) => element._id !== card._id))
         })
         .catch((err) => {
            apiError(err)
         })
   }

   function handleEditAvatarClick() {
      setEditAvatarPopupOpen(true)
   }

   function handleEditProfileClick() {
      setEditProfilePopupOpen(true)
   }

   function handleAddPlaceClick() {
      setAddPlacePopupOpen(true)
   }

   function closeAllPopups() {
      setEditAvatarPopupOpen(false)
      setEditProfilePopupOpen(false)
      setAddPlacePopupOpen(false)
      setSelectedCard({})
   }

   function handleCardClick(card) {
      setSelectedCard(card)
   }

   function handleUpdateUser(data) {
      api.editUserInfo(data)
         .then((data) => {
            setCurrentUser(data)
         })
         .catch((err) => {
            apiError(err)
         })
   }

   function handleUpdateAvatar({ avatar }) {
      api.updateAvatar({ avatar })
         .then((data) => {
            setCurrentUser(data)
         })
         .catch((err) => {
            apiError(err)
         })
   }

   function handleAddPlaceSubmit (data) {
      api.addCard(data)
         .then((newCard) => {
            setCards([newCard, ...cards])
         })
         .catch((err) => {
            apiError(err)
         })
   }

   function apiError (err) {
      alert (`Ошибка. ${err}`)
   }

   function handleRegistration (password, email) {
      mestoAuth.register(password, email)
   }

   function handleAuthorization (password, email) {
      mestoAuth.authorization(password, email)
      setLoggedIn(true)
   }

   

   return (
      <>
      
         <div className="page__container">
            <CurrentUserContext.Provider value={currentUser}>
               <Header />
               <Switch>
                  <ProtectedRoute
                     exact path="/"
                     loggedIn={loggedIn}
                     component={Main}
                     onEditProfile={handleEditProfileClick}
                     onAddPlace={handleAddPlaceClick}
                     onEditAvatar={handleEditAvatarClick}
                     onCardClick={handleCardClick}
                     cards={cards}
                     onCardLike={handleCardLike}
                     onCardDelete={handleCardDelete}
                  />

                  


                  
                  <Route path='/signup'>
                     <Register 
                     onSubmit={handleRegistration}
                     />
                  </Route>
                  <Route path='/signin'>
                     <Login 
                     onSubmit={handleAuthorization}
                     />
                  </Route>
               </Switch>

               {loggedIn ? <Footer /> : ''}

               <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
               />

               <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
               />

               <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
               />

               <ImagePopup
                  card={selectedCard}
                  onClose={closeAllPopups}
               />
            </CurrentUserContext.Provider>
         </div>

      </>
   );
}

export default App;