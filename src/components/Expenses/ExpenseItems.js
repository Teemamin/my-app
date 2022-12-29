import React,{useState} from "react";
import Card from '../UI/Card';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './ExpenseItems.css';

function ExpenseItems(props){
    const[selectedYear,setSelectedYear] = useState(2019)

    const expensesFilterHandler = (filteredYear)=>{
        setSelectedYear(filteredYear)
    }

    let expenseByDate = props.data.filter(exp=>{
        return exp.date.getFullYear().toString() === selectedYear.toString()
    })

    return(
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onExpenseFilter={expensesFilterHandler}/>
            <ExpensesChart expenses={expenseByDate}/>
            <ExpensesList expenseByDate={expenseByDate} selectedYear={selectedYear}/>
            </Card>
        </div>
    )
}

export default ExpenseItems;