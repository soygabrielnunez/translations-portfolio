import { Client } from '@notionhq/client'

export default defineEventHandler(() => {
  const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    })
  return notion.databases.query({
      database_id: process.env.DATABASE_ID || ''
  })
})