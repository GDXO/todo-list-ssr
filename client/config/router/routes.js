import TodoView from '@/views/todo/'
import LoginView from '@/views/login/'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: TodoView
  },
  {
    path: '/login',
    component: LoginView
  }
]
