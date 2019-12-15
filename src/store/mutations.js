import { FETCH_ITEM_LIST } from './mutations-types'

export default{
    [FETCH_ITEM_LIST] (state, items) {
        state.items = items
    },
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, payload){
        state.status = 'success';
        state.token = payload.token;
        state.userId = payload.userId;
    },
    auth_error(state){
        state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = '';
      state.userId = ''
    },
    history(state, payload){
        state.from = payload.from;
        state.name = payload.name;
        state.params = payload.params;
    }
}