import TodoInput from '@/components/TodoInput'
import TodoSearch from '@/components/TodoSearch'
import TodosList from '@/components/TodosList'
import React from 'react'

const TodosPage = () => {
  return (
    <main>
      <h2>Todos Page</h2>
      <TodoSearch/>
      <TodoInput/>
      <TodosList/>
    </main>
  )
}

export default TodosPage
