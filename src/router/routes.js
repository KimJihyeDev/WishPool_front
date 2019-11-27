import Category from '../components/category/Category.vue'
import ItemList from '../components/item/ItemList.vue'
import ItemAdd from '../components/item/ItemAdd.vue'

export default [
    { path:'/category/list', component:Category },
    { path:'/item/list', component:ItemList },
    { path:'/item/add', component:ItemAdd }
]
