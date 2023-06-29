import Image from "next/image"
import axios from "axios"
import { moneyFormat } from "../utils"
import swal from "sweetalert"
import { toast } from "react-toastify"

export default function Order({ order }) {
  const { id, nombre, total, pedido } = order
  const handleClickUpdateOrder = async id => {
    swal({
      title: "¿Seguro que desea finalizar la orden?",
      text: "Una vez finalizada no se puede regresar el estado de la orden",
      icon: "warning",
      buttons: true,
      buttons: ["Cancelar", "¡Ya se entrego la orden!"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("La orden pendiente ha finalizado correctamente", {
          icon: "success",
        })
        changeOrderStatus(id)
      } else {
        swal("Se ha cancelado la acción");
      }
    })
  }

  const changeOrderStatus = async id => {
    try {
      await axios.post(`/api/orders/${id}`)
      toast.success('La orden se completo correctamente', {
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
          <div key={product.id} className="py-3 flex border-b last-of-type:border-0 items-center">
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/assets/img/${product.imagen}.jpg`}
                alt={`Imagen de ${product.nombre}`}
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold text-amber-500">{product.nombre}</h4>
              <p className="text-lg font-bold">Cantidad: {product.count}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black md:text-2xl lg:text-4xl text-amber-500">Total a pagar: {moneyFormat(total)}</p>
        <button
          type="button"
          onClick={() => handleClickUpdateOrder(id)}
          className="flex items-center bg-sky-600 hover:bg-sky-700 mt-5 p-3 md:p-1 md:px-5 lg:p-3 lg:px-10 text-white uppercase font-bold rounded-full shadow-lg transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >Completar Orden</button>
      </div>
    </div>
  )
}
