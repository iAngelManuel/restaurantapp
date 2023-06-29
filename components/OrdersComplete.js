import { Fragment } from "react"
import Image from "next/image"
import axios from "axios"
import { moneyFormat } from "../utils"
import swal from "sweetalert"
import { toast } from "react-toastify"

export default function OrdersComplete({ orderComplete }) {
  const { id, nombre, total, pedido } = orderComplete
  const handleClickDeleteOrder = async id => {
    swal({
      title: "¿Seguro que desea eliminar la orden?",
      text: "Una vez eliminada no se puede recuperar",
      icon: "warning",
      buttons: true,
      buttons: ["Cancelar", "¡Eliminar!"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("El registro se ha eliminado correctamente", {
          icon: "success",
        })
        deleteOrderDB(id)
      } else {
        swal("Se ha cancelado la acción")
      }
    })
  }

  const deleteOrderDB = async id => {
    try {
      await axios.delete(`/api/orders-delete/${id}`)
      toast.success('La orden se ha eliminado correctamente', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } catch (err) {
      console.log(err)
      toast.error('Hubo un error con la conexion, intentalo mas tarde', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-bold">Orden: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>
      <div className="">
        {pedido.map(product => (
          <Fragment key={product.id} >
            <div className="py-3 flex border-b last-of-type:border-0 items-center">
              <div className="w-32">
                <Image
                  width={400}
                  height={500}
                  src={`/assets/img/${product.imagen}.jpg`}
                  alt={`Imagen de ${product.nombre}`}
                />
              </div>
              <div className="py-3 px-5 space-y-2 last-of-type:space-y-0">
                <h4 className="text-xl font-bold text-amber-500">{product.nombre}</h4>
                <p className="text-lg font-bold">Cantidad: {product.count}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-xl md:text-2xl lg:text-4xl text-amber-500">Total recibido: {moneyFormat(total)}</p>
        <div className="md:flex md:items-center md:justify-between my-10">
          <button
            onClick={() => handleClickDeleteOrder(id)}
            type="button"
            className="flex items-center bg-red-600 hover:bg-red-700 mt-5 p-3 md:p-1 md:px-5 lg:p-3 lg:px-10 text-white uppercase font-bold rounded-full shadow-lg transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Eliminar registro</button>
        </div>
      </div>
    </div>
  )
}
