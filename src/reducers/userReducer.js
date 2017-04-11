
export default function userReducer(state={username:'username'}, action){
     switch(action.type){
       case 'FETCH_USER':
        return Object.assign({}, state, action.user);
       default:
        return state;
     }
}
