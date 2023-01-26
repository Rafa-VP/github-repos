import React from 'react'
import { Repository } from '../hooks/types'
import { Card, Grid, Text, Link, Badge } from "@nextui-org/react";

type CardProps = {
  repositories: Repository[]
}
function ReposCard({ repositories }: CardProps) {

  for (let repo of repositories) {
    if (repo.homepage && !String(repo.homepage).startsWith('htt')) repo.homepage = `https://${repo.homepage}`
    if (repo.homepage && String(repo.homepage).startsWith('http')) repo.homepage = repo.homepage
  }

  return (
    <div>
      <Grid.Container gap={1.5} justify="center">
        {repositories.length > 0 && repositories.map((repo) => (
          <Grid xs={12} sm={4} key={repo.id}>
            <Card
              className='repo-card'
              isPressable
              variant='flat'
              onPress={() => {
                if (repo.homepage) window.open(repo.homepage, '_blank')
              }}
            >
              <Card.Header>
                <img
                  alt="nextui logo"
                  src={repo.owner.avatar_url}
                  width="50px"
                  height="50px"
                  style={{ borderRadius: '7px' }}
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={11}>
                    <Text h5 css={{ lineHeight: "$xs" }}>
                      {repo.name}
                    </Text>
                  </Grid>
                  {repo.homepage && <Grid xs={1}>
                    <Badge enableShadow variant={'dot'} size={'xl'} color={'success'} />
                  </Grid>}
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>{repo.language}</Text>
                  </Grid>

                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  {repo.description}
                </Text>
              </Card.Body>
              <Card.Footer className='repo-card-footer' isBlurred>
                <Text size={'$sm'}>
                  {new Date(repo.created_at).toDateString()}
                </Text>
              </Card.Footer>
            </Card >
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );

}

export default ReposCard
