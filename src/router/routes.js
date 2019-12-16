import CategoryList from '../components/category/CategoryList.vue'
import ItemList from '../components/item/ItemList.vue'
import ItemAdd from '../components/item/ItemAdd.vue'
import ItemModify from '../components/item/ItemModify.vue'
import Entry from '../components/user/Entry'
import ItemDetail from '../components/item/ItemDetail.vue'
import ResetPassword from '../components/user/ResetPassword.vue'
import Login from '../components/user/Login.vue'
import FollowList from '../components/follow/FollowList.vue'
import NotiList from '../components/notification/NotiList.vue'
import Settings from '../components/settings/Settings.vue'
import Auth from '../components/user/Auth.vue'
import ProfileDetail from '../components/profile/ProfileDetail.vue'
import ProfileModify from '../components/profile/ProfileModify.vue'
import Temp from '../components/Temp.vue'
import TempRegister from '../components/TempRegister.vue'; //개발용 회원가입
import PageNotFound from '../PageNotFound.vue'


export default [
    { path:'/test', component: TempRegister }, //개발을 위한 임시 회원가입 루트 : /test
    { path:'/category/list', component:CategoryList, meta: { requiresAuth: true } },
    { path:'/item/list', component:ItemList, meta: { requiresAuth: true }},
    { path:'/item/list/:userId', component:ItemList, name:'itemList', meta: { requiresAuth: true }}, //userId라는 변수에 아이디값 넣어주면 해당 아이디의 아이템리스트 이동가능
    { path:'/item/add', component:ItemAdd, meta: { requiresAuth: true }},
    { path:'/item/modify',component:ItemModify, meta: { requiresAuth: true }},
    { path:'/item/modify/:itemId',component:ItemModify, meta: { requiresAuth: true }},
    { path:'/user/entry',component:Entry},
    { path:'/temp',component:Temp}, //삭제
    { path:'/item/detail', component:ItemDetail, meta: { requiresAuth: true }}, //배포시 삭제
    { path:'/item/detail/:itemId',component:ItemDetail, meta: { requiresAuth: true }},
    { path:'/item/modify/:itemId',component:ItemModify, meta: { requiresAuth: true }},
    { path:'/user/resetpwd', component: ResetPassword},
    { path:'/', component: Login},
    // { path:'/user/profile', component: Profile},
    { path:'/follow/follow', component: FollowList, meta: { requiresAuth: true }},
    { path:'/user/login', component: Login},
    // { path:'/user/profile/:userId', component: Profile},
    { path:'/follow/list', component: FollowList, meta: { requiresAuth: true }},
    { path:'/follow/list/:userId', component: FollowList, name:'followList', meta: { requiresAuth: true }},
    { path:'/profile/detail/', component: ProfileDetail, meta: { requiresAuth: true }},
    { path:'/profile/detail/:id', component: ProfileDetail, meta: { requiresAuth: true }},
    { path:'/profile/modify/:userId', component: ProfileModify, name:'profileModify', meta: { requiresAuth: true }},
    { path:'/noti/:userId', component: NotiList, name:'notiList', meta: { requiresAuth: true }},
    { path:'/settings/:userId', component: Settings, name:'settings', meta: { requiresAuth: true }},
    { path:'/settings', component: Settings, meta: { requiresAuth: true }},
    { path:'/user/auth/:email', component: Auth},
    { path: "/test2", component: PageNotFound }
]
