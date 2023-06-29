import Layout from "../layout/Layout"
import useFood from "../hooks/useFood"
import ProductsOrder from "../components/ProductsOrder"

export default function Order() {
  const { order } = useFood()
  return (
    <Layout page="Resumen">
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>
      {order.length === 0 ? (
        <p className="text-center text-2xl font-bold">No hay elementos</p>
      ) : (
        order.map(product => (
          <ProductsOrder
            key={product.id}
            product={product}
          />
        ))
      )}
    </Layout>
  )
}
