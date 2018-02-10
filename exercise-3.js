var input = [
                   ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                   ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                   ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                   ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
               ];
   var height = 4;
   var i = 1;
   var iArray = 0;

   while (i<=height) {
     console.log ('Nomor ID: ' + input [iArray][0])
     console.log ('Nama Lengkap: ' + input [iArray][1])
     console.log ('TTL: ' + input [iArray][2] + ' ' + input[iArray][3])
     console.log ('Hobi: ' + input [iArray][4])
     console.log()
   iArray++
   i++;
 }
