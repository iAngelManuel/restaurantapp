import { useEffect, useCallback } from "react"
import Layout from "../layout/Layout"
import useFood from "../hooks/useFood"
import { moneyFormat } from "../utils"

export default function Total() {
  const { order, name, setName, postOrder, total } = useFood()
  const checkOrder = useCallback(() => {
    return order.length === 0 || name === '' || name.length < 3
  }, [order, name])

  useEffect(() => {
    checkOrder()
  }, [order, checkOrder])

  const putOrder = e => {
    e.preventDefault()
    postOrder(e)
  }
  return (
    <Layout page="Total y confirmar pedido">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación...</p>
      <form
        onSubmit={e => putOrder(e)}
      >
        <div>
          <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="ej. Angel"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-gray-100 w-full lg:w-1/3 mt-3 p-2 rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">Total a pagar: <span className="font-bold">{moneyFormat(total)}</span></p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar Pedido"
            desabled={`${checkOrder()}`}
            className={`${checkOrder() ? "bg-sky-200" : "bg-sky-500 hover:bg-sky-700 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110" } w-auto mt-5 p-2 text-white text-center uppercase font-bold rounded-lg shadow-lg block`}
          />
        </div>
      </form>
    </Layout>
  )
}
