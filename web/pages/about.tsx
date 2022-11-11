import Link from 'next/link'

import { Container, Title } from '@mantine/core'

export const AboutPage: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to Vate</Title>
      <p>
        This is a web3 voting app
      </p>
      <div>
        How it works
        <ul>
          <li>User enters email</li>
          <li>We use Email to create a private key</li>
          <li>Everytime you vote you get coins</li>
          <li>Repeat</li>
        </ul>
      </div>
      <div>
        For more information
         <Link href="/">home page</Link>
      </div>
    </Container>
  )
}

export default AboutPage
