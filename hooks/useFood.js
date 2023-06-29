import { useContext } from "react"
import { FoodContext } from "../context/FoodProvider"

export default function useFood() {
  return useContext(FoodContext)
}
