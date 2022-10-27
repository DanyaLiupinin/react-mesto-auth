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
    try {
      if (response.status === 200){
        return response.json();
      }
    } catch(e){
      return (e)
    }
  })
  .then((res) => {
     return res;
  })
  .catch((err) => console.log(err));
}; 


export const authorization = (password, email) => {
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
  .then((response) => {
    return response.json()
  })
  .then((res) => {
    if (res.jwt){
      localStorage.setItem('jwt', res.jwt);
      return res;
    }
  })
  .catch((err) => console.log(err));
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

