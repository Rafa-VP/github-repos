import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import RepoCard from './components/RepoCard'
import { useFetchRepositories } from './hooks/useRepos'

function App() {
  document.title = 'Repositories'
  const [username, setUsername] = useState<string>('')
  const { data, mutate, isLoading } = useFetchRepositories(username)
  if (isLoading) return <div>Loading...</div>

  return (
    <div style={{ display: 'grid', justifyItems: 'center' }}>
      <Input clearable bordered labelPlaceholder="Github username" initialValue="" onChange={({ target }) => {
        setUsername(target.value)
        mutate()
      }} />
      {data?.map((repo) => (
        <RepoCard key={repo.id} repository={repo} />
      ))}
    </div>
  )
}

export default App
