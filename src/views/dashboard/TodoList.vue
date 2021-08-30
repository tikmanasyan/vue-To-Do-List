<template>
  <div>
    <b-container>
      <nav-bar></nav-bar>
    </b-container>

    <b-container>

          <form @submit="addItem" v-if="true">
            <div class="">
              <b-form-group
                id="input-group-1"
                label="Enter todo item"
                label-for="input-1"
                style="width:300px"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Go home"
                  required
                ></b-form-input>
              </b-form-group>


            </div>
            <b-button type="submit" variant="success" style="margin-top:5px; height:40px"> Add </b-button>


          </form>
    </b-container>

  <todo-item :itemlist="toDoList" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name:'TodoList',
  components:{ TodoItem },
  data() {
    return {
      form:{
        name:''
      },
      show:true,
      list:[]
    }
  },
  methods:{
    addItem() {
      this.$store.dispatch('Todo/addToDo', { content:this.form, checked:false});
    }
  },
  mounted() {

  },
  computed: {
      toDoList() {
        return this.$store.getters['Todo/toDoList'];
      }
  },

}
</script>

<style scoped>

</style>
