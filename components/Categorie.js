import Image from "next/image"
import useFood from "../hooks/useFood"

export default function Categorie({ categorie }) {
  const { actualCategorie, handleClickCategorie } = useFood()
  const { nombre, icono, id } = categorie
  return (
    <div className={`${actualCategorie?.id === id ? "bg-amber-500" : ""} flex items-center gap-3 md:gap-4 w-full p-1 md:p-5 mb-3 border hover:bg-amber-500 rounded-full shadow-lg`}>
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={nombre}
      />
      <button
        type="button"
        onClick={() => handleClickCategorie(id)}
        className="text-2xl md:text-lg font-bold cursor-pointer"
      >{nombre}</button>
    </div>
  )
}
