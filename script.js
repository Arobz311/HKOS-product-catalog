const products = [["Cotton Based","Combed, Carded & OE","COTTON","Pilihan material cotton dalam kelompok Combed, Carded, dan OE.","Spesifikasi mengikuti artikel yang dipilih. Tanyakan komposisi, gramasi, lebar, konstruksi, dan ketersediaan."],["Cotton Based","Supima Cotton*","SUPIMA","Pilihan Supima Cotton dalam portofolio Cotton Based HKTI.","Detail artikel dan dokumentasi pendukung perlu dikonfirmasi kepada tim HKTI."],["Cotton Based","Ultima Cotton","ULTIMA","Pilihan material Ultima Cotton dalam portofolio HKTI.","Tanyakan spesifikasi artikel dan ketersediaannya."],["Cotton Based","Organic Cotton","ORGANIC","Pilihan material Organic Cotton dalam portofolio HKTI.","Klaim sertifikasi mengikuti dokumen artikel yang berlaku."],["Cotton Based","Teteron Cotton (TC)","TC","Material blend cotton dan polyester dalam portofolio Cotton Based.","Komposisi dan spesifikasi aktual mengikuti artikel."],["Cotton Based","Chief Value Cotton (CVC)","CVC","Material Chief Value Cotton dalam portofolio Cotton Based.","Tanyakan komposisi dan spesifikasi setiap artikel."],["Cotton Based","Cotton Spandex","STRETCH","Material cotton dengan spandex dalam portofolio Cotton Based.","Karakter stretch dan recovery mengikuti spesifikasi artikel."],["Cotton Based","Cotton Interlock / Double Knit","INTERLOCK","Kain rajut interlock atau double knit dalam portofolio HKTI.","Tanyakan gramasi, lebar, dan konstruksi artikel."],["Cotton Based","Cotton Pique / Lacoste","PIQUE","Kain rajut pique atau lacoste dalam portofolio Cotton Based.","Tanyakan pilihan komposisi dan spesifikasi."],["Cotton Based","Cotton Waffle","WAFFLE","Kain dengan konstruksi atau tekstur waffle dalam portofolio HKTI.","Detail konstruksi dan spesifikasi mengikuti artikel."],["Cotton Based","Cotton Baby Terry","BABY TERRY","Kain rajut baby terry dalam portofolio Cotton Based.","Tanyakan spesifikasi dan ketersediaan artikel."],["Cotton Based","Cotton French Terry","FRENCH TERRY","Kain rajut French Terry dalam portofolio Cotton Based.","Tanyakan spesifikasi dan ketersediaan artikel."],["Cotton Based","Recycle Cotton (Mix)","RECYCLE","Pilihan material Recycle Cotton (Mix) dalam portofolio HKTI.","Komposisi dan dokumen pendukung mengikuti artikel."],["Cellulose Based","Tencel™ Modal","TENCEL MODAL","Material Tencel™ Modal dalam portofolio Cellulose Based.","Detail artikel, komposisi, dan dokumen merek mengikuti spesifikasi produk."],["Cellulose Based","Tencel™ Micromodal","MICROMODAL","Material Tencel™ Micromodal dalam portofolio Cellulose Based.","Detail artikel, komposisi, dan dokumen merek mengikuti spesifikasi produk."],["Cellulose Based","Cotton Tencel™ Modal","COTTON MODAL","Material blend Cotton dan Tencel™ Modal.","Komposisi aktual mengikuti spesifikasi artikel."],["Cellulose Based","Cotton Tencel™ Micromodal","COTTON MICRO","Material blend Cotton dan Tencel™ Micromodal.","Komposisi aktual mengikuti spesifikasi artikel."],["Cellulose Based","Tencel™ Lyocell (Blend)","LYOCELL","Material Tencel™ Lyocell dalam komposisi blend.","Komposisi dan spesifikasi mengikuti artikel."],["Cellulose Based","Tencel™ Luxe","LUXE","Material Tencel™ Luxe dalam portofolio Cellulose Based.","Detail artikel dan dokumentasi merek perlu dikonfirmasi."],["Cellulose Based","Tencel™ Refibra™","REFIBRA","Material Tencel™ Refibra™ dalam portofolio Cellulose Based.","Detail artikel dan dokumentasi merek perlu dikonfirmasi."],["Cellulose Based","Tencel™ Carbon Zero","CARBON ZERO","Material Tencel™ Carbon Zero dalam portofolio Cellulose Based.","Detail artikel dan dokumentasi merek perlu dikonfirmasi."],["Cellulose Based","Lenzing™ Ecovero™","ECOVERO","Material Lenzing™ Ecovero™ dalam portofolio Cellulose Based.","Detail artikel dan dokumentasi merek perlu dikonfirmasi."],["Cellulose Based","Livaeco Modal","LIVA MODAL","Material Livaeco Modal dalam portofolio Cellulose Based.","Detail artikel dan spesifikasi mengikuti artikel."],["Cellulose Based","Livaeco Rayon","LIVA RAYON","Material Livaeco Rayon dalam portofolio Cellulose Based.","Detail artikel dan spesifikasi mengikuti artikel."],["Cellulose Based","Rayon","RAYON","Material Rayon dalam portofolio Cellulose Based.","Tanyakan komposisi, konstruksi, dan spesifikasi."],["Cellulose Based","Teteron Rayon (TR)","TR","Material Teteron Rayon (TR) dalam portofolio Cellulose Based.","Komposisi dan spesifikasi aktual mengikuti artikel."],["Cellulose Based","Tanboocel Bamboo Cotton","BAMBOO COTTON","Material Tanboocel Bamboo Cotton dalam portofolio Cellulose Based.","Detail komposisi dan dokumen pendukung mengikuti artikel."],["Cellulose Based","Tanboocel Bamboo Spandex","BAMBOO SPANDEX","Material Tanboocel Bamboo Spandex dalam portofolio Cellulose Based.","Detail komposisi dan spesifikasi mengikuti artikel."],["Synthetic Based","Polyester Recycled (CVC)","RECYCLED POLY","Material Polyester Recycled (CVC) dalam portofolio Synthetic Based.","Tanyakan komposisi, konstruksi, dan spesifikasi artikel."],["Synthetic Based","Micro Polyester Spandex","MICRO POLY","Material Micro Polyester Spandex dalam portofolio Synthetic Based.","Tanyakan komposisi dan karakteristik artikel."],["Synthetic Based","Hakuni: Polyamide (Nylon) Spandex","HAKUNI","Material Hakuni berbasis Polyamide (Nylon) Spandex.","Detail komposisi dan spesifikasi mengikuti artikel."],["Digital Printing","Cotton Based — Digital Printing","COTTON PRINT","Layanan digital printing untuk kain rajut berbasis Cotton Based.","Teknologi menggunakan reactive inks dan sesuai untuk kain rajut 100% serat alami (non-polyester). Kesesuaian material perlu dikonfirmasi sebelum produksi."],["Digital Printing","Cellulose Based — Digital Printing","CELLULOSE PRINT","Layanan digital printing untuk kain rajut berbasis Cellulose Based.","Teknologi menggunakan reactive inks dan sesuai untuk kain rajut 100% serat alami (non-polyester). Kesesuaian material perlu dikonfirmasi sebelum produksi."],["Innovation","Danball","DANBALL","Danball merupakan bagian dari portofolio inovasi HKTI.","Tanyakan konstruksi, komposisi, gramasi, lebar, dan ketersediaan."],["Innovation","Danball Spandex (Sandwich)","DANBALL SPANDEX","Varian Danball Spandex (Sandwich) dalam portofolio inovasi HKTI.","Tanyakan konstruksi, komposisi, gramasi, lebar, dan ketersediaan."],["Innovation","Hakurodi","HAKURODI","Hakurodi merupakan bagian dari portofolio inovasi HKTI.","Hubungi tim HKTI untuk informasi detail produk."]];

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const filters = document.getElementById("filters");

  if (!grid || !search || !count || !empty || !filters) {
    console.error("HKTI Catalog: elemen katalog tidak ditemukan.", {
      grid: !!grid, search: !!search, count: !!count, empty: !!empty, filters: !!filters
    });
    if (count) count.textContent = "Katalog gagal dimuat. Periksa struktur halaman.";
    return;
  }

  let activeCategory = "Semua";

  function renderProducts() {
    const term = search.value.trim().toLocaleLowerCase("id");
    const visible = products.filter(function (p) {
      const categoryMatch = activeCategory === "Semua" || p[0] === activeCategory;
      const text = [p[0], p[1], p[2], p[3], p[4]].join(" ").toLocaleLowerCase("id");
      return categoryMatch && text.includes(term);
    });

    grid.innerHTML = visible.map(function (p, index) {
      let visualClass = "";
      if (p[0] === "Cellulose Based") visualClass = "cellulose";
      else if (p[0] === "Synthetic Based") visualClass = "blend";
      else if (p[0] === "Digital Printing" || p[0] === "Innovation") visualClass = "innovation";

      return `<article class="card">
        <div class="visual ${visualClass}" data-tag="${escapeHTML(p[2])}"></div>
        <div class="cardbody">
          <span class="category">${escapeHTML(p[0])}</span>
          <h3>${escapeHTML(p[1])}</h3>
          <p>${escapeHTML(p[3])}</p>
          <div class="cardfoot">
            <span>Detail sesuai artikel</span>
            <button class="detail" type="button" data-index="${products.indexOf(p)}">Lihat detail ↗</button>
          </div>
        </div>
      </article>`;
    }).join("");

    count.textContent = visible.length + " produk ditampilkan";
    empty.hidden = visible.length > 0;
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  filters.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-cat]");
    if (!button) return;
    activeCategory = button.dataset.cat;
    filters.querySelectorAll("button[data-cat]").forEach(function (item) {
      item.classList.toggle("active", item === button);
    });
    renderProducts();
  });

  search.addEventListener("input", renderProducts);

  grid.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-index]");
    if (!button) return;
    const p = products[Number(button.dataset.index)];
    const dialog = document.getElementById("detail");
    const content = document.getElementById("detailContent");
    if (!p || !dialog || !content || typeof dialog.showModal !== "function") return;

    content.innerHTML = `<span class="category">${escapeHTML(p[0])}</span>
      <h2>${escapeHTML(p[1])}</h2>
      <p>${escapeHTML(p[3])}</p>
      <div class="dialognote">${escapeHTML(p[4])}</div>
      <p>Untuk informasi spesifikasi atau ketersediaan, hubungi HK Official Store by HKTI.</p>
      <button class="btn orange" type="button" id="copyProduct">Salin inquiry produk</button>`;
    dialog.showModal();
    document.getElementById("copyProduct").addEventListener("click", function () {
      copyText("Halo HK Official Store by HKTI, saya ingin bertanya tentang " + p[1] + ". Mohon informasi spesifikasi, komposisi, gramasi, lebar, minimum pembelian, dan ketersediaan. Terima kasih.");
    });
  });

  const closeButton = document.getElementById("close");
  const dialog = document.getElementById("detail");
  if (closeButton && dialog) closeButton.addEventListener("click", function () { dialog.close(); });
  if (dialog) dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        alert("Format inquiry berhasil disalin.");
      }).catch(function () { alert(text); });
    } else {
      alert(text);
    }
  }

  const copyButton = document.getElementById("copy");
  const feedback = document.getElementById("feedback");
  if (copyButton) copyButton.addEventListener("click", function () {
    const message = "Halo HK Official Store by HKTI, saya ingin meminta informasi katalog dan spesifikasi produk kain. Mohon bantuannya. Terima kasih.";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(function () {
        if (feedback) feedback.textContent = "Format inquiry disalin. Silakan tempel di pesan Instagram.";
      }).catch(function () { if (feedback) feedback.textContent = message; });
    } else if (feedback) feedback.textContent = message;
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.getElementById("menu");
  const nav = document.getElementById("nav");
  if (menuButton && nav) menuButton.addEventListener("click", function () { nav.classList.toggle("open"); });
  if (nav) nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { nav.classList.remove("open"); });
  });

  renderProducts();
  console.info("HKTI Catalog loaded:", products.length, "catalog entries.");
});
