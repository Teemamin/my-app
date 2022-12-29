import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
    const [visible, setVisible] = useState(false);

    const showExpenseForm = () => {
        setVisible((prev) => !prev);
    };
    const saveExpenseHandler = (enteredExpenseData)=>{
        setVisible((prev) => !prev)
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData)
    }
    

    return(
           <div className="new-expense">
                {visible &&<ExpenseForm onSaveExpense={saveExpenseHandler} onRemoveForm={setVisible}/> }
                {!visible && <button type="" onClick={showExpenseForm}>Add Expense</button>}
           </div>
        
    )
}

export default NewExpense;