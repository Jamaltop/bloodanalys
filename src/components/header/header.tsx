"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user, updateName, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={`bg-[url('/blood.png')] bg-cover `}>
      <div className="container gap-2 flex items-center justify-between py-4">
        <h1 className="text-[24px] whitespace-nowrap text-white font-bold">Blood Analyzer</h1>
        {!user ? (
          <Link href={`/login`}>
            <button className="w-[115px] h-[41px] flex items-center justify-center border-0 rounded-[30px] bg-[#D63626] text-white">
              Sign in
            </button>
          </Link>
        ) : (
          <div className="relative flex items-center gap-3">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              title="Profile menu"
              className="w-9 h-9 rounded-full bg-[#D63626] flex items-center justify-center"
            >
              <UserIcon className="w-5 h-5 text-white" />
            </button>
            <div className="text-white font-medium">{user.username}</div>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded shadow-lg text-sm text-gray-800 z-40">
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                  onClick={() => {
                    const newName = window.prompt("Введите новый никнейм:", user.username);
                    if (newName && newName.trim()) updateName(newName.trim());
                    setMenuOpen(false);
                  }}
                >
                  Поменять имя
                </button>
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                  onClick={() => {
                    const ok = window.confirm("Сменить аккаунт? Вы выйдете из текущего профиля.");
                    if (ok) {
                      logout();
                      setMenuOpen(false);
                      router.push("/register");
                    } else setMenuOpen(false);
                  }}
                >
                  Сменить аккаунт
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;