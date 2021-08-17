export default class UserInfo {
    constructor ({nameSelector, jobSelector}) {
        this._nameElement = nameSelector
        this._jobElement = jobSelector;
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
