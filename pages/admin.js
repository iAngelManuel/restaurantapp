import useSWR from "swr"
import axios from "axios"
import AdminLayout from "../layout/AdminLayout";
import Order from "../components/Order";

export default function Admin() {
  const fetcher = () => axios('/api/orders').then(res => res.data)
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 100 })
  return (
    <AdminLayout page="Ordenes pendientes">
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Administra tus ordenes</p>
      {data && data.length ? data.map(order => (
        <Order
          key={order.id}
          order={order}
        />
      )) : 
      <p className="text-2xl my-10">No hay ordenes</p>
      }
    </AdminLayout>
  )
}
