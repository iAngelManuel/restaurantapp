import { useEffect } from "react"
import useFood from "../../hooks/useFood"
import useSWR from "swr"
import axios from "axios"
import AdminLayout from '../../layout/AdminLayout'
import OrdersComplete from "../../components/OrdersComplete"

export default function Admin() {
  const { setLogOrder } = useFood()
  const fetcher = () => axios('/api/orders-complete').then(res => res.data)
  const { data, error, isLoading } = useSWR('/api/orders-complete', fetcher, { refreshInterval: 100 })
  useEffect(() => {
    setLogOrder(data)
  }, [data, setLogOrder])
  return (
    <AdminLayout page="Ordenes completadas">
      <h1 className="text-4xl font-black">Panel de Administración</h1>
      <p className="text-2xl my-10">Registro de ordenes completadas</p>
      {data && data.length ? data.map(orderComplete => (
        <OrdersComplete
          key={orderComplete.id}
          orderComplete={orderComplete}
        />
        )) : (
        <p className="text-2xl my-10">No hay ordenes completadas</p>
      )}
    </AdminLayout>
  )
}
