import Image from "next/image"
import useFood from "../hooks/useFood"
import { moneyFormat } from "../utils/"

export default function ProductsOrder(product) {
  const { handleEditOrder, handleDeleteOrder } = useFood()
  const { product: { nombre, imagen, count, precio, id } } = product
  return (
    <div className="shadow-lg rounded-lg p-5 mb-3 md:flex gap-10 items-center">
      <div className="md:w-3/6 lg:w-1/6">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${imagen}.jpg`}
          alt={`Imagen de ${nombre}`}
        />
      </div>
      <div className="md:w-3/6 lg:w-4/6 pt-5 md:pt-0">
        <p className="text-2xl text-amber-500 font-bold">{nombre}</p>
        <p className="md:text-xl font-bold mt-2">Cantidad: {count}</p>
        <p className="text-xl text-gray-700 font-bold mt-2">Valor c/u: <span className="text-green-600">{moneyFormat(precio)}</span></p>
        <p className="text-sm text-gray-700 font-bold mt-2">Subtotal:  <span className="text-sm text-green-600">{moneyFormat(precio * count)}</span></p>
      </div>
      <div className="flex justify-evenly gap-2 md:flex-row">
        <button
          type="button"
          onClick={() => handleEditOrder(id)}
          className="flex gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full uppercase shadow-lg mt-5 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        Editar</button>
        <button
          type="button"
          onClick={() => handleDeleteOrder(id)}
          className="flex gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full uppercase shadow-lg mt-5 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        Borrar</button>
      </div>
    </div>
  )
}
