import React, { useContext } from 'react'

import { FaRupeeSign } from 'react-icons/fa';
import ExpenceContext from './Context/ExpenceContext';
const ExpenceSection = () => {

    const { expenditures } = useContext(ExpenceContext)

    const income = expenditures.filter((item) => item.amount > 0).reduce((p, c) => p + c.amount, 0)
    const expence = expenditures.filter((item) => item.amount < 0).reduce((p, c) => p + c.amount, 0)




    return (
        <div className="balance-section my-2">
            <div className="row gy-1">
                <div className="col-md-6 col-sm-12">
                    <div className="card border-success bg-secondary  p-3">
                        <h4 className="text-light">Total Income:</h4>
                        <h3 className="text-warning"><FaRupeeSign />{income}</h3>
                    </div>
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="card border-danger bg-secondary p-3">
                        <h4 className="text-light">Total Expence:</h4>
                        <h3 className="text-danger"><FaRupeeSign />{expence}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenceSection