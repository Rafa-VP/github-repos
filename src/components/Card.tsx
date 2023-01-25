import React from 'react'
import { Repository } from '../hooks/types'

type CardProps = {
  repository: Repository
}

function Card({ repository }: CardProps) {
  return (
    <div style={{ display: 'grid', marginBottom: '1rem', width: 0 }}>
      <div style={{ border: 'solid 4px', padding: '1rem' }} >
        <img src={repository.owner.avatar_url} style={{ width: '100px', height: '100px' }} />
        <h1>
          {repository.name}
        </h1>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button>
            Like
          </button>
          <button>
            Dislike
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
