import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaxVal = Math.max(...dataPointsValues) //returns the number with the highest value
  return (
    <div className='chart'>
        {
            props.dataPoints.map(dataPoints=>{
                return <ChartBar
                        key={dataPoints.label}
                        value={dataPoints.value}
                        maxValue={totalMaxVal}
                        label={dataPoints.label}/>
            })
        }
    </div>
  )
}

export default Chart