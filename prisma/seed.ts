import { PrismaClient } from '@prisma/client'
import { acts, sections } from '../lib/data'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Clear existing data
  await prisma.section.deleteMany()
  await prisma.bookmark.deleteMany()
  await prisma.act.deleteMany()

  for (const act of acts) {
    const createdAct = await prisma.act.create({
      data: {
        id: act.id,
        title: act.title,
        year: act.year,
        description: act.description,
        type: act.type,
        updatedAt: new Date(act.lastUpdated),
      },
    })
    console.log(`Created act with id: ${createdAct.id}`)
  }

  for (const section of sections) {
    // Some sections in mock data reference acts that don't exist in the acts array (e.g., rule-it-rules)
    // Let's check if the act exists first
    const actExists = await prisma.act.findUnique({
      where: { id: section.actId }
    })

    if (actExists) {
      const createdSection = await prisma.section.create({
        data: {
          id: section.id,
          actId: section.actId,
          number: section.sectionNumber || section.nodeType,
          title: section.title,
          content: section.text,
          updatedAt: new Date(section.lastUpdated),
        },
      })
      console.log(`Created section with id: ${createdSection.id}`)
    } else {
      console.log(`Skipped section ${section.id} because act ${section.actId} does not exist.`)
    }
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
