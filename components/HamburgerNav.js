import Image from "next/image"
import useFood from "../hooks/useFood"

export default function HamburgerNav() {
  const { handleClickHamburgerMenu } = useFood()
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2 mx-5">
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
      <div className="w-2/2 mx-5">
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
  )
}
