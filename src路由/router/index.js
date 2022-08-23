
import VueRouter from 'vue-router'
import School from '../pages(路由组件)/School'
import Student from '../pages(路由组件)/Student'
import New from '../pages(路由组件)/New'
import Msg from '../pages(路由组件)/Msg'
export default new VueRouter({
    mode:'hash',  //hash不会携带静态路径资源给服务器，history会携带，
    routes:[   //记得跟routers不同
        {
            name:'xues',  //自定义路由名字
            path:'/student/:id',
            component:Student
        }, 
        {
            name:'xuexiao',  //自定义路由名字
            path:'/school/:id',
            component:School,
            children:[
                {
                    path:'new',
                    component:New
                },
                {
                    path:'Msg',
                    component:Msg
                }
            ]
        },
    ]
})