import Vue from 'vue'
import Router from 'vue-router'
import introduce from 'components/introduce/introduce.vue';
import home from 'components/blog/index.vue';
import blog from 'components/blog/blog.vue';
import commonActicle from 'components/blog/temp/acticle/common.vue';
import detail from 'components/blog/temp/acticle/detail.vue';
import search from 'components/search/search.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/',
      redirect: '/introduce' 
    },
    { 
      name: 'introduce',
      path: '/introduce', 
      component: introduce
    },
    { 
      name: 'blog',
      path: '/blog',
      component: home,
      children: [ 
        {
          path: 'index',
          component: blog,
          children: [
            {
              path: '',
              components: { commonActicle }
            }
          ]
        },
        {
          name: 'acticle',
          path: 'acticle/:id',
          component: detail
        },
      ]
    },
    {
      name: "search",
      path: "/search",
      component: search
    }
  ]
})
