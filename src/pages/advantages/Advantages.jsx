import React from "react";
import Container from "../../components/container/Container";

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      title: "Yuqori sifatli ta'lim dasturlari",
      description:
        "Gennis Campus zamonaviy va xalqaro ta'lim standartlariga mos keluvchi ta'lim dasturlarini taklif etadi. Talabalar o'z sohalarida chuqur bilimlarga ega bo'lishadi.",
    },
    {
      id: 2,
      title: "Tajriba va amaliyot imkoniyatlari",
      description:
        "Campusda o'qiyotgan talabalar uchun sohalar bo'yicha keng ko'lamli amaliyot dasturlari mavjud. Bu esa nazariy bilimlarni amaliyot bilan mustahkamlash imkonini beradi.",
    },
    {
      id: 3,
      title: "Talabalar uchun qulay muhit",
      description:
        "Gennis Campusda talabalar uchun qulay yashash sharoitlari va o'qish uchun barcha zaruriy vositalar bilan jihozlangan kampus muhitiga ega.",
    },
    {
      id: 4,
      title: "Xalqaro hamkorlik va almashuv dasturlari",
      description:
        "Campus xalqaro universitetlar bilan hamkorlik qiladi, talabalar uchun turli xil almashuv dasturlari va qo'shma loyihalarda qatnashish imkoniyatlari mavjud.",
    },
    {
      id: 5,
      title: "Kuchli professor-o'qituvchilar tarkibi",
      description:
        "Campusda yuqori malakali va o'z sohasida yetakchi hisoblangan professor-o'qituvchilar jamoasi talabalarga ta'lim beradi.",
    },
    {
      id: 6,
      title: "Innovatsion texnologiyalar va laboratoriyalar",
      description:
        "Gennis Campusda zamonaviy texnologiyalar va innovatsion laboratoriyalar mavjud bo'lib, talabalarga amaliy tajriba olish imkoniyatlari taqdim etiladi.",
    },
    {
      id: 7,
      title: "Karyera markazi va ish topish imkoniyatlari",
      description:
        "Talabalar karyera markazi orqali ish topish va o'z sohalarida amaliy tajriba olish imkoniyatiga ega bo'lishadi.",
    },
    {
      id: 8,
      title: "Qulay joylashuv",
      description:
        "Gennis Campus Toshkent shahrining markazida joylashgan bo'lib, talabalar uchun transport va turli xil xizmatlardan foydalanish qulay hisoblanadi.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Gennis Campus O'qish Afzalliklari
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {advantage.title}
              </h2>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Advantages;
