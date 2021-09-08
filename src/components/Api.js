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
    return fetch (this.url, {
      headers: this.headers
  })
  .then(this._checkResponse)
}

setUserInfoApi({ name, about }) {
  return fetch(this.url, {
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
  return fetch (this.url, {
      headers: this.headers
  })
  .then(this._checkResponse)
}

creatNewCard (data) {
  console.log(data)
  return fetch (this.url, {
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
  return fetch (`${this.url}/${id}`, {
    headers: this.headers,
    method: 'DELETE'
  })
  .then(this._checkResponse)
}
like(id) {
  return fetch(`${this.url}/likes/${id}`, {
    method: 'PUT',
    headers: this.headers
  })
  .then(this._checkResponse)
}

dislike(id) {
  return fetch(`${this.url}/likes/${id}`, {
    method: 'DELETE',
    headers: this.headers
  })
  .then(this._checkResponse)
}

handleUserAvatar(data) {
  console.log(data)
  return fetch(`${this.url}/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
      avatar: data.link,
    })
  })
  .then(this._checkResponse)
}
}