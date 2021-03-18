import React, { useContext } from 'react';
import UserTableContext from '../context/userTableContext'
function TableRows () {
  const userTableContext = useContext(UserTableContext)

    let items = userTableContext.items;
    return (
      <>
        {
          items.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td><button id="deleteRow" onClick={() => userTableContext.deleteRow(item.id)}>حذف</button></td>
              </tr>
            )
          })
        }
      </>


    )
 
}

export default TableRows;