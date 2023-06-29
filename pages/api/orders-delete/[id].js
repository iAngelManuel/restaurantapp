import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const prisma = new PrismaClient()
    const { id } = req.query
    const order = await prisma.orden.delete({ where: { id: Number(id) }
    })
    res.json(order)
  }
}
