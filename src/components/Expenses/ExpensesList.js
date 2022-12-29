import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'


function ExpensesList(props) {
    if(props.expenseByDate.length === 0 ){
        return <h2 className='expenses-list__fallback'>No Items for the year {props.selectedYear}</h2>
    }
  return (
    <div>
        <ul className='expenses-list'>
            {props.expenseByDate.map(expense=>{
                return  <ExpenseItem amount={expense.amount} title= {expense.title} date={expense.date} key={expense.id}/>
            })}   
        </ul>
    </div>
  )
}

export default ExpensesList