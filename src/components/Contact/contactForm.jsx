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
    <div className='contactFormContainer'>
      <div>
      <form onSubmit={addForm}>
        <h1>Send us an message</h1>
        <input
            className='fontField'
            value={name}
            onChange={handleNameChange}
            placeholder='Name'
         />
    
         <input 
            className='fontField'
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
         />
         <input
            className='fontField'
            value={question}
            onChange={handleQuesitonChange}
            placeholder='Equiry'
         />
        <button type="submit">Send</button>
      </form> 
      </div> 
    </div>
  )
}

export default ContactForm