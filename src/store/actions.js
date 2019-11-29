import { FETCH_ITEM_LIST } from "./mutations-types";

export default {
    fetchItemList({ commit }){
        console.log(this.$serverUrl+'/item/list');
        return this._vm.$http.get(this._vm.$serverUrl+'/item/list')
        .then(res=>{
            console.log("store : ", res.data);
            // this.items = res.data;
            commit(FETCH_ITEM_LIST, res.data);
        })
    }
}