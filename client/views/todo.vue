<template>
  <section class="realIptBox">
    <input
      type="text"
      class="addInput"
      autofocus="autofocus"
      placeholder="接下来要做什么?"
      @keyup.enter="addTodoItem"
    />
    <Item
      v-for="todo in filterTodos"
      :key="todo.id"
      :todo="todo"
      @delTodoItem="delTodoItem"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @filterState="filterState"
      @delAllCompleted="delAllCompleted"
    />
  </section>
</template>

<script>
import Item from './item'
import Tabs from './tabs'

// id 模拟
let id = 0

export default {
  name: 'mainTodo',
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') return this.todos

      const completed = this.filter === 'completed'

      return this.todos.filter(todo => todo.completed === completed)
    }
  },
  methods: {
    addTodoItem (evt) {
      this.todos.unshift({
        id: id++,
        content: evt.target.value.trim(),
        completed: false
      })

      evt.target.value = ''
    },
    delTodoItem (todoId) {
      this.todos.splice(
        this.todos.findIndex(todo => todo.id === todoId),
        1
      )
    },
    filterState (state) {
      this.filter = state
    },
    delAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.realIptBox{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;

  .addInput{
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    line-height: 1.4em;
    border: 0;
    outline: none;
    padding: 16px;
    border: none;
    box-sizing: border-box;
    font-smooth: antialiased;
    padding-left: 60px;
    box-shadow: inset -2px -1px 5px rgba(0, 0, 0, .2);
  }
}
</style>
