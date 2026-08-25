import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = process.env.NODE_ENV === "production" ? "/pdkkiu-next" : "";

  return (
    <>
      <Head>
        <title>PDK Kiu – Pekak Boleh Cakap</title>
        <meta name="description" content="PDK Kiu memberikan pendidikan intervensi awal kepada kanak-kanak bermasalah pendengaran dan OKU melalui Kaedah Pertuturan Kiu." />
        <meta name="theme-color" content="#0284c7" />
      </Head>

      <div className="font-sans bg-slate-50 text-slate-800 antialiased">
        {/* NAVBAR */}
        <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center h-16">
              <a href="#home" className="flex items-center gap-3">
                <img
                  src="https://pdkkiu.wordpress.com/wp-content/uploads/2017/12/cropped-cropped-24852617_392326961220497_2708719459498620111_n.jpg"
                  alt="PDK Kiu"
                  className="w-10 h-10 rounded-full object-cover border-2 border-sky-100"
                />
                <div>
                  <div className="font-bold text-sky-800 text-sm leading-tight">PDK Kiu</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Pekak Boleh Cakap</div>
                </div>
              </a>

              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                <a href="#tentang" className="hover:text-sky-600 transition">Tentang</a>
                <a href="#kemudahan" className="hover:text-sky-600 transition">Kemudahan</a>
                <a href="#program" className="hover:text-sky-600 transition">Program</a>
                <a href="#galeri" className="hover:text-sky-600 transition">Galeri</a>
                <a href="#hubungi" className="hover:text-sky-600 transition">Hubungi</a>
              </div>

              <div className="flex items-center gap-3">
                <a href="#derma" className="hidden sm:inline-flex bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
                  Derma Sekarang
                </a>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-white border-t border-slate-100">
              <div className="px-4 py-3 space-y-2 text-sm font-medium">
                {["tentang", "kemudahan", "program", "galeri", "hubungi", "derma"].map((id) => (
                  <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block py-2 text-slate-600 hover:text-sky-600 capitalize">
                    {id === "derma" ? "Derma Sekarang" : id}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* HERO */}
        <section id="home" className="hero-bg text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://i0.wp.com/pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_7161.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm text-sky-100 text-xs font-medium px-3 py-1 rounded-full mb-6">
              Ditubuhkan sejak 2009 • Cheras, Kuala Lumpur
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Anak Istimewa Pun Manusia.<br className="hidden sm:block" />
              <span className="text-sky-200"> Mereka Juga Berhak Dapat Pendidikan.</span>
            </h1>
            <p className="text-lg md:text-xl text-sky-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              PDK Kiu memberikan pendidikan intervensi awal kepada kanak-kanak bermasalah pendengaran dan OKU melalui <strong>Kaedah Pertuturan Kiu</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#hubungi" className="inline-flex items-center justify-center gap-2 bg-white text-sky-800 font-semibold px-7 py-3.5 rounded-xl hover:bg-sky-50 transition shadow-lg">
                Hubungi Kami
              </a>
              <a href="#derma" className="inline-flex items-center justify-center gap-2 bg-sky-900/40 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-sky-900/60 transition">
                Sokong Usaha Kami
              </a>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Tentang PDK Kiu</h2>
              <div className="w-16 h-1.5 bg-sky-500 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p><strong className="text-slate-800">PDK Kiu</strong> ditubuhkan pada tahun <strong>2009</strong> bermula dengan 12 orang pelatih bermasalah pendengaran bersama 3 orang tenaga pengajar sukarelawan.</p>
                <p>Bermula dengan pengajaran awal intervensi untuk kanak-kanak berumur 5 hingga 7 tahun. Pada tahun <strong>2017</strong>, kami berpindah ke premis baru di No. 24, Jalan Perkasa 3, Taman Maluri, Cheras.</p>
                <p>Kaedah pembelajaran utama kami ialah <strong className="text-sky-700">Kaedah Pertuturan Kiu</strong>. Kini kami juga menerima kanak-kanak yang mempunyai masalah pembelajaran dan pelbagai (GDD).</p>
                <p>Setiap tahun, pelatih-pelatih kami berjaya diiktiraf untuk kemasukan ke Tahun 1 sekolah swasta dan sekolah Pendidikan Khas.</p>
              </div>
              <div className="space-y-5">
                <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="font-bold text-sky-800 text-lg mb-2">Visi</h3>
                  <p className="text-slate-600">Pendidikan awal yang berkualiti demi masa depan pembangunan kanak-kanak OKU.</p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h3 className="font-bold text-emerald-800 text-lg mb-2">Misi</h3>
                  <p className="text-slate-600">Membantu kanak-kanak OKU dengan memberi pendidikan intervensi awal melalui program pemulihan serta membantu ibu bapa dalam persediaan anak ke sekolah rendah.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEMUDAHAN */}
        <section id="kemudahan" className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Kemudahan Kami</h2>
              <p className="text-slate-500">Premis yang selesa untuk menyokong pembelajaran pelatih</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏢", title: "Ruang Pejabat", desc: "Pengurusan & pentadbiran" },
                { icon: "📚", title: "Mini Perpustakaan", desc: "Di tingkat 1" },
                { icon: "🏫", title: "Kelas Intervensi & Pra Sekolah", desc: "Kiu 1, Kiu 2 & Kiu 3" },
                { icon: "🕌", title: "Surau", desc: "Untuk solat & aktiviti rohani" },
                { icon: "🏊", title: "Mini Pool", desc: "Kelas renang & terapi air" },
                { icon: "🗣️", title: "Kelas Terapi Pertuturan", desc: "Sesi individu & berkumpulan" },
                { icon: "🌱", title: "Kawasan Berkebun", desc: "Aktiviti terapi & pembelajaran" },
                { icon: "🛝", title: "Ruang Bermain & Riadah", desc: "Kawasan rehat pelatih" },
                { icon: "🎭", title: "Ruang Aktiviti", desc: "Program & acara tahunan" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 card-hover">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section id="program" className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Program & Aktiviti</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  { n: 1, t: "Kelas Pertuturan Kiu", d: "Bahasa Melayu & Bahasa Inggeris" },
                  { n: 2, t: "Terapi Pertuturan", d: "Sesi individu dan berkumpulan" },
                  { n: 3, t: "Kelas Renang", d: "Membangunkan keyakinan & motor skill" },
                  { n: 4, t: "Mudah Kiu", d: "Kaedah interaktif berasaskan teknologi" },
                ].map((p) => (
                  <div key={p.n} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-sky-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">{p.n}</div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{p.t}</h3>
                      <p className="text-sm text-slate-500 mt-0.5">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-7 text-white">
                <h3 className="font-bold text-xl mb-5">Aktiviti Tahunan</h3>
                <ul className="space-y-3 text-sky-100">
                  {["Lawatan Sains", "Hari Keluarga", "Sukaneka", "Peperiksaan Tahunan", "Perjumpaan Ibu Bapa", "Program Hari Raya", "Hari Anugerah Cemerlang & Graduasi"].map((a) => (
                    <li key={a} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-sky-300 rounded-full" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GALERI */}
        <section id="galeri" className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Galeri Premis & Aktiviti</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                "https://i0.wp.com/pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_7161.jpg",
                "https://i0.wp.com/pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_7215.jpg",
                "https://i0.wp.com/pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_7217.jpg",
                "https://i0.wp.com/pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_7213.jpg",
                "https://i0.wp.com/pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_7154.jpg",
                "https://pdkkiu.wordpress.com/wp-content/uploads/2017/12/img_1515.jpg",
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
                  <img src={src} alt={`Galeri ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition duration-300" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-400 mt-6">Gambar dari arkib 2017. Boleh dikemaskini kemudian.</p>
          </div>
        </section>

        {/* DERMA */}
        <section id="derma" className="py-16 md:py-20 bg-sky-700 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sokong Usaha PDK Kiu</h2>
            <p className="text-sky-100 text-lg mb-8">Setiap sumbangan membantu kami memberikan pendidikan intervensi awal yang berkualiti kepada kanak-kanak OKU.</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block text-left">
              <p className="text-sky-100 text-sm mb-2">Hubungi untuk derma:</p>
              <a href="tel:0392013156" className="text-xl font-bold hover:text-sky-200">03-9201 3156</a>
            </div>
          </div>
        </section>

        {/* HUBUNGI */}
        <section id="hubungi" className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Hubungi Kami</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-slate-800">Alamat</h3>
                  <p className="text-slate-600 mt-1">No. 24, Jalan Perkasa 3,<br />Taman Maluri, 55100 Cheras,<br />Kuala Lumpur.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Telefon</h3>
                  <a href="tel:0392013156" className="text-sky-600 font-medium text-lg">03-9201 3156</a>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Waktu Operasi</h3>
                  <p className="text-slate-600 mt-1">Isnin – Jumaat<br />8.00 pagi – 12.30 tengah hari<br />2.00 petang – 4.00 petang</p>
                </div>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/pdkkiu" target="_blank" rel="noopener" className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">Facebook</a>
                  <a href="https://www.instagram.com/littleqstar/" target="_blank" rel="noopener" className="bg-pink-50 text-pink-700 px-4 py-2 rounded-lg text-sm font-medium">Instagram</a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-100 rounded-2xl overflow-hidden aspect-video">
                  <iframe
                    src="https://maps.google.com/maps?q=No+24,+Jalan+Perkasa+3,+Taman+Maluri,+55100+Cheras,+Kuala+Lumpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <a href="https://wa.me/60392013156" target="_blank" rel="noopener" className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl transition">
                  WhatsApp Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-900 text-slate-400 py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-white font-semibold mb-1">PDK Kiu – Pekak Boleh Cakap</p>
            <p className="text-sm">© 2026 Pemulihan Dalam Komuniti (PDK) Kiu</p>
            <p className="text-xs text-slate-500 mt-2">Website dibina semula sebagai tanda penghargaan</p>
          </div>
        </footer>

        {/* Floating WhatsApp */}
        <a href="https://wa.me/60392013156" target="_blank" rel="noopener"
          className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition hover:scale-110"
          title="WhatsApp">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
