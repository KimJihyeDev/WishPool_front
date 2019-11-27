import CategoryList from '../components/category/CategoryList.vue'
import ItemList from '../components/item/ItemList.vue'
import ItemAdd from '../components/item/ItemAdd.vue'
// 웹소캣 연습용 컴포턴트 (나중에 삭제하기)
import Temp from '../components/Temp.vue'

export default [
    { path:'/category/list', component:CategoryList },
    { path:'/item/list', component:ItemList},
    { path:'/item/add', component:ItemAdd},
    { path:'/temp',component:Temp},
    
    
]
