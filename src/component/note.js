// 1. Buat 1 file component Chosen.jsx, isi dengan div terluar dengan id chosen-one
// 2. Buat 1 file component PokemonList.jsx isi dengan div terluar dengan id pokemon-list
// 3. Buat 1 file component Others.jsx dan isi dengan component lain minimal 4 component reusable
// 4. Buat 1 file page.jsx & gunakan data pokemon.js untuk merender gabungan component2 1-3
// https://leafyglossybug.kobarseptyanus1.repl.co/webapi/
// 5. Import Page.jsx ke dalam App.js 
// 6. Tambahkan onClick event dan ganti chosen-one dengan hasil pilihan
// 7. Fetch ke https://pokeapi.co/api/v2/pokemon
// 8. Dapat informasi url lalu fetch berdasarkan url masing2 pokemon
// 9. Dapatkan informasi imageUrl dari sprites.other.dream_world.front_default, name dari name
// 10. Masukan ke dalam array pokemons dan ganti hasil render pokemon dengan menggunakan hasil dari fetch (array pokemons)
// 12. Buat branch baru sesi-tiga
// 13. Buat folder page & component
// 14. Pindah seluruh file komponen ke dalam folder component selain Page.jsx
// 15. Rename Page.jsx menjadi Homepage.jsx dan pindahkan ke folder page (Done)
// 16. Atur halaman dengan react router DOM dan pastikan Homepage berada pada route "/"
// 17. Tambahkan halaman location dengan route "/location" dan ambil data listing location dari "https://pokeapi.co/api/v2/location-area", tambahkan button dimana ketika diclick akan redirect ke halaman "/loc
// 17. Tambahkan halaman location dengan route "/location" dan ambil data listing location dari "https://pokeapi.co/api/v2/location-area", tambahkan button dimana ketika diclick akan redirect ke halaman "/location/:id" contoh "/location/1"
// 18.Tambahkan halaman pokemons dengan route "/location/:id" dan ambil data listing location dari "https://pokeapi.co/api/v2/location-area/${id}", halaman ini mirip seperti halaman homepage hanya beda data pokemons saja dimana data pokemons diambil dari "pokemon_encounters". Tambahkan h1 di paling atas halaman dengan data dari nama location.
// 19. Di page home, ketika pilih pokemon, maka simpan informasi nama pokemon yang dipilih ke dalam local storage.
// 20. Buat halaman login sederhana, isinya sesuai dengan postman yang dibagikan
// 21. Ketika sudah mendapatkan token, maka simpan ke dalam local storage
// 22. Akses halaman location detail (contoh /location/1), ketika pilih pokemon simpan informasi nama pokemon pilihan ke dalam local storage lalu redirect ke halaman /fight
// 23. Buat halaman /fight dimana kalian mensimulasikan pertarungan pokemon dari halaman home dengan pokemon pilihan dari location, HP awal adalah masing-masing 100. Jika kalah maka kurangi darah pokemon yang kalah sebesar 10 HP. Ketika salah satu sudah 0 maka tampilkan pesan apakah kalau atau menang. Simulasi pertarungan kalian gunakan request fight pada postman collection