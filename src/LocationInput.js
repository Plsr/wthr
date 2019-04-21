import React, { useState } from 'react'
import PropTypes from 'prop-types'

function LocationInput({ onSubmit }) {
  const [location, setLocation] = useState('')

  function handleLocationChange(e) {
    setLocation(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(location)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Choose Location"
        value={location}
        onChange={handleLocationChange}
      />
      <button type="submit"> Choose</button>
    </form>
  )
}

LocationInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LocationInput
