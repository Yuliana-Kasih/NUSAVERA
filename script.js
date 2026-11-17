 
/* =========================
   DATA KERAJAAN
========================= */

const kingdoms = {

    hindu: [
        {
            name: "Kerajaan Kutai",
            location: "Kalimantan Timur",
            period: "Sekitar abad ke-4 Masehi",
            image: "Sejarah Kerajaan Kutai _ Raja, Sistem Pemerintahan, Peninggalan, Masa Kejayaan dan Runtuhnya Kerajaan Kutai.jpg",
            short: "Salah satu kerajaan Hindu tertua yang diketahui di Indonesia.",
            history: "Kerajaan Kutai (secara resmi disebut Kerajaan Kutai Martadipura atau Martapura) adalah kerajaan bercorak Hindu tertua di Nusantara yang berdiri sekitar abad ke-4 Masehi (sekitar tahun 400 M) di Muara Kaman, Kalimantan Timur, di sepanjang aliran Sungai Mahakam.",
            king: "Maharaja Mulawarman.",
            glory: "Kerajaan Kutai berkembang pada masa pemerintahan Raja Mulawarman. Ia dikenal melalui prasasti Yupa yang mencatat pemberian hadiah kepada kaum Brahmana.",
            heritage: "Prasasti Yupa."
        },
        {
            name: "Kerajaan Tarumanegara",
            location: "Jawa Barat",
            period: "Sekitar abad ke-4 hingga ke-7 Masehi",
            image: "Sejarah Kerajaan Tarumanegara _ Silsilah Raja, Peninggalan, Kehidupan, Masa Kejayaan dan Runtuhnya.jpg",
            short: "Kerajaan Hindu yang terkenal dengan Raja Purnawarman.",
            history: "Tarumanegara merupakan kerajaan bercorak Hindu yang berkembang di wilayah Jawa Barat. Kerajaan ini diketahui melalui berbagai prasasti yang menceritakan pemerintahan Raja Purnawarman.",
            king: "Raja Purnawarman.",
            glory: "Mencapai perkembangan penting pada masa Raja Purnawarman, terutama dalam pembangunan saluran air dan pengelolaan wilayah kerajaan.",
            heritage: "Prasasti Ciaruteun, Prasasti Tugu, dan Prasasti Kebon Kopi."
        },
        {
            name: "Kerajaan Sriwijaya",
            location: "Sumatra",
            period: "Sekitar abad ke-7 hingga abad ke-13",
            image: "Sejarah Kerajaan Sriwijaya dari Kejayaan Hingga Keruntuhannya · Satu Jam.jpg",
            short: "Kerajaan Buddha yang terkenal sebagai pusat perdagangan maritim.",
            history: "Sriwijaya merupakan kerajaan bercorak Buddha yang berkembang di Sumatra. Letaknya yang strategis menjadikan Sriwijaya sebagai kekuatan maritim dan pusat perdagangan penting di Asia Tenggara.",
            king: "Dapunta Hyang Sri Jayanasa dan Balaputradewa.",
            glory: "Sriwijaya mencapai kejayaan melalui perdagangan laut dan perannya sebagai pusat pembelajaran agama Buddha.",
            heritage: "Prasasti Kedukan Bukit, Prasasti Talang Tuo, dan Prasasti Kota Kapur."
        },
        {
            name: "Kerajaan Mataram Kuno",
            location: "Jawa Tengah dan Jawa Timur",
            period: "Sekitar abad ke-8 hingga ke-11",
            image: "Sejarah Kerajaan Mataram Kuno Singkat Beserta Raja Raja dan Peninggalannya _ Perpustakaan_id.jpg",
            short: "Kerajaan yang meninggalkan warisan candi megah.",
            history: "Mataram Kuno merupakan kerajaan yang berkembang di Jawa Tengah dan kemudian sebagian pusat kekuasaannya berpindah ke Jawa Timur. Kerajaan ini memiliki dinasti Sanjaya yang bercorak Hindu dan Syailendra yang bercorak Buddha.",
            king: "Sanjaya, Rakai Panangkaran, dan Balitung.",
            glory: "Kerajaan ini dikenal karena perkembangan agama, kebudayaan, dan pembangunan bangunan suci. Candi Borobudur dan Prambanan berasal dari masa perkembangan dinasti-dinasti di lingkungan kerajaan Mataram Kuno.",
            heritage: "Candi Borobudur, Candi Prambanan, dan berbagai prasasti."
        },
        {
            name: "Kerajaan Kediri",
            location: "Jawa Timur",
            period: "1042–1222 Masehi",
            image: "Sejarah Kerajaan Kediri _ Silsilah Raja, Peninggalan, Kehidupan, Masa Kejayaan dan Runtuhnya.jpg",
            short: "Kerajaan yang terkenal dengan perkembangan sastra.",
            history: "Kerajaan Kediri atau Panjalu berkembang di Jawa Timur setelah pembagian Kerajaan Medang. Kerajaan ini memiliki perkembangan penting dalam bidang pemerintahan, ekonomi, dan kesusastraan.",
            king: "Jayabaya, Kameswara, dan Kertajaya.",
            glory: "Kediri mencapai masa perkembangan penting pada pemerintahan Raja Jayabaya. Karya sastra seperti Bharatayuddha berkembang pada masa kerajaan ini.",
            heritage: "Prasasti, arca, dan karya sastra dari masa Kediri."
        },
        {
            name: "Kerajaan Singasari",
            location: "Jawa Timur",
            period: "1222–1292 Masehi",
            image: "MAKALAH SEJARAH SINGASARI.jpg",
            short: "Kerajaan yang didirikan oleh Ken Arok.",
            history: "Kerajaan Singasari didirikan oleh Ken Arok pada tahun 1222 setelah mengalahkan Kerajaan Kediri. Kerajaan ini kemudian berkembang menjadi salah satu kekuatan penting di Jawa Timur.",
            king: "Ken Arok, Anusapati, dan Kertanegara.",
            glory: "Singasari mencapai kejayaan pada masa pemerintahan Raja Kertanegara. Ia dikenal melalui upaya perluasan pengaruh kerajaan ke wilayah luar Jawa.",
            heritage: "Candi Singasari, Candi Jago, dan Candi Kidal."
        },
        {
            name: "Kerajaan Majapahit",
            location: "Jawa Timur",
            period: "1293–sekitar 1527 Masehi",
            image: "10 Incredible Places To Visit In Yogyakarta On Your 2026 Trip.jpg",
            short: "Kerajaan besar yang mencapai kejayaan pada masa Hayam Wuruk.",
            history: "Majapahit didirikan oleh Raden Wijaya pada tahun 1293 di Jawa Timur. Kerajaan ini berkembang menjadi salah satu kerajaan besar dalam sejarah Nusantara.",
            king: "Raden Wijaya, Hayam Wuruk, dan Wikramawardhana.",
            glory: "Majapahit mencapai puncak kejayaan pada masa Raja Hayam Wuruk dengan dukungan Mahapatih Gajah Mada. Pengaruhnya meluas melalui hubungan politik, perdagangan, dan pelayaran.",
            heritage: "Kitab Negarakertagama, Candi Tikus, Gapura Bajang Ratu, dan berbagai peninggalan di Trowulan."
        }
    ],

    islam: [
        {
            name: "Kerajaan Samudra Pasai",
            location: "Aceh",
            period: "Sekitar abad ke-13 hingga ke-16",
            image: "download (25).jpg",
            short: "Salah satu kerajaan Islam awal di Nusantara.",
            history: "Samudra Pasai berkembang di wilayah pesisir utara Sumatra. Kerajaan ini menjadi pusat perdagangan dan penyebaran Islam di kawasan Selat Malaka.",
            king: "Sultan Malik al-Saleh.",
            glory: "Samudra Pasai berkembang sebagai pusat perdagangan internasional yang menghubungkan pedagang dari berbagai wilayah.",
            heritage: "Kompleks makam Sultan Malik al-Saleh dan mata uang dirham."
        },
        {
            name: "Kesultanan Aceh Darussalam",
            location: "Aceh",
            period: "1496–awal abad ke-20",
            image: "Koeta Radja, Missigit_(Mosque at Kuta Raja_Banda Aceh) ca_ 1910.jpg",
            short: "Kesultanan yang berkembang sebagai pusat perdagangan dan pendidikan Islam.",
            history: "Kesultanan Aceh Darussalam berkembang di ujung utara Pulau Sumatra. Kerajaan ini memiliki peran penting dalam perdagangan dan penyebaran Islam.",
            king: "Sultan Ali Mughayat Syah dan Sultan Iskandar Muda.",
            glory: "Aceh mencapai kejayaan pada masa Sultan Iskandar Muda dengan perkembangan perdagangan, militer, dan pendidikan Islam.",
            heritage: "Masjid Raya Baiturrahman dan kompleks makam para sultan."
        },
        {
            name: "Kerajaan Demak",
            location: "Jawa Tengah",
            period: "Sekitar akhir abad ke-15 hingga pertengahan abad ke-16",
            image: "Masjid Agung Demak.jpg",
            short: "Kerajaan Islam penting dalam perkembangan Islam di Pulau Jawa.",
            history: "Kerajaan Demak berkembang di pesisir utara Jawa Tengah. Kerajaan ini memiliki peran besar dalam penyebaran Islam dan perdagangan di pesisir Jawa.",
            king: "Raden Patah, Pati Unus, dan Sultan Trenggana.",
            glory: "Demak mencapai masa perkembangan penting pada pemerintahan Sultan Trenggana dan memiliki hubungan erat dengan dakwah Wali Songo.",
            heritage: "Masjid Agung Demak."
        },
        {
            name: "Kerajaan Pajang",
            location: "Jawa Tengah",
            period: "Sekitar abad ke-16",
            image: "Petilasan Keraton Kerajaan Pajang, Kartasura - Sukoharjo.jpg",
            short: "Kerajaan Islam di Jawa setelah masa Demak.",
            history: "Pajang merupakan kerajaan Islam yang berkembang di wilayah Jawa Tengah setelah kemunduran Kerajaan Demak.",
            king: "Sultan Hadiwijaya atau Jaka Tingkir.",
            glory: "Pajang menjadi pusat kekuasaan Islam di pedalaman Jawa sebelum berkembangnya Mataram Islam.",
            heritage: "Peninggalan sejarah dan tradisi yang berkaitan dengan Kerajaan Pajang."
        },
        {
            name: "Mataram Islam",
            location: "Jawa Tengah dan Yogyakarta",
            period: "1586–1755 Masehi",
            image: "download (26).jpg",
            short: "Kerajaan Islam yang mencapai kejayaan pada masa Sultan Agung.",
            history: "Mataram Islam berkembang di wilayah Jawa Tengah dan kemudian memiliki pusat kekuasaan di kawasan Yogyakarta. Kerajaan ini menjadi salah satu kekuatan besar di Jawa.",
            king: "Panembahan Senopati dan Sultan Agung.",
            glory: "Mataram Islam mencapai kejayaan pada masa Sultan Agung melalui perluasan wilayah dan perkembangan kebudayaan Jawa-Islam.",
            heritage: "Kompleks makam Kotagede dan tradisi keraton."
        },
        {
            name: "Kesultanan Cirebon",
            location: "Jawa Barat",
            period: "Sekitar abad ke-15 hingga ke-17",
            image: "538c9_kerajaan-cirebon.jpg",
            short: "Pusat perkembangan Islam dan budaya di pesisir Jawa Barat.",
            history: "Kesultanan Cirebon berkembang di pesisir utara Jawa Barat. Kerajaan ini memiliki peran penting dalam perdagangan dan penyebaran Islam.",
            king: "Pangeran Cakrabuana dan Sunan Gunung Jati.",
            glory: "Cirebon berkembang sebagai pusat perdagangan dan pertemuan berbagai budaya, termasuk budaya Jawa, Sunda, Arab, dan Tionghoa.",
            heritage: "Keraton Kasepuhan, Keraton Kanoman, dan Masjid Agung Sang Cipta Rasa."
        },
        {
            name: "Kesultanan Banten",
            location: "Banten",
            period: "Abad ke-16 hingga ke-19",
            image: "Masjid di Banten, tahun 1880_.jpg",
            short: "Kerajaan Islam yang terkenal dengan perdagangan lada.",
            history: "Kesultanan Banten berkembang di wilayah pesisir barat Pulau Jawa. Letaknya yang strategis menjadikan Banten sebagai pusat perdagangan penting.",
            king: "Sultan Maulana Hasanuddin dan Sultan Ageng Tirtayasa.",
            glory: "Banten mencapai perkembangan besar melalui perdagangan lada dan hubungan dengan pedagang dari berbagai wilayah.",
            heritage: "Masjid Agung Banten dan reruntuhan Keraton Surosowan."
        },
        {
            name: "Kesultanan Ternate",
            location: "Maluku Utara",
            period: "Sekitar abad ke-13 hingga abad ke-20",
            image: "Ternate,_Keraton.jpg",
            short: "Kesultanan yang terkenal dengan perdagangan cengkih.",
            history: "Kesultanan Ternate berkembang di Maluku Utara dan menjadi salah satu pusat perdagangan rempah-rempah di Nusantara.",
            king: "Sultan Zainal Abidin dan Sultan Baabullah.",
            glory: "Ternate mencapai kejayaan pada masa Sultan Baabullah dan memiliki pengaruh besar dalam perdagangan rempah.",
            heritage: "Kedaton Sultan Ternate dan berbagai peninggalan kesultanan."
        },
        {
            name: "Kesultanan Tidore",
            location: "Maluku Utara",
            period: "Sekitar abad ke-15 hingga abad ke-20",
            image: "Kadato_Kie.jpg",
            short: "Kesultanan yang berperan penting dalam perdagangan rempah.",
            history: "Kesultanan Tidore berkembang di Kepulauan Maluku dan menjadi salah satu kekuatan politik dan perdagangan penting di kawasan tersebut.",
            king: "Sultan Nuku.",
            glory: "Tidore memiliki pengaruh besar dalam perdagangan rempah dan hubungan politik dengan wilayah sekitarnya.",
            heritage: "Kedaton Tidore dan berbagai peninggalan kesultanan."
        },
        {
            name: "Kerajaan Gowa-Tallo",
            location: "Sulawesi Selatan",
            period: "Berkembang sejak abad ke-14; Islam diterima pada awal abad ke-17",
            image: "Balla'_Lompoa_Museum.jpg",
            short: "Kerajaan kembar yang berkembang menjadi kekuatan maritim di Sulawesi Selatan.",
            history: "Gowa dan Tallo merupakan dua kerajaan yang menjalin hubungan politik erat di Sulawesi Selatan. Keduanya kemudian dikenal sebagai Kerajaan Makassar setelah berkembangnya Islam.",
            king: "Sultan Alauddin dan Sultan Hasanuddin.",
            glory: "Kerajaan Gowa-Tallo berkembang sebagai pusat perdagangan maritim dan mencapai pengaruh besar pada masa Sultan Hasanuddin.",
            heritage: "Benteng Somba Opu dan Benteng Rotterdam."
        }
    ]
};


