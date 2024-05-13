import React, { FormEvent, useState } from 'react'

function AddCountry(): React.ReactNode {
  const [name, setName] = useState('')
  const [emoj, setEmoj] = useState('')
  const [code, setCode] = useState('')
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-col item-center">
        <div className="d-flow-column">
          <label htmlFor="name">Name </label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="d-flow-column">
          <label htmlFor="emoj">Emoj </label>
          <br />
          <input
            type="text"
            name="emoj"
            value={emoj}
            onChange={(e) => setEmoj(e.target.value)}
          />
        </div>
        <div className="d-flow-column">
          <label htmlFor="code">Code </label>
          <br />
          <input
            type="text"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <button
          style={{ width: 'auto', padding: '0.5rem 1rem', margin: '1rem' }}
          type="submit">
          Add{' '}
        </button>
      </div>
    </form>
  )
}

export default AddCountry
