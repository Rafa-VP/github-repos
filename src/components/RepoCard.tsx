import React from 'react'
import { Repository } from '../hooks/types'
import { Card, Grid, Text, Link } from "@nextui-org/react";

type CardProps = {
  repository: Repository
}
function RepoCard({ repository }: CardProps) {

  let homepage = ''

  if (repository.homepage && !String(repository.homepage).startsWith('htt')) homepage = `https://${repository.homepage}`
  if (repository.homepage && String(repository.homepage).startsWith('http')) homepage = repository.homepage

  return (
    <Card variant='flat' css={{ p: "$6", mw: "400px", "marginBottom": '$4' }}>
      <Card.Header>
        <img
          alt="nextui logo"
          src={repository.owner.avatar_url}
          width="50px"
          height="50px"
          style={{ borderRadius: '7px' }}
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {repository.name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{repository.language}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          {repository.description || new Date(repository.created_at).toDateString()}
        </Text>
      </Card.Body>
      <Card.Footer>
        {repository.homepage && <Link
          color="primary"
          target="_blank"
          href={homepage}
        >
          Visit homepage
        </Link>}
      </Card.Footer>
    </Card>
  );
}

export default RepoCard
