import { PrismaClient } from '@prisma/client'; 
 
const prisma = new PrismaClient(); 
 
async function main() { 
  await prisma.book.deleteMany(); 
  await prisma.user.deleteMany(); 
 
  const user1 = await prisma.user.create({ 
    data: { 
      name: 'Ahmed Ali', 
      email: 'ahmed@example.com', 
      password: '123456', 
    }, 
  }); 
 
  const user2 = await prisma.user.create({ 
    data: { 
      name: 'Sara Mohamed', 
      email: 'sara@example.com', 
      password: '123456', 
    }, 
  }); 
 
  await prisma.book.createMany({ 
    data: [ 
      { 
        title: 'Clean Code', 
        author: 'Robert C. Martin', 
        description: 'A guide to writing clean and maintainable code.', 
        publishedYear: 2008, 
        pages: 464, 
        userId: user1.id, 
      }, 
      { 
        title: 'The Pragmatic Programmer', 
 
        author: 'Andrew Hunt', 
        description: 'A practical guide to software development.', 
        publishedYear: 1999, 
        pages: 352, 
        userId: user1.id, 
      }, 
      { 
        title: 'Design Patterns', 
        author: 'Erich Gamma', 
        description: 'Reusable solutions to common software design problems.', 
        publishedYear: 1994, 
        pages: 395, 
        userId: user2.id, 
      }, 
    ], 
  }); 
 
  console.log('Database seeded successfully'); 
} 
 
main() 
  .catch((error) => { 
    console.error(error); 
    process.exit(1); 
  }) 
  .finally(async () => { 
    await prisma.$disconnect();})