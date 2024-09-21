import React from "react";
import Container from "../../components/container/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const newsArticles = [
    {
      id: 1,
      title: "Gennis Campus O'qituvchilari Bahorgi Konferensiyada",
      date: "2024-05-15",
      content:
        "Gennis Campus o'qituvchilari o'z bilimlarini oshirish va tajriba almashish maqsadida bahorgi konferensiyada ishtirok etdilar. Konferensiya davomida zamonaviy ta'lim texnologiyalari va pedagogik yondashuvlar muhokama qilindi.",
    },
    {
      id: 2,
      title: "Talabalar Yozgi Amaliyotga Yo'l oldi",
      date: "2024-06-10",
      content:
        "Gennis Campus talabalarining yozgi amaliyoti boshlanganini e'lon qilamiz. Talabalar amaliyot davomida o'z mutaxassisliklari bo'yicha amaliy tajriba orttiradilar.",
    },
    {
      id: 3,
      title: "Yangi Kurslar Ommaviy Davom Etmoqda",
      date: "2024-06-20",
      content:
        "Yangi kurslar ro'yxati e'lon qilindi. Talabalar uchun zamonaviy va kerakli mutaxassisliklar bo'yicha kurslar tashkil etilgan.",
    },
    {
      id: 4,
      title: "Gennis Campus Sport Musobaqasi",
      date: "2024-07-05",
      content:
        "Gennis Campusda sport musobaqasi o'tkazildi. Talabalar sport orqali jamoa ruhini oshirishga va yangi do'stlar orttirishga muvaffaq bo'lishdi.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-8">Yangiliklar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-500 mb-4">{article.date}</p>
                <p className="text-gray-600">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default News;
