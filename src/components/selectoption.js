import React , {useContext} from 'react';

import UserTableContext from '../context/userTableContext'

function SelectOp() {
  const userTableContext = useContext(UserTableContext)

    let SelectHandler = e => {
   
      userTableContext.filter(e.target.value);
     
    }
    let items = userTableContext.userList;

    return (
   
        <select className="form-control my-4" onChange={SelectHandler}>
        <option defaultValue>All</option>
        {
         items.map(item => {
            return (
              <option key={item.id}>
                {item.name}
              </option>
            )
          })
        }
      </select>

    )

}
export default SelectOp;