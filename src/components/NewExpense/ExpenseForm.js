import React,{useState} from 'react';
import './NewExpenseForm.css';

function ExpenseForm(props) {
    const [userInput,setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const userInputHandler = (evnt)=>{
        // console.log(evnt)
        setUserInput((prevState)=>{
            return {...prevState, [evnt.target.name]:evnt.target.value}
        })
    }

    const submitHandler = (evnt)=>{
        evnt.preventDefault()
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpense(expenseData)
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    const cancleFormHandler = ()=>{
        props.onRemoveForm(false)
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls'>
                <label  htmlFor="">Title</label>
                <input type="text" name="enteredTitle" value={userInput.enteredTitle} onChange={userInputHandler}/>
            </div>

            <div className='new-expense__controls'>
                <label htmlFor="">Amount</label>
                <input type="number" min='0.01' step='0.01' name="enteredAmount" value={userInput.enteredAmount} onChange={userInputHandler}/>
            </div>

            <div className='new-expense__controls'>
                <label htmlFor="">Date</label>
                <input type="date" min='2019-01-12' max='2023-12-31' name="enteredDate" value={userInput.enteredDate} onChange={userInputHandler}/>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
                <button type="" onClick={cancleFormHandler}>Cancel</button>
            </div>
        </div>
</form>
  )
}

export default ExpenseForm