"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <main className={`flex justify-between gap-5 flex-col items-center px-6 py-8 md:p-[35px] w-full min-h-screen bg-[#FFFFFF]`}>
      <div className={`rounded-[7px] bg-[#EB5757] flex w-full h-[122px] md:p-[40px] px-4 py-4 justify-between items-center`}>
        <h1 className={`text-white text-[30px] whitespace-nowrap font-extrabold`}>
          Blood Analyzer<span>.</span>
        </h1>
        <div />
      </div>
      <div className={`w-full flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-6 md:gap-0`}>
        <div className={`hidden md:flex md:w-[50%] bg-[#EB5757] h-full items-center justify-center`}>
          <img src="/RegisterBack.png" alt="" className="max-w-full object-contain" />
        </div>
        <div className={`w-full md:w-[50%] gap-10 md:gap-[80px] md:pl-[39px] h-full flex flex-col items-center bg-white py-8 md:py-0`}>
          <div className={`w-full items-center justify-center flex gap-[65px]`}>
            <Link className={`text-[30px] font-medium  text-[#828282] `} href={"/login"}>
              Login
            </Link>
            <Link className={`text-[30px] font-medium text-[#eb5757]`} href={"/register"}>
              Register
            </Link>
          </div>
          <form onSubmit={handleSubmit} className={` w-full max-w-lg px-2 md:px-0 flex flex-col gap-6 md:gap-[25px]`}>
            <div className={`flex flex-col gap-3 md:gap-[15px]`}>
              <label className={`text-[18px] md:text-[20px] font-medium leading-6 tracking-[3%] text-[#4F4F4F] `} htmlFor="fullname">
                Full Name
              </label>
              <input
                onChange={(e) => handleInputChange('fullname', e.target.value)}
                value={formData.fullname}
                type="text"
                placeholder="Sarkhan Rahimli"
                className={`bg-[#FFE7E7] font-bold  text-[#4F4F4F] placeholder:font-normal placeholder:text-[16px] placeholder:text-[#4f4f4f] leading-[24px] w-full h-[56px] md:h-[68px] pl-4 md:pl-[24px] rounded-md`}
                required
              />
            </div>
            <div className={`flex flex-col gap-3 md:gap-[15px]`}>
              <label className={`text-[18px] md:text-[20px] font-medium leading-6 tracking-[3%] text-[#4F4F4F]`} htmlFor="username">
                Username
              </label>
              <input
                onChange={(e) => handleInputChange('username', e.target.value)}
                value={formData.username}
                placeholder="rahimlisarkhan"
                className={`bg-[#FFE7E7] font-bold  text-[#4f4f4f] placeholder:font-normal  placeholder:text-[16px] placeholder:text-[#4f4f4f] leading-[24px]  w-full h-[56px] md:h-[68px]  pl-4 md:pl-[24px] rounded-md`}
                type="text"
                required
              />
            </div>

            <div className={`flex flex-col gap-3 md:gap-[15px]`}>
              <label className={`text-[18px] md:text-[20px] font-medium leading-6 tracking-[3%] text-[#4F4F4F]`} htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => handleInputChange('email', e.target.value)}
                value={formData.email}
                placeholder="rahimlisarkhan@gmail.com"
                className={`bg-[#FFE7E7] font-bold  text-[#4f4f4f] placeholder:font-normal placeholder:text-[16px] placeholder:text-[#4f4f4f] leading-[24px]  w-full h-[56px] md:h-[68px]  pl-4 md:pl-[24px] rounded-md`}
                type="email"
                required
              />
            </div>

            <div className={`flex flex-col gap-3 md:gap-[15px]`}>
              <label className={`text-[18px] md:text-[20px] font-medium leading-6 tracking-[3%] text-[#4F4F4F]`} htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  value={formData.password}
                  placeholder="adminadmin"
                  className={`bg-[#FFE7E7] font-bold  text-[#4f4f4f]  placeholder:text-[16px] placeholder:text-[#4f4f4f] placeholder:font-normal leading-[24px]  w-full h-[56px] md:h-[68px]  pl-4 md:pl-[24px] pr-12 md:pr-[60px] mb-0 md:mb-[52px] rounded-md`}
                  type={showPassword ? "text" : "password"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 md:right-[24px] top-3 md:top-[22px] text-[#4f4f4f] hover:text-[#EB5757] transition-colors cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={24} />
                  ) : (
                    <Eye size={24} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`w-full bg-[#EB5757] mt-0 md:mt-[-40px] h-[56px] md:h-[68px] rounded-[7px] text-[18px] md:text-[22px] font-medium text-white hover:bg-[#eb5757c5]`}
            >
              Register
            </button>
          </form>
        </div>
      </div>     
    </main>
  );
};

export default RegisterPage;
