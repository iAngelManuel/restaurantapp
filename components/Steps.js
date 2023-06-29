import { useRouter } from "next/router"

const steps = [
  { step: 1, name: "Menú", url: "/" },
  { step: 2, name: "Resumen", url: "/order" },
  { step: 3, name: "Datos y Total", url: "/total" }
]

export default function Steps() {
  const router = useRouter()

  const getProcess = () => {
    let valor
    switch (router.pathname) {
      case "/":
        valor = "5%"
      break
      case "/order":
        valor = "50%"
      break
      case "/total":
        valor = "100%"
      break
      default:
        valor = "0%"
      break
    }
    return valor
  }
  
  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map(step => (
          <button
            key={step.step}
            onClick={() => router.push(step.url)}
            className="text-lg md:text-2xl font-bold text-gray-700"
          >{step.name}</button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{ width: getProcess()}}>
        </div>
      </div>
    </>
  )
}
