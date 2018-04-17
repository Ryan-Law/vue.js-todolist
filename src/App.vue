<template>
  <div id="app">
    <todolist></todolist>
  </div>
</template>

<script>
    import todolist from './components/todolist'

export default {
  name: 'app',
    components: {
        todolist
    },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
