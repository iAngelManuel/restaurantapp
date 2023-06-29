import Image from "next/image"
import useFood from "../hooks/useFood"
import { moneyFormat } from "../utils"

export default function Product({ product }) {
  const { nombre, precio, imagen } = product
  const { handleSetProduct, handleChangeModal } = useFood()
  return (
    <div className="bg-gray-100 rounded-lg shadow-2xl border p-3">
      <Image
        width={300}
        height={200}
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-green-600">{moneyFormat(precio)}</p>
        <button
          type="button"
          onClick={() => {
            handleChangeModal()
            handleSetProduct(product)
          }}
          className="bg-sky-600 hover:bg-sky-700 w-full mt-5 p-2 text-white uppercase font-bold rounded-full shadow-lg block transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >Ver Producto</button>
      </div>
    </div>
  )
}
