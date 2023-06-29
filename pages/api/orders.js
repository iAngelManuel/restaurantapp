import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  const prisma = new PrismaClient()

  if (req.method === "GET") {
    const orders = await prisma.orden.findMany({ where: { estado: false } })
    res.status(200).json(orders)
  }

  if (req.method === 'POST') {
    const order = await prisma.orden.create({
      data: {
        nombre: req.body.name,
        fecha: req.body.date,
        total: req.body.total,
        pedido: req.body.order
      }
    })
    res.status(200).json(order)
  }
}
