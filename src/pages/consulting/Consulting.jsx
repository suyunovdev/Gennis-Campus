import React from "react";
import Container from "../../components/container/Container";

const Consulting = () => {
  const services = [
    {
      id: 1,
      title: "Biznes Strategiyasi",
      description:
        "Biznesingizni rivojlantirish uchun samarali strategiyalar ishlab chiqamiz.",
    },
    {
      id: 2,
      title: "Moliyaviy Maslahatlar",
      description:
        "Moliyaviy resurslaringizni boshqarishda yordam beramiz va tahlil qilamiz.",
    },
    {
      id: 3,
      title: "IT Konsalting",
      description:
        "Texnologik yechimlar va infratuzilma bo'yicha maslahatlar taqdim etamiz.",
    },
    {
      id: 4,
      title: "Boshqaruv Maslahatlari",
      description:
        "Tashkilotingizning boshqaruv tizimini yaxshilash uchun tavsiyalar beramiz.",
    },
    {
      id: 5,
      title: "Marketing Strategiyalari",
      description:
        "Raqobatchilardan ajralib turish uchun samarali marketing strategiyalarini ishlab chiqamiz.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8">
          Konsalting Xizmatlarimiz
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Batafsil
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Consulting;
