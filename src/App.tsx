import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import RepoCard from './components/RepoCard'
import { useFetchRepositories } from './hooks/useRepos'

function App() {
  document.title = 'Repositories'
  const [username, setUsername] = useState<string>('')
  const { data, mutate, isLoading } = useFetchRepositories(username)
  if (isLoading) return <div>Loading...</div>

  return (
    <div style={{ display: 'grid', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Input style={{ color: 'white' }} color='primary' clearable bordered labelPlaceholder="Github username" initialValue="" onChange={({ target }) => {
          setUsername(target.value)
        }} />
        <Button disabled={username === ''} onClick={() => mutate()} animated>Search Repositories</Button>
      </div>
      {
        data && data?.length > 0 &&
        <div style={{ padding: '2rem' }}>
          {data?.map((repo) => (
            <RepoCard key={repo.id} repository={repo} />
          ))}
        </div>
      }
    </div>
  )
}

export default App
