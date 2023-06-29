import { useState, useEffect, createContext } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"

export const FoodContext = createContext()

export default function FoodProvider({ children }) {
  const [ categories, setCategories ] = useState([])
  const [ actualCategorie, setActualCatogorie ] = useState({})
  const [ product, setProduct ] = useState({})
  const [ modal, setModal ] = useState(false)
  const [ order, setOrder ] = useState([])
  const [ step, setStep ] = useState(1)
  const [ name, setName ] = useState('')
  const [ total, setTotal ] = useState(0)
  const [ logOrder, setLogOrder ] = useState([])
  const [ totalLog, setTotalLog ] = useState(0)
  const [ logEye, setLogEye ] = useState(false)
  const [ hamburgerMenu, setHamburgerMenu ] = useState(false)
  const router = useRouter()

  const getCategories = async () => {
    const { data } = await axios("/api/categories")
    setCategories(data)
  }
  
  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setActualCatogorie(categories[0])
  }, [categories])

  useEffect(() => {
    const newTotal = order.reduce((total, product) => (product.precio * product.count) + total, 0)
    setTotal(newTotal)
  }, [order])

  useEffect(() => {
    const newTotalLog = logOrder?.reduce((total, order) => order.total + total, 0)
    setTotalLog(newTotalLog)
  }, [logOrder, totalLog])

  const handleClickCategorie = id => {
    const categorie = categories.filter(c => c.id === id)
    setActualCatogorie(categorie[0])
    router.push('/')
  }

  const handleSetProduct = product => {
    setProduct(product)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  const handleAddOrder = ({categoriaId, ...product }) => {
    if (order.some(p => p.id === product.id)) {
      const updateOrder = order.map(p => p.id === product.id ? product : p)
      setOrder(updateOrder)
      toast.info('Has actualizado la cantidad del producto', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } else {
      setOrder([...order, product])
      toast.success('Producto agregado correctamente', {
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

  const handleEditOrder = id => {
    const updateProduct = order.filter(p => p.id === id)
    setProduct(updateProduct[0])
    setModal(!modal)
  }

  const handleDeleteOrder = id => {
    const deleteOrder = order.filter(p => p.id !== id)
    setOrder(deleteOrder)
    toast.info('Has eliminado el producto del pedido', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const postOrder = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/orders', {
        name,
        total,
        order,
        date: `${Date.now().toString()}`
      })
      setActualCatogorie(categories[0])
      setOrder([])
      setName('')
      setTotal(0)
      toast.success('Pedido realizado correctamente', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
      setTimeout(() => router.push('/'), 3000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickLogEye = () => {
    setLogEye(!logEye)
  }

  const handleClickHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <FoodContext.Provider
      value={{
        categories,
        actualCategorie,
        handleClickCategorie,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddOrder,
        order,
        handleEditOrder,
        handleDeleteOrder,
        name,
        setName,
        postOrder,
        total,
        setLogOrder,
        logOrder,
        totalLog,
        logEye,
        handleClickLogEye,
        hamburgerMenu,
        handleClickHamburgerMenu
      }}>{children}</FoodContext.Provider>
  )
}
