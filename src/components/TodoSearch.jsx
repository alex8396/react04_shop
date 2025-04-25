import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const TodoSearch = () => {
  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="outline-secondary">Button</Button>
        <Button variant="outline-secondary">Button</Button>
      </InputGroup>
    </div>
  )
}

export default TodoSearch
