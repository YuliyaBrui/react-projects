import React, { useState } from 'react'
import { Card } from './card/Card'
import { Form, State } from './form/Form'

export function App() {
  const [formValues, setFormValues] = useState<State[]>([])
  return (
    <div className="App">
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item: State) => (
          <Card Item={item} key={formValues.indexOf(item)} />
        ))}
      </main>
    </div>
  )
}
