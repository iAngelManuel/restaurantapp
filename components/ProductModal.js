import { useState, useEffect } from "react"
import Image from "next/image"
import useFood from "../hooks/useFood"
import { moneyFormat } from "../utils/index.js"

export default function ProductModal() {
  const { product, handleChangeModal, handleAddOrder, order } = useFood()
  const [ count, setCount ] = useState(1)
  const [ edition, setEdition ] = useState(false)
  useEffect(() => {
    if (order.some(p => p.id === product.id)) {
      const productOrder = order.find(p => p.id === product.id)
      setEdition(true)
      setCount(productOrder.count)
    }
  }, [product, order])
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${product.imagen}.jpg`}
          alt={`Imagen producto ${product.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mt-5">{product.nombre}</h2>
        <p className="mt-5 font-black text-3xl text-green-600">{moneyFormat(product.precio)}</p>
        <div className="flex justify-center gap-5 mt-5 mb-5">
          <button
            type="button"
            onClick={() => {
              if (count <= 1) return
              setCount(count - 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <p className="text-3xl">{count}</p>
          <button
            type="button"
            onClick={() => {
              if (count >= 5) return
              setCount(count + 1)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
          <button
            type="button"
            onClick={() => {
              handleAddOrder({...product, count})
              handleChangeModal()
            }}
            className="bg-sky-600 hover:bg-sky-700 w-full mt-5 p-2 text-white uppercase font-bold rounded-full shadow-lg block transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-105 self-end"
          >{edition ? "Guardar Cambios" : "Agregar al pedido"}</button>
      </div>
    </div>
  )
}
