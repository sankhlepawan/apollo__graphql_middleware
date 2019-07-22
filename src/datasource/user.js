import { RESTDataSource } from 'apollo-datasource-rest';

export default class UserAPI extends RESTDataSource {
    
    constructor(){
        super();
        this.baseUrl = "http://localhost:8080/api"
    }

    async getAllUser() {
       const users = await this.get("users",null, this.context.customHeaders);
        Array.isArray(users) ? 
        users.map( user => this.userReducer(user)) : [];
    }

    async userById({ userId }) {
        const user = await this.get("userById", {userId : userId});
        return this.userReducer(user);
    }

    userReducer(user) {
        return {
            id: user.id || 0,
            name : user.name
        }
    }
}
