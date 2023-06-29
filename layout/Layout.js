import Head from "next/head"
import useFood from "../hooks/useFood"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import Sidebar from "../components/Sidebar"
import ProductModal from "../components/ProductModal"
import Steps from "../components/Steps"
import HamburgerNav from "../components/HamburgerNav"
import HamburgerContent from "../components/HamburgerContent"
import "react-toastify/dist/ReactToastify.css"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#__next')

export default function Layout({ children, page }) {
  const { modal, hamburgerMenu } = useFood()
  return (
    <>
      <Head>
        <title>Café - {page}</title>
        <meta name="description" content="Restaurante"/>
      </Head>
      {hamburgerMenu && <HamburgerContent />}
      <div className="md:flex">
        <aside className="hidden md:block md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 shadow-lg">
          <Sidebar />
        </aside>
        <aside className="bg-amber-100 block md:hidden xl:hidden 2xl:hidden py-5 shadow-lg">
          <HamburgerNav />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10 mt-5">
            <Steps />
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ProductModal />
        </Modal>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
