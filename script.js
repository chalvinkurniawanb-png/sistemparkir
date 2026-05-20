const form = document.getElementById("parkirForm");
const tabel = document.getElementById("tabelParkir");
const totalParkir = document.getElementById("totalParkir");

let dataParkir = [];

form.addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const plat = document.getElementById("plat").value;
  const kendaraan = document.getElementById("kendaraan").value;

  const data = {
    nama,
    kelas,
    plat,
    kendaraan
  };

  dataParkir.push(data);

  tampilkanData();

  form.reset();
});

function tampilkanData(){
  tabel.innerHTML = "";

  dataParkir.forEach((item, index) => {

    tabel.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama}</td>
        <td>${item.kelas}</td>
        <td>${item.plat}</td>
        <td>${item.kendaraan}</td>
        <td>
          <button class="hapus" onclick="hapusData(${index})">
            Hapus
          </button>
        </td>
      </tr>
    `;
  });

  totalParkir.innerHTML =
    "Total Kendaraan: " + dataParkir.length;
}

function hapusData(index){
  dataParkir.splice(index, 1);

  tampilkanData();
}