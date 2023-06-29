import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const prisma = new PrismaClient()
    const ordersComplete = await prisma.orden.findMany({ where: { estado: true } })
    res.status(200).json(ordersComplete)
  }
}
