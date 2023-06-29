import Image from "next/image"
import useFood from "../hooks/useFood"
import Categorie from "./Categorie"

export default function Sidebar() {
  const { categories } = useFood()
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Logo"
      />
      <nav className="mt-10">
        {categories.map(categorie => (
          <Categorie
            key={categorie.id}
            categorie={categorie}
          />
        ))}
      </nav>
    </>
  )
}
