<template>
  <div :class="['todoItem', todo.completed ? 'completed' : '']">
    <input
      type="checkbox"
      name="ckbToggle"
      class="toggle"
      v-model="completed"
    />
    <label>{{ todo.content }}</label>
    <button class="destroy" @click="delTodoItem"></button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  computed: {
    completed () {
      return this.todo.completed
    }
  },
  methods: {
    delTodoItem () {
      this.$emit('delTodoItem', this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todoItem {
  position: relative;
  background: #FFF;
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  &:hover {
    .destroy:after  {
      content: 'x';
    }
  }

  label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  &.completed {
    label {
      color: #D9D9D9;
      text-decoration: line-through;
    }
  }
}

.toggle {
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: 15px;
  border: none;
  appearance: none;
  outline: none;

  &:after {
    content: url('@/assets/images/unChecked.svg');
  }

  &:checked:after {
    content: url('@/assets/images/checked.svg');
  }
}

.destroy {
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #CC9A9A;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background: transparent;
  appearance: none;
  border: 0;
  cursor: pointer;
  outline: none;
}
</style>
