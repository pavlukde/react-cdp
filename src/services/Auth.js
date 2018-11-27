
export const Auth = {
  
  isAuthenticated: false,
  userName: '',

  updateState: ()=>{console.log('Triggers component chain update. Should be redefined in App.js')},

  signout() {
    this.isAuthenticated = false;
    this.userName = '';
    this.updateState();
  },

  authenticate(userName, password) {
    if(this.passwordValid(userName, password)){
      this.isAuthenticated = true;
      this.userName = userName;
      this.updateState();
      return true;
    }
    return false;
  },

  passwordValid(userName, password){
    if(userName.length>0 && password.length>0)return true;
    return false;
  }

}