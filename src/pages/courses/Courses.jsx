import { useEffect } from "react";
import Container from "../../components/container/Container";
import AOS from "aos";
import "aos/dist/aos.css";
const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const courses = [
    {
      id: 1,
      name: "Matematika",
      description:
        "Asosiy algebra, geometriya va matematik tahlil bo'yicha chuqurlashtirilgan kurs.",
      duration: "6 oy",
      price: "500,000 UZS / oy",
      level: "O'rta",
      teacher: "Anvar Qosimov",
      schedule: "Dushanba - Payshanba, 10:00 - 12:00",
      students: 25,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Fizika",
      description:
        "Fizikaning asosiy qonunlari va amaliyotga oid masalalarni yechish kursi.",
      duration: "5 oy",
      price: "450,000 UZS / oy",
      level: "Oliy",
      teacher: "Madina Sobirova",
      schedule: "Seshanba - Juma, 14:00 - 16:00",
      students: 18,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Ingliz tili",
      description:
        "Ingliz tili grammatikasi, tinglash va gaplashish ko'nikmalarini rivojlantirish.",
      duration: "8 oy",
      price: "600,000 UZS / oy",
      level: "Boshlang'ich",
      teacher: "Alisher Karimov",
      schedule: "Dushanba - Juma, 16:00 - 18:00",
      students: 30,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Kimyo",
      description:
        "Kimyoning nazariy asoslari va laboratoriya amaliyotlari bo'yicha chuqur bilimlar.",
      duration: "4 oy",
      price: "400,000 UZS / oy",
      level: "O'rta",
      teacher: "Dilshod Yuldashev",
      schedule: "Chorshanba - Shanba, 10:00 - 12:00",
      students: 22,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Tarix",
      description:
        "Dunyo tarixi va O'zbekiston tarixining asosiy davrlari bo'yicha kurs.",
      duration: "7 oy",
      price: "500,000 UZS / oy",
      level: "O'rta",
      teacher: "Zilola Bekmurodova",
      schedule: "Dushanba - Payshanba, 12:00 - 14:00",
      students: 20,
      rating: 4.8,
    },
    {
      id: 6,
      name: "Geografiya",
      description:
        "Dunyo va O'zbekistonning tabiiy resurslari, iqlimi va geografik tuzilishi haqida bilimlar.",
      duration: "3 oy",
      price: "350,000 UZS / oy",
      level: "Boshlang'ich",
      teacher: "Shohrux Abdullayev",
      schedule: "Seshanba - Juma, 10:00 - 12:00",
      students: 15,
      rating: 4.5,
    },
    {
      id: 7,
      name: "Biologiya",
      description:
        "Biologiyaning asosiy tushunchalari va amaliy laboratoriya mashg'ulotlari.",
      duration: "6 oy",
      price: "450,000 UZS / oy",
      level: "Oliy",
      teacher: "Lola Shodmonova",
      schedule: "Dushanba - Payshanba, 14:00 - 16:00",
      students: 28,
      rating: 4.7,
    },
    {
      id: 8,
      name: "Rus tili",
      description:
        "Rus tili grammatikasi va so'z boyligini rivojlantirishga mo'ljallangan kurs.",
      duration: "6 oy",
      price: "550,000 UZS / oy",
      level: "O'rta",
      teacher: "Elena Vladimirovna",
      schedule: "Seshanba - Juma, 18:00 - 20:00",
      students: 24,
      rating: 4.9,
    },
    {
      id: 9,
      name: "Kompyuter savodxonligi",
      description:
        "Kompyuter asoslari va ofis dasturlari bilan ishlash bo'yicha kurs.",
      duration: "5 oy",
      price: "500,000 UZS / oy",
      level: "Boshlang'ich",
      teacher: "Bekzod Rahmonov",
      schedule: "Chorshanba - Shanba, 10:00 - 12:00",
      students: 20,
      rating: 4.6,
    },
    {
      id: 10,
      name: "Web dasturlash",
      description:
        "HTML, CSS va JavaScript texnologiyalaridan foydalanib, web saytlar yaratish kursi.",
      duration: "7 oy",
      price: "700,000 UZS / oy",
      level: "O'rta",
      teacher: "Muzaffar Sadullayev",
      schedule: "Dushanba - Payshanba, 16:00 - 18:00",
      students: 25,
      rating: 4.9,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
      <Container>
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-900">
          Bizning Kurslarimiz
        </h1>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="card bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-56 bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  {course.name}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2">{course.description}</p>
                <div className="flex justify-between items-center text-gray-700 mb-2">
                  <span className="font-medium">
                    Davomiyligi: {course.duration}
                  </span>
                  <span className="font-semibold text-blue-500">
                    {course.price}
                  </span>
                </div>
                <p className="text-gray-700">Daraja: {course.level}</p>
                <p className="text-gray-700">O'qituvchi: {course.teacher}</p>
                <p className="text-gray-700">Dars vaqti: {course.schedule}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-700">
                    O'quvchilar: {course.students}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-bold">
                      {course.rating}
                    </span>
                    <svg
                      className="w-5 h-5 text-yellow-500 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.75l-6.16 3.61 1.17-6.82L2 9.77l6.89-1 3.08-6.23 3.08 6.23L22 9.77l-5.01 4.77 1.17 6.82z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
