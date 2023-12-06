import React, { useContext, useEffect, useState } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import ExpenceContext from './Context/ExpenceContext';



const BalanceSection = () => {

    const { expenditures, dispatch, edit } = useContext(ExpenceContext)




    const [amount, setAmount] = useState("")
    const [detail, setDetail] = useState("")


    const balance =expenditures.reduce((p,c)=>{
        return p+c.amount 
    },0)

    const handleSave = (e) => {
        e.preventDefault()
        if (edit.isEdit) {
            dispatch({
                type: "UPDATE",
                payload: {
                    id: edit.expenditure.id,
                    detail: detail,
                    amount: +amount,
                }
            })
        }
        else {
            dispatch({
                type: "SAVE",
                payload: {
                    id: crypto.randomUUID(),
                    detail: detail,
                    amount: +amount,
                }
            })
          
        }
        setAmount("")
        setDetail("")
    }

    useEffect(() => {
        setAmount(edit.expenditure.amount)
        setDetail(edit.expenditure.detail)

    }, [edit])
    return (
        <div className=" balance-section">
            <div className="row gy-2">
                <div className="col-md-6 col-sm-12">
                    <div className="card p-4 bg-secondary">
                        <form onSubmit={() => handleSave(e)}>
                            <input type="text"
                                className="form-control my-2"
                                placeholder='Enter Transaction Detail'
                                required
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                            />

                            <input type="number"
                                className="form-control my-2"
                                placeholder='Enter Amount'
                                required
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} />
                            <button className="btn btn-primary w-100" onClick={handleSave}
                            >Save</button>
                        </form>
                    </div>
                </div>


                <div className="col-md-6 col-sm-12">
                    <div className="card p-4 bg-secondary" >
                        <h2 className="card-title text-light">
                            Balance:
                        </h2>
                        <h1 className="display-4 text-success"><FaRupeeSign />
                            {balance}
                        </h1>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default BalanceSection