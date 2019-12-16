import { FETCH_ITEM_LIST } from "./mutations-types";
import axios from 'axios';

export default {
    fetchItemList({ commit }){
        console.log(this.$serverUrl+'/item/list');
        return axios.get(this._vm.$serverUrl+'/item/list')
        .then(res=>{
            console.log("store : ", res.data);
            // this.items = res.data;
            commit(FETCH_ITEM_LIST, res.data);
        })
    },
    checkLogin({commit}){
        return new Promise((resolve, reject)=>{
            const token = localStorage.getItem('wishToken');
            commit('auth_request');
            axios.get(this._vm.$serverUrl+'/users/check', {
                headers: {authorization: token}
            })
            .then(res=>{
                if(res.data.code=="200"){ //서버에서 유효한 사용자라고 판단이 났다면,
                    const payload = {
                        token,
                        userId: res.data.userId,
                    };
                    commit('auth_success', payload);
                    resolve(res)
                }else{
                    console.log(res.data.message);
                    commit('auth_error');
                    // localStorage.removeItem('wishToken');
                    
                }
            })
            .catch(err=>{
                commit('auth_error');
                localStorage.removeItem('wishToken');
                reject(err);
            })
        })
        
    },
    loading({commit}){
        commit('auth_request')
    },
    success({commit}, payload){
        commit('auth_success', payload)
    },
    error({commit}){
        commit('auth_error')
    },
    logout({commit}){
        commit('logout');
    },
    history({commit}, payload){
        commit('history', payload);
    },
    footerClass({commit}, payload){
        commit('footerClass', payload)
    },
    receiveSid({commit}, sid){
        commit('receiveSid', sid);
    },
    updateNoti({commit}, noti){
        commit('updateNoti', noti);
    }
}