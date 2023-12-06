import React, { useContext } from 'react'
import { FaTrash, FaPen, FaRupeeSign } from 'react-icons/fa';
import ExpenceContext from './Context/ExpenceContext';


const ListItem = ({ expenditure }) => {



    const { dispatch } = useContext(ExpenceContext)
    const HandleDelete = (id) => {
        dispatch(
            {
                type: "DELETE",
                payload: id
            }
        )
    }


    // Edit

    const HandleEdit=(oldexpenditure)=>{
        dispatch({
            type:"EDIT",
            payload: oldexpenditure
        })
    }


    return (
        <li className="list-group-item my-1">
            <span>
                <h3 className="text-success" >
                    <FaRupeeSign />{expenditure.amount}</h3>
                <h4 className="text-secondary">  <FaRupeeSign />{expenditure.detail}</h4>
            </span>
            <span className='float-end'>
                <button className="btn btn-warning btn-sm mx-1" onClick={()=>HandleEdit(expenditure)}><FaPen />Edit </button>
                <button className="btn btn-danger btn-sm" onClick={() => HandleDelete(expenditure.id)} >Delete<FaTrash /></button>

            </span>

        </li>
    )
}

export default ListItem