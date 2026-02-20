"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/shadcn/button";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    route.push("/");
  };

  return (
    <main className="flex justify-between gap-5 flex-col items-center px-6 py-8 md:p-[35px] w-full min-h-screen bg-[#FFFFFF]">
      <div className="rounded-[7px] bg-[#EB5757] flex w-full h-[122px] md:p-[40px] px-4 py-4 justify-between items-center">
        <h1 className="text-white text-[30px] whitespace-nowrap font-extrabold">
          Blood Analyzer<span>.</span>
        </h1>
        <div />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-6 md:gap-0">
        <div className="hidden md:flex md:w-[50%] bg-[#EB5757] h-full items-center justify-center">
          <img src="/loginBack.png" alt="" className="max-w-full object-contain" />
        </div>

        <div className="w-full md:w-[50%] gap-10 md:gap-[80px] md:pl-[39px] flex flex-col items-center bg-white py-8 md:py-0">
          <div className="w-full items-center justify-center flex gap-[65px]">
            <Link className="text-[30px] font-medium text-[#eb5757]" href={"/login"}>
              Login
            </Link>
            <Link className="text-[30px] font-medium text-[#828282]" href={"/register"}>
              Register
            </Link>
          </div>

          <form className="w-full max-w-lg px-2 md:px-0 flex flex-col gap-6 md:gap-[30px]" onSubmit={handleLogin}>
            <div className="flex flex-col gap-3 md:gap-[15px]">
              <label className="text-[18px] md:text-[20px] font-medium leading-6 text-[#4F4F4F]" htmlFor="email">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                placeholder="rahimlisarkhan@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#FFE7E7] font-bold text-[#4f4f4f] placeholder:font-normal placeholder:text-[16px] md:placeholder:text-[18px] leading-[24px] w-full h-[56px] md:h-[68px] pl-4 md:pl-[24px] rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3 md:gap-[15px] mb-6 md:mb-[80px]">
              <label className="text-[18px] md:text-[20px] font-medium leading-6 text-[#4F4F4F]" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="adminadmin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#FFE7E7] font-bold text-[#4f4f4f] placeholder:text-[16px] md:placeholder:text-[18px] placeholder:font-normal leading-[24px] w-full h-[56px] md:h-[68px] pl-4 md:pl-[24px] pr-12 md:pr-[60px] rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 md:right-[24px] top-3 md:top-[22px] text-[#4f4f4f] hover:text-[#EB5757] transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full bg-[#EB5757] mt-0 md:mt-[-40px] h-[56px] md:h-[68px] rounded-[7px] text-[18px] md:text-[22px] hover:bg-[#eb5757c5] hover:text-white font-medium text-white`}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
