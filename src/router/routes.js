import CategoryList from '../components/category/CategoryList.vue'
import ItemList from '../components/item/ItemList.vue'
import ItemAdd from '../components/item/ItemAdd.vue'
import ItemModify from '../components/item/ItemModify.vue'
import Entry from '../components/user/Entry'
import ItemDetail from '../components/item/ItemDetail.vue'
import ResetPassword from '../components/user/ResetPassword.vue'
import Login from '../components/user/Login.vue'
import SearchId from '../components/follow/SearchId.vue'
import SearchPhone from '../components/follow/SearchPhone.vue'
import FollowList from '../components/follow/FollowList.vue'

// 웹소캣 연습용 컴포턴트 (나중에 삭제하기)
import Temp from '../components/Temp.vue'


export default [
    { path:'/category/list', component:CategoryList },
    { path:'/item/list', component:ItemList},
    { path:'/item/add', component:ItemAdd},
    { path:'/item/modify',component:ItemModify},
    { path:'/user/entry',component:Entry},
    { path:'/temp',component:Temp}, //삭제
    { path:'/item/detail', component:ItemDetail}, //배포시 삭제
    { path:'/item/detail/:itemId',component:ItemDetail},
    { path:'/item/modify/:itemId',component:ItemModify},
    { path:'/user/register', component: ResetPassword},
    { path:'/user/login', component: Login},
    { path:'/follow/follow', component: FollowList},
    { path:'/follow/searchId', component: SearchId},
    { path:'/follow/searchPhone', component: SearchPhone}
]
