import Container from "../../components/container/Container";

const About = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-around items-center h-[80vh]">
          {" "}
          <div className="left">
            <h1 className="text-6xl font-bold">Siz GENNIS oilasimisiz?</h1>
            <p className="text-lg mt-8">
              Vaqt o'tgani sari markazimiz faoliyati kengayib bormoqda. Va bu
              bizga yanada ko'p masuliyatni kafolatlamoqda. Sevimli o'quv
              markazingiz sizni sifatli ta'lim bilan ta'minlash bilan bir
              qatorda, markazimizda inoq, qiziqarli va ijtimoiy atmosferani
              yaratish bilan ovora. Tez kunda ajoyib va noodatiy yangiliklarni
              guvohi bo'lasiz
            </p>
          </div>
          <div className="right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uQ-3LuHsYUY?si=CsGe5tuTfke_5Dxf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default About;
