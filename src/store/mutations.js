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
    },
    footerClass(state, payload){
        state.tab1 = false;
        state.tab2 = false;
        state.tab3 = false;
        state.tab4 = false;
        state.tab5 = false;
        switch(payload){
            case 1: state.tab1 = true; break;
            case 2: state.tab2 = true; break;
            case 3: state.tab3 = true; break;
            case 4: state.tab4 = true; break;
            case 5: state.tab5 = true; break;
        }
    },
    receiveSid(state, sid){
        state.sid = sid;
    },
    updateNoti(state, noti){
        noti.id = state.num;
        state.notis = [
            noti,
            ...state.notis
        ];
        
        console.log('asdfasdf', state.notis)
        state.num = state.num+1;
    }
}