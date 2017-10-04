let body = document.getElementsByTagName('body')[0]

let div1= document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')

let sayHello = () =>("Hello ArrayMatching | destructing assignment")

div1.innerHTML = sayHello()

console.log(sayHello())

body.append(div1)
body.append(div2)
body.append(div3)
body.append(div4)
body.append(div5)

let angka = [1,2,3]
let mix = ['a','arief',...angka]

let [a,b] = angka
let [e,c,...d] = mix

body.append(`array sebelum destruct ${angka}
dan array sesudah destruct ${[a,b]}`)


div2.innerHTML = `array destruct dengan operator rest : ${[e,c,...d]}`


let nama,alamat

({nama,alamat} = {nama1:"arief",alamat:"ME"})

div3.innerHTML  = `${nama} dan ${alamat}`

let nama1,alamat1

({nama1,alamat1} = {nama1:"putro",alamat1:"ME"})

div4.innerHTML = `${nama1} , dengan alamat ${alamat1}`


let kucing = {
    jenis:"anggora",
    suara(){
        return "meong"
    },
    lokasi :{
        lat : 242123.2,
        lng : -232312.1
    }
}

//let jenis,suara

//let {jenis,suara} = kucing
//({jenis,suara} = {jenis:"Persia",suara(){return "Hello"}})

//let {jenis,suara} = {jenis:"Persia",suara(){return "Hello"}}
//let {lokasi :{lat,lng}} = kucing

//let {jenis,suara,lokasi: {lat,lng}} = {jenis:"Anggora",suara(){return "Meong"},lat:11,lng:22}

//let lat,lng
//({lat,lng} = {lat:22,lng:22})

let person = {
    nama2:"arief",
    location1:{
        lat : 222.2,
        lng :-921.2
    },
    pets:[
        {
            jenis:"kucing Anggora"
        },
        {
            jenis:"anjing husky"
        },
        {
            jenis:"Cacing besar alaska"
        }
    ]
}

//let {location :{lat,lng}} = person
//let {pets:[ { kucing: {jenis,makanan} } , { anjing: {jenis2,makanan2} } ]} = person

let pet = person.pets

for(let p in pet){
    console.log(pet[p].jenis)
}

//div5.innerHTML = `${lat} || ${lng} || ${jenis} || ${makanan} || ${jenis2} || ${makanan2}`
