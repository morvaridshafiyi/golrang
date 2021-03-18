import React , {useContext , useState} from 'react'
import UserTableContext from '../context/userTableContext'

function InputSearch (){

    const [text , setText ] = useState()
    const userTableContext = useContext(UserTableContext)

    let inputHandler = e => setText(e.target.value)

    return(

            <>
                <input className="d-flex" placeholder="... جستجو در نام و نام خانوادگی"  onKeyUp={inputHandler} ></input>
                <button className="" onClick={() => userTableContext.searchInColumns(text)} >جستجو</button>
            </>
    )
}
export default InputSearch