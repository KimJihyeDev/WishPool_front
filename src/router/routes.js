import CategoryList from '../components/category/CategoryList.vue'
import ItemList from '../components/item/ItemList.vue'
import ItemAdd from '../components/item/ItemAdd.vue'
<<<<<<< HEAD
import ItemModify from '../components/item/ItemModify.vue'
// 웹소캣 연습용 컴포턴트 (나중에 삭제하기)
import Temp from '../components/Temp.vue'


export default [
    { path:'/category/list', component:CategoryList },
    { path:'/item/list', component:ItemList},
    { path:'/item/add', component:ItemAdd},
    { path:'/item/modify',component:ItemModify},
    { path:'/temp',component:Temp},
    
    
    
=======
import Temp from '../components/Temp.vue'

export default [
    { path:'/category/list', component:Category },
    { path:'/item/list', component:ItemList },
    { path:'/item/add', component:ItemAdd },
    { path:'/temp', component:Temp}
>>>>>>> 40bb244fa1c1bdec9f5a887ced1b02fc52bd73a3
]
