import React from "react";
import testimoniBg from "../../assets/home/tstimoni.png"
const testimonials = [
  {
    text: "Selama penelitian skripsi, saya sangat terbantu dengan fasilitas model fisik di laboratorium ini. Setiap tahapan eksperimen dijelaskan dengan detail oleh staf, sehingga saya lebih memahami dinamika pantai secara nyata. Tidak hanya mendukung data penelitian, tetapi juga menambah pengalaman praktis yang berharga untuk karier saya ke depan.",
    name: "Mahasiswa",
    role: "Teknik Sipil",
    photo: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  },
  {
    text: "Kerja sama riset dengan Laboratorium Dinamika Pesisir dan Rekayasa Pantai sangat memuaskan. Tim laboratorium responsif, menyediakan data dengan standar tinggi, dan selalu terbuka dalam diskusi ilmiah. Hasil riset yang kami dapatkan jauh lebih kuat berkat dukungan fasilitas dan keahlian di sini.",
    name: "Mitra Peneliti",
    role: "Universitas X",
    photo: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  },
  {
    text: "Kami menggunakan layanan laboratorium ini untuk mendukung proyek pemodelan pantai yang kompleks. Proses administrasi cukup jelas dan cepat, sementara kualitas data sangat mendukung perencanaan lapangan. Hal yang paling kami hargai adalah profesionalisme tim yang mampu menjembatani antara kebutuhan praktis dan pendekatan ilmiah.",
    name: "Praktisi",
    role: "Konsultan Rekayasa Pantai",
    photo: "https://img.favpng.com/2/12/12/computer-icons-portable-network-graphics-user-profile-avatar-png-favpng-L1ihcbxsHbnBKBvjjfBMFGbb7.jpg",
  },
];

const TestimoniSection = () => {
  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundImage: `url(${testimoniBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay hitam transparan */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      ></div>

      <div className="container position-relative text-white">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">Apa Kata Mereka?</h2>
          <p className="lead">Pengalaman stakeholder bersama Laboratorium Dinamika Pesisir</p>
        </div>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card h-100 shadow-lg border-0"
                style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
              >
                <div className="card-body d-flex flex-column">
                  <p className="card-text mb-3 text-dark">“{t.text}”</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="rounded-circle me-3 border border-2"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="fw-bold mb-0 text-dark">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
