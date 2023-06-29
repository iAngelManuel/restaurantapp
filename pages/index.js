import Layout from "../layout/Layout"
import useFood from "../hooks/useFood"
import Product from "../components/Product"

export default function Home() {
  const { actualCategorie } = useFood()
  return (
    <Layout page={`Menú ${actualCategorie?.nombre}`}>
      <h1 className="text-4xl font-black">{actualCategorie?.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuacion</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {actualCategorie?.productos?.map(product => (
          <Product
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Layout>
  )
}
