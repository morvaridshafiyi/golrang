function UserListReducer(state , action) {
    console.log(state , action);
    switch (action.type) {
        case 'deleteRow':
            return deleteRow(state , action);
            break;
        case 'selectSearch' :
            return selectSearch(state,action);
            break;
        case 'searchInColumns' : 
            return searchInColumns(state, action);
            break;
        default:
            return state;
            break;
        case 'isloaded' :
            return isloaded(state , action);
            break;
        case 'getTableData' :
             return getTableData (state , action);
             break;
        default:
                return state;
                break;
    }
}

export default UserListReducer;

let selectSearch = (state , action) => {
let SelectValue = action.payload;
    if (SelectValue != "All") {
      let newList = state.items.filter(item => item.name == SelectValue)
      return{
          ...state,
          filterItem: newList
      }
    }
    else {
        return{
            ...state ,
             filterItem : state.items
        }
    }
  }


 let searchInColumns = (state , action) => {
    let text = action.payload;
    let UsersList = state.filterItem
    state.items = UsersList
    let newUsersList = state.filterItem.filter(function(item){
      return(
        item.name.toLowerCase().match(text)
      ) 
    })
    return{
        ...state ,
        items : newUsersList 
    }
  }


 let deleteRow = (state , action) => {
     let id = action.payload;
        return { 
          ...state,
          items : state.items.filter(item => item.id !== id)
        }

}

let getTableData = (state , action) => {

    let res = action.payload;
         return{
          isLoaded: ! isloaded,
          items:[res.data] ,
          filterItem: [res.data]
        };
}
