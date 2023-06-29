import { useRouter } from "next/router"
import Link from "next/link"

export default function AdminSidebar() {
  const router = useRouter()
  return (
    <nav className="md:w-auto flex justify-center md:flex-col md:justify-start mt-10">
      <ul className="space-y-2 md:space-y-3">
        <li className={router.pathname === '/admin' ? 'bg-amber-500 border border-amber-200 p-2 rounded-lg shadow-lg' : 'p-2 bg-gray-300 hover:bg-gray-400 border border-gray-300 rounded-lg shadow-lg'}>
          <Link href="/admin" className="block font-bold">Ordenes pendientes</Link>
        </li>
        <li className={router.pathname === '/admin/complete' ? 'bg-amber-500  border border-amber-400 p-2 rounded-lg shadow-lg' : 'p-2 bg-gray-300 hover:bg-gray-400 border border-gray-300 rounded-lg shadow-lg'}>
          <Link href="/admin/complete" className="block font-bold">Registro de Ordenes</Link>
        </li>
      </ul>
    </nav>
  )
}
