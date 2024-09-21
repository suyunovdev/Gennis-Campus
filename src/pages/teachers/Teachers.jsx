import React from "react";
import Container from "../../components/container/Container";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Olimjon Ahmedov",
      subject: "Matematika",
      experience: 10,
      achievements: "Yilning eng yaxshi matematika o'qituvchisi, 2023",
    },
    {
      id: 2,
      name: "Zilola Karimova",
      subject: "Fizika",
      experience: 8,
      achievements: "Fizika bo'yicha xalqaro olimpiada g'olibi tayyorlagan",
    },
    {
      id: 3,
      name: "Mirshod Ubaydullayev",
      subject: "Kimyo",
      experience: 12,
      achievements: "Kimyo bo'yicha doktorlik dissertatsiyasini himoya qilgan",
    },
    {
      id: 4,
      name: "Nilufar Tursunova",
      subject: "Ingliz tili",
      experience: 6,
      achievements: "Cambridge C2 sertifikati egasi",
    },
    {
      id: 5,
      name: "Qobil Qosimov",
      subject: "Tarix",
      experience: 15,
      achievements: "Tarix bo'yicha 10 dan ortiq kitob muallifi",
    },
    {
      id: 6,
      name: "Shoira Islomova",
      subject: "Geografiya",
      experience: 9,
      achievements: "Geografiya bo'yicha xalqaro konferensiyada qatnashgan",
    },
    {
      id: 7,
      name: "Dilshodbek Yuldashev",
      subject: "Biologiya",
      experience: 7,
      achievements: "Biologiya bo'yicha milliy olimpiada sovrindori",
    },
    {
      id: 8,
      name: "Elena Vladimirovna",
      subject: "Rus tili",
      experience: 11,
      achievements: "Yilning eng yaxshi rus tili o'qituvchisi, 2022",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-blue-100 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          O'qituvchilar Haqida Ma'lumotlar
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {teacher.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                Fan:{" "}
                <span className="font-medium text-blue-600">
                  {teacher.subject}
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Tajriba:{" "}
                <span className="font-medium text-green-600">
                  {teacher.experience} yil
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Yutuqlar:{" "}
                <span className="font-medium text-gray-800">
                  {teacher.achievements}
                </span>
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Batafsil ma'lumot
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
