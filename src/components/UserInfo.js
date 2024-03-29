export default class UserInfo {
    constructor ({nameSelector, jobSelector, avatarSelector}) {
        this._nameElement = document.querySelector(`.${nameSelector}`);
        this._jobElement = document.querySelector(`.${jobSelector}`);
        this._avatarElement = document.querySelector(`.${avatarSelector}`);
        
    }
    
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
          }
    }

    setUserInfo({ name, job }) {
        if (name) this._nameElement.textContent = name;
        if (job) this._jobElement.textContent = job;
    }
    setUserAvatar(data) {
        this._avatarElement.src = data.avatar;
      }
}
