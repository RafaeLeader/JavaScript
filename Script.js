let harga;
let nama_brg;
let ket="";
let jumlah=0;
let total=0;
let subtotal=0;

function cek_barang(){
    let nama = document.getElementById("listbarang").value;
    switch(nama) {
        case "buku":
            harga = 10000;
            nama_brg ="buku";
            break;
        case "tas":
            harga = 50000;
            nama_brg ="tas";
            break;
        case "pensil":
            harga = 5000;
            nama_brg ="pensil";
            break;
        case "penghapus":
            harga = 1500;
            nama_brg ="penghapus";
            break;
    }
    jumlah = document.getElementById("jumlah").value;
    subtotal = jumlah * harga;
    total = total + subtotal;
    ket = ket + nama_brg + ":" + harga + "*" + subtotal + "<br>";
    document.getElementById("barang").innerHTML = "total belanja =" + total;
}