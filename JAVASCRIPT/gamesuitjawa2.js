//pilihan komputer
function pilihanComp() {
    //buat tandom angka lalu bulatkan dan batasi 
    const comp = Math.floor(Math.random() * 3 + 1);

    if (comp == 1) return 'gajah';
    if (comp == 2) return 'orang'
    if (comp == 3) return 'semut'

}

//rules dari game
function rulesGame(pilihanComp, player) {

    if (player == pilihanComp) return "seri"
    if (player == "gajah") return (pilihanComp == "orang") ? 'menang' : 'kalah';
    if (player == "orang") return (pilihanComp == "gajah") ? 'kalah' : 'menang';
    if (player == "semut") return (pilihanComp == "orang") ? 'kalah' : 'menang';

}

//animasi pada pemilihan computer
function putar() {
    const imgCo = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktu = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktu > 1000) {
            clearInterval
            return
        }
        imgCo.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0
    }, 100)
}

let scoreP = 0
let scoreC = 0
//menjalankan event yang di pilih player
const player = document.querySelectorAll('li img')
player.forEach(function (pGambar) {
    pGambar.addEventListener('click', function () {


        const pilihanComputer = pilihanComp()
        const pilihanP = pGambar.className
        const hasil = rulesGame(pilihanComputer, pilihanP)



        putar()
        setTimeout(function () {
            //jalankan setelah fitur putar
            const imgC = document.querySelector('.img-komputer')
            imgC.setAttribute('src', 'img/' + pilihanComputer + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil

            if (hasil == 'menang') { scoreP++ }
            if (hasil == 'kalah') { scoreC++ }

            const score = document.querySelector('.score')
            score.innerHTML = scoreP

            const scoreCo = document.querySelector('.scoreC')
            scoreCo.innerHTML = scoreC

        }, 1000)

    })
})

//set intervall dan time out




// const gajah = document.querySelector('.gajah')
// gajah.addEventListener('click', function () {
//     const pilihanCo = pilihanC()
//     const pilihanP = gajah.className
//     const hasil = hasilC(pilihanCo, pilihanP)

//     const imgC = document.querySelector('.img-komputer')
//     imgC.setAttribute('src', 'img/' + pilihanCo + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })