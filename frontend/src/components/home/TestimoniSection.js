import React from "react";

const testimonials = [
  {
    text: "Selama penelitian skripsi, saya sangat terbantu dengan fasilitas model fisik di laboratorium ini. Setiap tahapan eksperimen dijelaskan dengan detail oleh staf, sehingga saya lebih memahami dinamika pantai secara nyata. Tidak hanya mendukung data penelitian, tetapi juga menambah pengalaman praktis yang berharga untuk karier saya ke depan.",
    name: "Mahasiswa",
    role: "Teknik Sipil",
    photo: "https://via.placeholder.com/80",
  },
  {
    text: "Kerja sama riset dengan Laboratorium Dinamika Pesisir dan Rekayasa Pantai sangat memuaskan. Tim laboratorium responsif, menyediakan data dengan standar tinggi, dan selalu terbuka dalam diskusi ilmiah. Hasil riset yang kami dapatkan jauh lebih kuat berkat dukungan fasilitas dan keahlian di sini.",
    name: "Mitra Peneliti",
    role: "Universitas X",
    photo: "https://via.placeholder.com/80",
  },
  {
    text: "Kami menggunakan layanan laboratorium ini untuk mendukung proyek pemodelan pantai yang kompleks. Proses administrasi cukup jelas dan cepat, sementara kualitas data sangat mendukung perencanaan lapangan. Hal yang paling kami hargai adalah profesionalisme tim yang mampu menjembatani antara kebutuhan praktis dan pendekatan ilmiah.",
    name: "Praktisi",
    role: "Konsultan Rekayasa Pantai",
    photo: "https://via.placeholder.com/80",
  },
];

const TestimoniSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-2 text-black center"> Testimoni</h2>
        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text mb-3">"{t.text}"</p>
                  <div className="d-flex align-items-center">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{t.name}</h6>
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
