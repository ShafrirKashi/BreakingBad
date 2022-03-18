import React from 'react'
import {useParams} from 'react-router-dom'

function Episode() {

  const params = useParams()
  console.log(params)
  return (
    <div>Episode {params.id}  </div>
  )
}

export default Episode