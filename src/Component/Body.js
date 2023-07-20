import React from 'react'
import Header from './Header'
import TaskTable from './TaskTable'
import useGetTaskFromDb from "../helper/useGetTaskFromDb"

const Body = () => {
  useGetTaskFromDb()
  return (
    <div>
        <Header/>
        <TaskTable/>
    </div>
  )
}

export default Body