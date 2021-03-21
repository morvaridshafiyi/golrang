import React , {useContext , useEffect } from 'react'
import UserTableContext from '../context/userTableContext'
import TableRows from './tableRow'
import axios from 'axios';

function UserTable (){
    const userTableContext = useContext(UserTableContext)  

    useEffect(() =>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => { 
        userTableContext.dispatch({ type : 'getTableData' , payload : {res : res}})
      })
      .catch(err => {
        console.log(err)
      })
    })
    
    return(
        <table className="table table-striped table-bordered  table-responsive-sm" >
        <thead className="thead-light" >

          <tr>
              <th scope="col">آیدی
              </th>
              <th scope="col">نام و نام خانوادگی
              </th>
              <th scope="col">نام کاربری
              </th>
              <th scope="col">شماره تلفن
              </th>
              <th scope="col">ایمیل
              </th>
              <th></th>

          </tr>
        </thead>
        <tbody>
        <TableRows />
        </tbody>
      </table>
    )
}
export default UserTable