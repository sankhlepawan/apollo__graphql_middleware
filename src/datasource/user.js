import { RESTDataSource } from 'apollo-datasource-rest';

export default class UserAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = "http://localhost:9090/api/"
    }

    async getAllUser() {
       const users = await this.get("user/",null, this.context.customHeaders);
        Array.isArray(users) ? 
        users.map( user => this.userReducer(user)) : [];
        
    }

    async userById({ userId }) {
        const user = await this.get(`user/getuserbyid/${userId}`, null, this.context.customHeaders);
        return this.userReducer(user);
    }
    

    userReducer(user) {
        return {
            id: user.userId || 0,
            name : user.userDetails.firstName
        }
    }
}
