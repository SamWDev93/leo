import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';
import { PrismaClient } from "@prisma/client";
import { getSession } from '@auth0/nextjs-auth0';

export default async function Page() {
  const session = await getSession();
  const user = session?.user;
  let giftIdeas = null;
  
  if (user) {
    const prisma = new PrismaClient();
    giftIdeas = await prisma.giftIdea.findMany();
  }

  if (user) {
    return (
      giftIdeas && giftIdeas.length > 0 &&
        <Table
          aria-label="Gift Ideas"
          className='w-full'
        >
          <TableHeader className='text-left'>
            <Column isRowHeader>Name</Column>
            <Column>Price</Column>
            <Column>Link</Column>
          </TableHeader>
          <TableBody>
          {giftIdeas.map((idea, index) => (
            <Row key={index}>
              <Cell>{idea.name}</Cell>
              <Cell>{idea.price.toString()}</Cell>
              <Cell>{idea.link}</Cell>
            </Row>
          ))}
          </TableBody>
        </Table>
    )
  }
  
  return (
    <div>Get lost</div>
  );
}
