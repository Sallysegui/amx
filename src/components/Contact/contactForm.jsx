    import { useState } from 'react'


const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')

    const addForm = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    }
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
      }
  
    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }
  
    const handleQuesitonChange = (event) => {
        console.log(event.target.value)
        setQuestion(event.target.value)
    }
  
  return (
    <div>
      <h1>Send us a message</h1>
      <form onSubmit={addForm}>
        <input
            value={name}
            onChange={handleNameChange}
         />
         <input
            value={email}
            onChange={handleEmailChange}
         />
         <input
            value={question}
            onChange={handleQuesitonChange}
         />
        <button type="submit">Send</button>
      </form>  
    </div>
  )
}

export default ContactForm