import { useState, useEffect } from "react";
import Container from "../../components/container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Parolni ko'rish yoki yashirish uchun holatni boshqarish
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Parol ko'rinishini o'zgartiruvchi funksiya
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-500 min-h-screen">
      <Container>
        <div className="flex justify-between items-center w-full h-[90vh]">
          {/* Left section - text */}
          <div className="left w-[50%] px-8" data-aos="fade-right">
            <h1 className="text-6xl font-extrabold text-white leading-tight tracking-wide">
              GENNIS <br /> “Muvaffaqiyatni istaganlar uchun”
            </h1>
            <p className="text-lg mt-8 text-white leading-relaxed">
              GENNIS ta'lim markazi sifatida bizning missiyamiz – har bir
              talabamizning intellektual va shaxsiy o'sishini
              qo'llab-quvvatlashdir. Biz yuqori sifatli ta'lim, innovatsion
              o'quv dasturlari va iliq, qo'llab-quvvatlovchi muhit yaratish
              orqali talabalarning muvaffaqiyatga erishishlariga yordam beramiz.
              Bizning maqsadimiz – o'quvchilarimizning bilim va ko'nikmalarini
              rivojlantirish, ularni global raqobatga tayyorlash va ularga
              o'zlarining intilishlariga erishishlari uchun barcha zarur
              vositalarni taqdim etishdir. “Muvaffaqiyatni istaganlar uchun”
              GENNIS sizning ishonchli hamkoringizdir.
            </p>
          </div>

          {/* Right section - form */}
          <div
            data-aos="fade-left"
            className="right w-[40%] h-[100%] flex flex-col justify-center items-center"
          >
            <form
              action=""
              className="flex flex-col items-center justify-between h-[500px] w-full p-12 gap-6 bg-white shadow-lg rounded-lg"
            >
              <h1 className="text-3xl font-semibold text-gray-700">
                Ro’yxatdan o’tish
              </h1>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ismingizni kiriting"
                required
                className="border-2 border-gray-300 rounded-lg outline-none px-5 py-2 w-[90%] focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
              <div className="relative w-[90%]">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Parolni kiriting"
                  required
                  className="border-2 border-gray-300 rounded-lg outline-none px-5 py-2 w-full focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-3 text-gray-500 cursor-pointer"
                >
                  {passwordVisible ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
              <select
                name=""
                id=""
                className="border-2 border-gray-300 rounded-lg w-[90%] py-3 px-4 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              >
                <option value="default" default>
                  Filiallar
                </option>
                <option value="chirchiq">Chirchiq</option>
                <option value="gazalkent">Gazalkent</option>
                <option value="sergeli">Sergeli</option>
                <option value="xo'jakent">Xo'jakent</option>
                <option value="nurafshon">Nurafshon</option>
              </select>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-[50%] py-2 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
              >
                Registratsiya
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
