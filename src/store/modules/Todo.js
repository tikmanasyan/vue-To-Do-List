export default {
  namespaced:true,
  state:{
    to_do_list:JSON.parse(localStorage.getItem('list')) || []
  },
  mutations:{
    storeToDoList(state, data) {
      localStorage.setItem('list', JSON.stringify(data));
      state.to_do_list = data;
    }
  },
  getters:{
    toDoList: state => state.to_do_list
  },
  actions:{
    addToDo(context, data) {
      const list = context.getters.toDoList;
      list.push(data);
      context.commit('storeToDoList', list);
    },
    removeToDo(context, index) {
      const list = context.getters.toDoList;
      list.splice(index, 1);
      context.commit('storeToDoList', list);
    },
    checkItem(context, index) {
      let list = context.getters.toDoList;
      list[index].checked = !list[index].checked;
      context.commit('storeToDoList', list);
    },
    checkAllItems(context) {
      let list = context.getters.toDoList;
      for(let i = 0; i < list.length; i++) {
        list[i].checked = true;
      }
    },
    unCheckAllItems(context) {
      let list = context.getters.toDoList;
      for(let i = 0; i < list.length; i++) {
        list[i].checked = false;
      }
    },
    deleteCehckeds(context) {
      let list = context.getters.toDoList;
      for(let i = 0; i < list.length; i++) {
        if(list[i].checked == true) {
          list.splice(i,1);
        }
         context.commit('storeToDoList', list);
      }


    },
  }
}
