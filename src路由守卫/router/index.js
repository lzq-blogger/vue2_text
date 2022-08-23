
import VueRouter from 'vue-router'
import School from '../pages(路由组件)/School'
import Student from '../pages(路由组件)/Student'
import New from '../pages(路由组件)/New'
import Msg from '../pages(路由组件)/Msg'
const router =  new VueRouter({
    routes:[   //记得跟routers不同
        {
            name:'xues',  //自定义路由名字
            path:'/student/:id',
            component:Student,
            meta:{title:'学生'},   //自己配置属性

            beforeEnter(to,from,next){
                //独享路由
            }
        }, 
        {
            name:'xuexiao',  //自定义路由名字
            path:'/school/:id',
            component:School,
            meta:{title:'学校'},   //自己配置属性
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

//前置路由守卫
router.beforeEach((to,from,next)=>{
    //to去哪里，from从哪里来  ，next是否放行
    //可以进行判断
    next()
})


//后置路由守卫
router.afterEach((to,from)=>{
   document.title = to.meta.title || '案例'
})

export default router;

