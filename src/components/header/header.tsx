import Link from "next/link"



const Header = () => {
  return (
    <header className={`bg-[url('/blood.png')] bg-cover `}>
      <div className="container gap-2 flex items-center justify-between py-4">
        <h1 className="text-[24px] whitespace-nowrap text-white font-bold">Blood Analyzer</h1>
          <Link href={`/login`}>
            <button className="w-[115px] h-[41] flex items-center justify-center border-0 rounded-[30px] bg-[#D63626] text-white">
              Sign up
            </button>
          </Link>
      </div>
    </header>
  )
}

export default Header