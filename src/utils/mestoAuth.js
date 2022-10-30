export const BASE_URL = 'https://auth.nomoreparties.co';


export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((response) => {
      return checkRes(response)
    })
};


export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": password,
      "email": email
    })
  })
    .then((res) => {
      return checkRes(res)
    })
}


export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => {
      return res.json()
    })
}

function checkRes(res) {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}


