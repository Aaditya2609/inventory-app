import React from 'react'
import Nav from '../components/Nav'
import Departments from '../components/Departments'

function DepartmentsPage() {
  return (
    <div className='flex w-full gap-8'>
        <Nav/>
        <Departments/>
    </div>
  )
}

export default DepartmentsPage