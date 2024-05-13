import { mutationCreateCountry } from '@/graphql/mutationCreateCountry'
import { queryAllCountries } from '@/graphql/queryAllCountries'
import { AddCountryForm } from '@/types/country'
import { useMutation } from '@apollo/client'
import React, { FormEvent, useState } from 'react'

function AddCountry(): React.ReactNode {
  const [name, setName] = useState('')
  const [emoji, setEmoji] = useState('')
  const [code, setCode] = useState('')
  const data: AddCountryForm = {
    name,
    emoji,
    code,
  }

  const [doCreate, { loading: loadingCreate }] = useMutation(
    mutationCreateCountry,
    {
      refetchQueries: [queryAllCountries],
    }
  )
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (name && emoji && code) {
      const result = await doCreate({
        variables: {
          data: data,
        },
      })
    } else {
      console.error('error')
    }
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
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
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
