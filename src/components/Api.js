export default class Api {
    headers = {
        authorization: 'cfd7d09d-8be0-49c7-8c55-d653aeba72fa',
        'Content-Type': 'application/json'
}

  constructor({ Url }) {
    this.url = Url
}

_checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Ошибка: ${res.status}`)
}

getUserInfoApi () {
    return fetch (`${this.url}/users/me`, {
      headers: this.headers
  })
  .then(this._checkResponse)
}

setUserInfoApi({ name, about }) {
  return fetch(`${this.url}/users/me`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
      name,
      about
    })
  })
  .then(this._checkResponse)
}


getInitialCards () {
  return fetch (`${this.url}/cards`, {
      headers: this.headers
  })
  .then(this._checkResponse)
}

creatNewCard (data) {
  return fetch (`${this.url}/cards`, {
    headers: this.headers,
    method: 'POST',
    body: JSON.stringify({
      name: data.nameAdd,
      link: data.link
    })
  })
  .then(this._checkResponse)
}

deleteCard (id) {
  return fetch (`${this.url}/cards/${id}`, {
    headers: this.headers,
    method: 'DELETE'
  })
  .then(this._checkResponse)
}
like(id) {
  console.log(id)
  return fetch(`${this.url}/cards/likes/${id}`, {
    method: 'PUT',
    headers: this.headers
  })
  .then(this._checkResponse)
}

dislike(id) {
  return fetch(`${this.url}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: this.headers
  })
  .then(this._checkResponse)
}

handleUserAvatar(data) {
  
  return fetch(`${this.url}/users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
      avatar: data.linkAvatar,
    })
  })
  .then(this._checkResponse)
}
}