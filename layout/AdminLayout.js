import Head from "next/head"
import Image from "next/image"
import useFood from "../hooks/useFood"
import AdminSidebar from "../components/AdminSidebar"
import HamburgerNav from "../components/HamburgerNav"
import HamburgerContentAdmin from "../components/HamburgerContentAdmin"
import TotalAdminLog from "../components/TotalAdminLog"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function AdminLayout({ children, page }) {
  const { hamburgerMenu } = useFood()
  console.log(hamburgerMenu)
  return (
    <>
      <Head>
        <title>Admin - {page}</title>
        <meta name="description" content="Administrador Cafetería" />
      </Head>
      {hamburgerMenu && <HamburgerContentAdmin />}
      <div className="md:flex">
        <aside className="hidden md:block md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 shadow-lg">
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
          />
          <AdminSidebar />
          <TotalAdminLog />
        </aside>
        <aside className="bg-amber-100 block md:hidden xl:hidden 2xl:hidden py-5 shadow-lg">
          <HamburgerNav />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}
