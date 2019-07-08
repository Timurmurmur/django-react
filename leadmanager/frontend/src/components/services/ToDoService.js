export default class ToDoService {
    constructor(){
        this._apiBase = 'http://localhost:8000/'
    }
    addToDoCard = (name) =>{
        return (`returned ${name}`);
    }
    getResource = async (url) =>{
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
      
        return res.json();
    }

    getAllToDo = async () => {
        const res = await this.getResource('api/leads/');
        return res;
    }
}