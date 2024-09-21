import React from "react";
import Container from "../../components/container/Container";

const Progress = () => {
  const students = [
    {
      id: 1,
      name: "Anvar Qosimov",
      success: 90,
      course: "Matematika",
      status: "Tugatgan",
    },
    {
      id: 2,
      name: "Madina Sobirova",
      success: 80,
      course: "Fizika",
      status: "O'qiyotgan",
    },
    {
      id: 3,
      name: "Alisher Karimov",
      success: 95,
      course: "Ingliz tili",
      status: "Tugatgan",
    },
    {
      id: 4,
      name: "Dilshod Yuldashev",
      success: 70,
      course: "Kimyo",
      status: "O'qiyotgan",
    },
    {
      id: 5,
      name: "Zilola Bekmurodova",
      success: 85,
      course: "Tarix",
      status: "Tugatgan",
    },
    {
      id: 6,
      name: "Shohrux Abdullayev",
      success: 60,
      course: "Geografiya",
      status: "O'qiyotgan",
    },
    {
      id: 7,
      name: "Lola Shodmonova",
      success: 88,
      course: "Biologiya",
      status: "Tugatgan",
    },
    {
      id: 8,
      name: "Elena Vladimirovna",
      success: 92,
      course: "Rus tili",
      status: "O'qiyotgan",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
          O'quvchilar Muvaffaqiyati va Yo'nalishlar
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {student.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Yo'nalishi:{" "}
                <span className="font-medium text-blue-600">
                  {student.course}
                </span>
              </p>
              <p
                className={`text-sm font-medium mb-4 ${
                  student.status === "Tugatgan"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {student.status === "Tugatgan" ? "Tugatgan" : "O'qiyotgan"}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-6 mb-2">
                <div
                  className={`bg-blue-500 h-6 rounded-full`}
                  style={{ width: `${student.success}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-700">
                {student.success}% to'ldirildi
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Progress;
