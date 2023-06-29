import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
import useFood from "../hooks/useFood"
import { moneyFormat } from "../utils"

export default function HamburgerContentAdmin() {
  const { logOrder, totalLog, logEye, handleClickLogEye, handleClickHamburgerMenu } = useFood()
  const router = useRouter()
  return (
    <>
      <nav className="bg-amber-100 shadow-2xl rounded-lg w-72 min-h-full z-10 fixed">
        <div className="flex justify-between items-center">
          <div className="w-1/2 mx-5 mt-5">
            <button type="button" onClick={handleClickHamburgerMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="w-2/2 mx-5 mt-3">
            <div>
              <Image
                width={50}
                height={50}
                src="/assets/img/logo.svg"
                alt="imagen logotipo"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-full">
            <ul className="flex flex-col">
              <li className="mx-5 my-5">
                <Link
                  href="/admin"
                  className={`${
                    router.pathname === "/admin" ? "bg-amber-200 p-3" : ""
                  }`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Ordenes Pendientes
                </Link>
              </li>
              <li className="mx-5 my-5">
                <Link
                  href="/admin/complete"
                  className={`${
                    router.pathname === "/admin/complete"
                      ? "bg-amber-200 p-3"
                      : ""
                  }`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Registro de ordenes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {logOrder?.length > 0 && router.pathname === "/admin/complete" && (
          <div className="flex justify-center mt-10">
            <button type="button" onClick={handleClickLogEye}>
              {logEye ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
        {totalLog && logEye && router.pathname === "/admin/complete" && (
          <div className="bg-amber-200 space-y-5 mx-10 shadow-lg rounded-lg">
            <p className="text-center text-xl font-bold">
              Total de ordenes:{" "}
              <span className="font-normal text-green-600"></span>
              {logOrder?.length}
            </p>
            <p className="text-center text-xl font-bold">
              Total de ingreso:{" "}
              <span className="font-normal text-green-600">
                {moneyFormat(totalLog)}
              </span>
            </p>
          </div>
        )}
      </nav>
    </>
  )
}
