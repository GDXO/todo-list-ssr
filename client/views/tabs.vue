<template>
  <div class="tabsBox">
    <span class="leftText">{{ unFinishedTodoLength }} items left</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state, filter === state ? 'activated' : '']"
        @click="toggleFilter(state)"
        >{{ state }}</span
      >
    </span>
    <span class="clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  name: 'TodoTabs',
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      types: Array,
      required: true
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    toggleFilter (state) {
      this.$emit('filterState', state)
    },
    clearAllCompleted () {
      this.$emit('delAllCompleted')
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabsBox{
  font-weight: 100;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  line-height: 30px;
  background: #FFF;
  font-size: 14px;
  font-smooth: antialiased;
}

.leftTex, .clear, .tabs{
  padding: 0 10px;
  box-sizing: border-box;
}

.leftText, .clear{
  width: 150px;
}

.leftText{
  text-align: left;
}

.clear{
  text-align: center;
  cursor: pointer;
}

.tabs{
  width: 200px;
  display: flex;
  justify-content: space-around;

  *{
    display: inline-block;
    padding: 0 10px;
    cursor: pointer;
    border: 1px solid rgba(175, 47, 47, 0);

    &.activated{
      border-color: rgba(175, 47, 47, .4);
      border-radius: 5px;
    }
  }
}
</style>