/* =========================
   MENYIMPAN HALAMAN AKTIF
========================= */

let currentCategory = "hindu";


/* =========================
   ELEMEN HALAMAN
========================= */

const homePage = document.getElementById("homePage");
const kingdomPage = document.getElementById("kingdomPage");
const detailPage = document.getElementById("detailPage");


/* =========================
   FUNGSI BERANDA
========================= */

function showHome() {

    homePage.classList.remove("hidden");
    kingdomPage.classList.add("hidden");
    detailPage.classList.add("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   MENAMPILKAN DAFTAR KERAJAAN
========================= */

function showKingdoms(category) {

    currentCategory = category;

    const grid = document.getElementById("kingdomGrid");
    const title = document.getElementById("kingdomTitle");
    const label = document.getElementById("kingdomLabel");
    const description = document.getElementById("kingdomDescription");

    homePage.classList.add("hidden");
    kingdomPage.classList.remove("hidden");
    detailPage.classList.add("hidden");

    let data = kingdoms[category];

    if (category === "hindu") {

        title.textContent = "Kerajaan Hindu-Buddha";

        label.textContent = "PERADABAN NUSANTARA";

        description.textContent =
            "Mengenal kerajaan bercorak Hindu dan Buddha yang pernah berkembang di Indonesia.";

    } else {

        title.textContent = "Kerajaan Islam";

        label.textContent = "PERADABAN NUSANTARA";

        description.textContent =
            "Menjelajahi sejarah kerajaan Islam yang memiliki peran penting dalam perkembangan Nusantara.";

    }

    grid.innerHTML = "";

    data.forEach((kingdom, index) => {

        grid.innerHTML += `
            <article class="kingdom-card"
                onclick="showDetail(${index})">

                <img
                    src="${kingdom.image}"
                    alt="${kingdom.name}"
                    loading="lazy"
                >

                <div class="kingdom-info">

                    <span>${kingdom.location.toUpperCase()}</span>

                    <h3>${kingdom.name}</h3>

                    <p>${kingdom.short}</p>

                    <span class="read-more">
                        Baca Selengkapnya →
                    </span>

                </div>

            </article>
        `;

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}




/* =========================
   SEARCH KERAJAAN BERANDA
========================= */

function searchKingdoms() {

    const keyword = document
        .getElementById("searchKingdom")
        .value.trim().toLowerCase();

    const resultsContainer =
        document.getElementById("homeSearchResults");

    if (!keyword) {
        resultsContainer.innerHTML = "";
        return;
    }

    let allKingdoms = [];

    Object.keys(kingdoms).forEach(category => {

        kingdoms[category].forEach((kingdom, index) => {

            allKingdoms.push({
                ...kingdom,
                category: category,
                index: index
            });

        });

    });

    const results = allKingdoms.filter(kingdom =>
        kingdom.name.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {

        resultsContainer.innerHTML = `
            <div class="no-result">
                <h3>Kerajaan Tidak Ditemukan</h3>
                <p>
                    Coba masukkan nama kerajaan lainnya.
                </p>
            </div>
        `;

        return;
    }

    resultsContainer.innerHTML = results.map(kingdom => `

        <article class="kingdom-card"
            onclick="showDetail(${kingdom.index}, '${kingdom.category}')">

            <img
                src="${kingdom.image}"
                alt="${kingdom.name}"
                loading="lazy"
            >

            <div class="kingdom-info">

                <span>
                    ${kingdom.category === "hindu"
                        ? "HINDU-BUDDHA"
                        : "KERAJAAN ISLAM"}
                </span>

                <h3>${kingdom.name}</h3>

                <p>${kingdom.short}</p>

                <span class="read-more">
                    Baca Selengkapnya →
                </span>

            </div>

        </article>

    `).join("");

}


/* =========================
   MENAMPILKAN DETAIL KERAJAAN
========================= */

function showDetail(index, category = curentCategory) {

    currentCategory = category;

    const kingdom = kingdoms[currentCategory][index];

    const detailContent = document.getElementById("detailContent");

    homePage.classList.add("hidden");
    kingdomPage.classList.add("hidden");
    detailPage.classList.remove("hidden");

    const categoryName =
        currentCategory === "hindu"
        ? "KERAJAAN HINDU-BUDDHA"
        : "KERAJAAN ISLAM";

    detailContent.innerHTML = `

        <p class="detail-category">
            ${categoryName}
        </p>

        <h1 class="detail-title">
            ${kingdom.name}
        </h1>

        <p class="detail-location">
            📍 ${kingdom.location}
            &nbsp; | &nbsp;
            ${kingdom.period}
        </p>

        <img
            class="detail-image"
            src="${kingdom.image}"
            alt="${kingdom.name}"
        >

        <div class="detail-content">

            <h3>Sejarah Berdirinya</h3>

            <p>
                ${kingdom.history}
            </p>

            <h3>Raja-Raja Terkenal</h3>

            <p>
                ${kingdom.king}
            </p>

            <h3>Masa Kejayaan</h3>

            <p>
                ${kingdom.glory}
            </p>

            <h3>Peninggalan Sejarah</h3>

            <p>
                ${kingdom.heritage}
            </p>

        </div>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   KEMBALI KE DAFTAR
========================= */

function backToKingdoms() {

    showKingdoms(currentCategory);

}


/* =========================
   MENU RESPONSIVE
========================= */

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("active");

}


/* =========================
   TUTUP MENU SETELAH DIKLIK
========================= */

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".navbar nav").classList.remove("active");

    });

});
