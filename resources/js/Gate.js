export default class Gate {

    constructor(user) {
        this.user = user;
    }

    userId() {
        if(this.user !== undefined) {
            return this.user.id;
        } 
        return null;
    }

    userName() {
        if(this.user !== undefined) {
            return this.user.name;
        } 
        return null;
    }

    isAdmin() {
        if(this.user !== undefined) {
            return this.user.type === 'admin';
        } 
        return null;
    }

    isUser() {
        return this.user.type === 'user';
    }
}