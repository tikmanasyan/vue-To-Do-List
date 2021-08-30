<template>
  <div>
    <b-container class="mt-2">
      <button @click="checkAll" class="btn btn-link mb-2">Check all</button>
      <button @click="unCheckAll" class="btn btn-link mb-2">Uncheck all</button>
      <button @click="deleteCheckeds" class="btn btn-link mb-2">Delete checkeds</button>
      <b-list-group style="width: 300px">
        <b-list-group-item class="d-flex justify-content-between align-baseline" v-for="(item, index) in itemlist">
          <input @change="checkItem(index)" type="checkbox" class="m-r-5" :checked="item.checked">
          {{ item.content.name }}
          <img
            src="./../../assets/close.png"
            style="width:16px;height:16px; cursor:pointer"
            @click="removeItem(index)"
          />
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
props:{
  itemlist:{
    type:Object | Array,
    required:true
  },
},
  methods:{
    removeItem(i) {
      this.$store.dispatch('Todo/removeToDo', i);
    },
    checkItem(i) {
      this.$store.dispatch('Todo/checkItem', i);
    },
    checkAll() {
      this.$store.dispatch('Todo/checkAllItems');
    },
    unCheckAll() {
      this.$store.dispatch('Todo/unCheckAllItems');
    },
    deleteCheckeds() {
      this.$store.dispatch('Todo/deleteCehckeds');
    }
  }
,
}
</script>

<style scoped>

</style>
