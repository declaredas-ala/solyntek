// useSignup.js
import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, name, phone) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:4000/api/user/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password, name, phone })
    })

    try {
      const json = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      } else {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(json))

        // update the auth context
        dispatch({type: 'LOGIN', payload: json})

        // update loading state
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      setError('An error occurred while processing your request.')
    }
  }

  return { signup, isLoading, error }
}
