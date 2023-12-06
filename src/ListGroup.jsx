import React, { useContext } from 'react'
import ListItem from './ListItem'
import ExpenceContext from './Context/ExpenceContext'


const ListGroup = () => {
    const {expenditures}=useContext(ExpenceContext)

    return (
        <ul className="list-group my-2">
            {
                expenditures.map(expenditure => <ListItem key={expenditure.id} expenditure={expenditure}/>)
            }
        </ul>
    )
}

export default ListGroup