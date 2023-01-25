import React from 'react'
import Card from './components/Card'
import { useFetchRepositories } from './hooks/useRepos'

function App() {

  const { data, isLoading } = useFetchRepositories()

  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div>
      {data?.map((repo) => (
        <Card repository={repo} />
      ))}
    </div>
  )
}

export default App
