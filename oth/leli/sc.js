function ivo(icon){
    let head = document.getElementsByTagName('head')[0]
    let link = document.createElement('link')
    link.setAttribute('href',icon)
    link.setAttribute('type','image/x-icon')
    link.setAttribute('rel','shortcut icon')
    head.appendChild(link)
}
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
}
function outop(del, le = 0) {
    console.log('dayli ',del)
    //re(del)
    for (;le <= del.length - 1; le++){
        document.getElementById('l' + (le + 1)).innerHTML = del[le]
    }
}

ivo('m/psi.png')

let les = [
    'алгебра',
    'геометрия',
    'руский',
    'литиратура',
    'информатика',
    'физка',
    'химия',
    'биология',
    'география',
    'история',
    'общестрознание',
    'экология',
    'обж',
    'черчение',
    'технология',
    'английский язык'
    // '',
    // '',
    // '',
]
let l = les
// let lth = [ 9, 11, 12, 13, 14, 15, 16, 17]
// let ltm = [ 0, 55,  5, 50, 40, 25, 10]

let lth  = [ 9,  9, 11, 12, 13, 13, 14, 15, 16, 17]
let ltms = [ 0, 55,  0,  5,  0, 55, 50, 40, 25, 10]
let ltme = [45, 40, 45, 50, 45, 40, 35, 20,  5, 50]

// let lt = [
//     '09:00',
//     '09:55',
//     '11:00',
//     '12:05',
//     '13:00',
//     '13:55',
//     '14:50',
//     '15:40',
//     '16:25',
//     '17:10'
// ]

// 1 урок   09:00-09:45
// 2 урок	09:55-10:40
// 3 урок	11:00-11:45
// 4 урок	12:05-12:50
// 5 урок	13:00-13:45
// 6 урок	13:55-14:40
// 7 урок	14:50-15:35

let $1 = [
    les[0],
    les[1],
    les[3],
    les[10],
    les[15]
]
let $2 = [
    les[7],
    les[2],
    les[4],
    les[6],
    les[12],
    les[8],
    les[13],
    les[15],
    les[1],
    les[7]
]
let $3 = [
    les[6],
    les[3],
    les[9],
    les[11]
]
let $4 = [
    les[12],
    les[4],
    les[4],
    les[8]
]
let $5 = [
    les[7],
    les[5],
    les[0],
    les[8]
]
let $6 = [
    les[15],
    les[6],
    les[11],
    les[6]
]
let $0 = [

]


// console.log('les: ',les)
// console.log('$! : ',$1)


let h, m, ml, s, d, dl, ds, dss
let f1
let dev
let date
dl = -1
ml = -1
console.log(window.innerWidth+' x '+window.innerHeight)

setInterval(function () {
    date = new Date(),//2020, 7, 4, 12, 6),
        h = date.getHours(),
        m = date.getUTCMinutes(),
        s = date.getUTCSeconds(),
        d = date.getDay(),

        h = (h < 10) ? '0' + h : h,
        m = (m < 10) ? '0' + m : m,
        s = (s < 10) ? '0' + s : s,

        ds = getWeekDay(date)
        dss = '$' + d

        if (dl !== d){
            if (d >= 0 || d <= 6) {ivo('m/'+d+'.png')}
            console.log(ds+'('+d+')',h.toString(),m.toString(),s.toString())
            if (d === 1){
                outop($1)
            }else if (d === 2) {
                outop($2)
            }else if (d === 3) {
                outop($3)
            }else if (d === 4) {
                outop($4)
            }else if (d === 5) {
                outop($5)
            }else if (d === 6) {
                outop($6)
            }else if (d === 0) {
                outop($0)
            }else {
                //outop($2)
                console.log('err 92 d = ' + d)
            }
            dl = d
        }

        if (ml !== m){
            for (f1 = 0; f1 < lth.length; f1++){
                if (h == lth[f1] && m >= ltms[f1] && m <= ltme[f1]) {
                    console.log('focus ' + (f1 + 1) + ' ' + lth[f1] + ':' + ltms[f1] + '-' + ltme[f1],$2[f1])
                    dev = document.getElementById('l' + (f1 + 1));
                    dev.style.color = '#000';
                }else{
                    dev = document.getElementById('l' + (f1 + 1));
                    dev.style.color = 'rgba(0, 0, 0, .5)';
                }
            }
            ml = m
        }

        document.getElementById('time').innerHTML = ds + ' ' + h + ':' + m + ':' + s
}, 1000);