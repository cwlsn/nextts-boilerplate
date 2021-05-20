import Head from 'next/head';
import { Box, Heading, Paragraph, Card } from 'theme-ui';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextTS Boilerplate</title>
      </Head>
      <Box as="main" padding={4}>
        <Card
          sx={{
            width: [300, 600],
            padding: [3, 4],
            marginX: 'auto',
          }}
        >
          <Heading as="h1">NextTS Boilerplate</Heading>
          <Paragraph>NextJS with TypeScript and Theme-UI.</Paragraph>
        </Card>
      </Box>
    </>
  );
}
