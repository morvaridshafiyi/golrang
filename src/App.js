import React, {useReducer ,useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

// componentsImport
import SelectOption from './components/selectoption';
import TableRows from './components/tableRow';
import InputSearch from './components/inputSearch';
import UserTable from './components/userTable'

//contextImport
import UserTableContext from './context/userTableContext'

//styleImport
import './App.css'

//reducersImport
import UserListReducer from './reducers/usersListReducer'


function App () {
        
      const [state , dispatch] = useReducer(UserListReducer , {
        isLoaded: false,
        items: [],
        filterItem: []
    })

    return (
        <section className="usersList">
        <div className='container'>
            <div className="row">
            <UserTableContext.Provider value = {{
            userList : state.filterItem,
            items: state.items,
            dispatch
            }}>
                <div className="col-12">
                    <SelectOption  />
                    <div className="tableSearchInput">
                        <InputSearch/>
                     </div>
                      {
                           state.isLoaded
                            ?
                          <h2 className="text-center pt-5 mt-5">منتظر بمانید ...</h2>
                            :
                           <UserTable/>
                      }
                </div>
                </UserTableContext.Provider>
            </div>
        </div>
        </section>


    )
  
}

export default App;