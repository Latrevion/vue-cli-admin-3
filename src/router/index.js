import Vue from 'vue';
import VueRouter from 'vue-router';

import layout from "@/layout/auto.vue";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

    return originalPush.call(this, location).catch(err => err)

}



const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: "login",
        component: () =>
            import('@/views/login/login.vue'),
    },
    {
        path: '/',
        name: "index",
        redirect: '/index',
        component: () => import('@/layout/admin.vue'),
        meta: { title: 'admin' },
        children:[
            //首页
            {
                path: '/index',
                component: layout,
                children: [
                    {
                        path: '/index',
                        name: "index",
                        component: () => import('@/views/put_record/index.vue'),
                        meta: { data: [{title:'入库记录'},{title:'所有记录'}] }
                    },
                    {
                        path: '/detailPage',
                        name: "详情页",
                        component: () => import('@/views/put_record/components/detailPage.vue'),
                        meta: { data: [{title:'入库记录'},{title:'所有记录',path:'/index'},{title:'详情页'}], activeMenu: '/index' },
                    },
                ]
            },
            //协同办公
            {
                path: '/xtbg',
                component: layout,
                children: [
                    {
                        path: 'dfsx',
                        name: "待发事项",
                        component: () => import('@/views/xtbg/dfsx/index.vue'),
                        meta: { data: [{title:'协同办公'},{title:'待发事项'}]},
                    },
                    {
                        path: 'yfsx',
                        name: "已发事项",
                        component: () => import('@/views/xtbg/yfsx/index.vue'),
                        meta: { data: [{title:'协同办公'},{title:'已发事项'}]  },
                    },
                    {
                        path: 'dbsx',
                        name: "待办事项",
                        component: () => import('@/views/xtbg/dbsx/index.vue'),
                        meta: { data: [{title:'协同办公'},{title:'待办事项'}]},
                    },
                    {
                        path: 'ybsx',
                        name: "已办事项",
                        component: () => import('@/views/xtbg/ybsx/index.vue'),
                        meta: {  },
                    },
                    {
                        path: 'cgbash',
                        name: "采购备案审核",
                        component: () => import('@/views/xtbg/cgbash/index.vue'),
                        meta: { data: [{title:'协同办公'},{title:'采购备案审核'}]},
                    },
                    {
                        path: 'cgsssh',
                        name: "采购实施审核",
                        component: () => import('@/views/xtbg/cgsssh/index.vue'),
                        meta: { data: [{title:'协同办公'},{title:'采购实施审核'}]},
                    },
                    {
                        path: 'cgsqsh',
                        name: "采购申请审核",
                        component: () => import('@/views/xtbg/cgsqsh/index.vue'),
                        meta: { data: [{title:'协同办公'},{title:'采购申请审核'}]},
                    }
                ]
            },
            {
                path: '/user',
                component: layout,
                children: [
                    {
                        path: 'index',
                        name: "user",
                        component: () => import('@/views/user_admin/user.vue'),
                        meta: { data: [{title:'用户管理'},{title:'用户'}]  },
                    },
                    {
                        path: 'xtfl',
                        name: "user",
                        component: () => import('@/views/user_admin/xtfl.vue'),
                        meta: { data: [{title:'用户管理'},{title:'用户'}]  },
                    }
                ]
            },


        ]
    },
]
export default new VueRouter({
    base: process.env.BASE_URL,
    routes
})
