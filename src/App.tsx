import { Button, Container, Input, Loading, Spacer, Text } from '@nextui-org/react'
import React, { useState } from 'react'
import ReposCard from './components/ReposCard'
import { useFetchRepositories } from './hooks/useRepos'

function App() {
  document.title = 'Repositories'
  const [username, setUsername] = useState<string>('')
  const { data, mutate, isLoading } = useFetchRepositories(username)
  if (isLoading) return (
    <Container style={{ marginTop: '30%' }} responsive display='grid' justify='center'>
      <Loading size='lg' color={'success'} type='points' />
    </Container>)

  return (
    <Container justify='center' display='grid'>
      <Spacer y={1} />
      <Text h1 size={40} css={{ textGradient: '45deg, $blue600 -20%, $green600 50%', textAlign: 'center' }}>
        Find user repositories
      </Text>
      <Spacer y={1} />
      <Container justify='center' display='grid'>
        <Input
          style={{ color: 'black' }}
          color='success'
          clearable
          labelPlaceholder="Github Username"
          initialValue="" onChange={({ target }) => {
            setUsername(target.value)
          }} />
        <Spacer y={1} />
        <Button css={{ linearGradient: '45deg, $blue600 -20%, $green600 50%', textAlign: 'center' }}
          type='submit'
          disabled={username === ''}
          onPress={() => mutate()} animated>
          Search Repositories
        </Button>
        <Spacer y={1} />
      </Container>
      {
        data && data?.length > 0 &&
        <ReposCard repositories={data} />
      }
    </Container>
  )
}

export default App
