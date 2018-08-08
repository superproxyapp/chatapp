
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/test',
    component: () => import('layouts/chat.vue'),
    children: [
      { path: '', component: () => import('pages/test.vue') }
    ]
  },
  {
    path: '/chat',
    component: () => import('layouts/chat.vue'),
    children: [
      { path: '', component: () => import('pages/chatBox.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }
