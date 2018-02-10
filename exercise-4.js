var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2() {
   var nama = input[1].split(' ');
   var daerah = input[2].split(' ');

   nama.push('Elshawary');
   daerah.unshift('Provinsi');

   input.splice(1, 1, nama.join(' '));
   input.splice(2, 1, daerah.join(' '));
   input.splice(4, 1,"Pria", "SMA Internasional Metro");

     console.log(input);

   var menggantiBulan = input[3].split('/');
   var bulan = parseInt(menggantiBulan[1]);


   switch (bulan) {
   case 1: {bulan = 'Januari';break;}
   case 2: {bulan = 'Februari';break;}
   case 3: {bulan = 'Maret';break;}
   case 4: {bulan = 'April'; break;}
   case 5: {bulan = 'Mei'; break;}
   case 6: {bulan = 'Juni'; break;}
   case 7: {bulan = 'Juli';break;}
   case 8: {bulan = 'Agustus';break;}
   case 9: {bulan = 'September';break;}
   case 10: {bulan = 'Oktober';break;}
   case 11: {bulan = 'November';break;}
   case 12: {bulan = 'Desember';break;}
   default: {console.log('Masukan bulan');}
  }
   console.log(bulan);

   var sorted = menggantiBulan.sort(function(a, b){return b-a});
     console.log(sorted);

   var tanggalStrip = input[3].split('/');
     console.log(tanggalStrip.join('-'));

   var batasnNama = input[1].split('');
   batasnNama.splice(15, 10);

     console.log(batasnNama.join(''));
 }
dataHandling2()
