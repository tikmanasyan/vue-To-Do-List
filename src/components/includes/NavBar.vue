<template>
  <div>
    <b-nav>
      <b-nav-item>
        <router-link :to="{name:'HelloWorld'}">Home</router-link>
        <router-link :to="{name:'TodoList'}">Todo</router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
