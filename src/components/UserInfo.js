export default class UserInfo {
    constructor ({name, job}) {
        this._nameElement = name;
        this._jobElement = job;
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
}
