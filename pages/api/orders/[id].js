import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id } = req.query
    const prisma = new PrismaClient()
    const updateOrder = await prisma.orden.update({ where: { id: parseInt(id) }, data: { estado: true } })
    res.status(200).json(updateOrder)
    console.log(updateOrder)
  }
}
