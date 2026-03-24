const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//--buat objek gambar--
const char = new Image();
char.src = 'character1.png';

//--looad Image--
// char.onload = function(){
//     //masukan gambar ke canvas
//     ctx.drawImage(char, 50, 50, 100, 100)
// }

// posisi gambar dari ujung kiri menggunakan variable

let characterX = 0;  // Posisi horizontal
let characterY = 300;  // Posisi vertikal
let speed = 5;     // Kecepatan gerak

// --gerakan otomatis--
// function movement(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height) //menghapus bayangan kanvas
//     characterX += speed;
//     if(characterX > canvas.width){
//         characterX = -100;
//     }
//     ctx.drawImage(char, characterX, characterY);
//     requestAnimationFrame(movement);
//  }

// char.onload = movement;

// -- membuat gambar bergerak dengan tombol keyboard -- 

// variable untuk tombolnya
const keys = {
    w: false,
    a: false,
    s: false,
    d: false
};

// deteksi tombol setelah ditekan
window.addEventListener('keydown',function(e){
   const key = e.key.toLowerCase();
    if(keys.hasOwnProperty(key)){
        keys[key] = true;
    }
});

//deteksi tombol saat dilepas
window.addEventListener('keyup', function(e){
   const key = e.key.toLowerCase();
    if(keys.hasOwnProperty(key)){
        keys[key] = false;
    }
});

// --update fungsi movement--
function movement(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //cek tombol dan ubah posisi
    if (keys.w) characterY -= speed;
    if (keys.a) characterX -= speed;
    if (keys.s) characterY += speed;
    if (keys.d) characterX += speed;

    ctx.drawImage(char, characterX, characterY);

    requestAnimationFrame(movement);
}

char.onload = movement

