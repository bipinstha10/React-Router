import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userID} = useParams()
  return (
    <div className='text-2xl'>User:{userID}</div>
  )
}

export default User