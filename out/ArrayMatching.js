'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var body = document.getElementsByTagName('body')[0];

var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');

var sayHello = function sayHello() {
    return "Hello ArrayMatching | destructing assignment";
};

div1.innerHTML = sayHello();

console.log(sayHello());

body.append(div1);
body.append(div2);
body.append(div3);
body.append(div4);
body.append(div5);

var angka = [1, 2, 3];
var mix = ['a', 'arief'].concat(angka);

var a = angka[0],
    b = angka[1];

var _mix = _toArray(mix),
    e = _mix[0],
    c = _mix[1],
    d = _mix.slice(2);

body.append('array sebelum destruct ' + angka + '\ndan array sesudah destruct ' + [a, b]);

div2.innerHTML = 'array destruct dengan operator rest : ' + [e, c].concat(_toConsumableArray(d));

var nama = void 0,
    alamat = void 0;

var _nama1$alamat = { nama1: "arief", alamat: "ME" };
nama = _nama1$alamat.nama;
alamat = _nama1$alamat.alamat;


div3.innerHTML = nama + ' dan ' + alamat;

var nama1 = void 0,
    alamat1 = void 0;

var _nama1$alamat2 = { nama1: "putro", alamat1: "ME" };
nama1 = _nama1$alamat2.nama1;
alamat1 = _nama1$alamat2.alamat1;


div4.innerHTML = nama1 + ' , dengan alamat ' + alamat1;

var kucing = {
    jenis: "anggora",
    suara: function suara() {
        return "meong";
    },

    lokasi: {
        lat: 242123.2,
        lng: -232312.1
    }

    //let jenis,suara

    //let {jenis,suara} = kucing
    //({jenis,suara} = {jenis:"Persia",suara(){return "Hello"}})

    //let {jenis,suara} = {jenis:"Persia",suara(){return "Hello"}}
    //let {lokasi :{lat,lng}} = kucing

    //let {jenis,suara,lokasi: {lat,lng}} = {jenis:"Anggora",suara(){return "Meong"},lat:11,lng:22}

    //let lat,lng
    //({lat,lng} = {lat:22,lng:22})

};var person = {
    nama2: "arief",
    location1: {
        lat: 222.2,
        lng: -921.2
    },
    pets: [{
        jenis: "kucing Anggora"
    }, {
        jenis: "anjing husky"
    }, {
        jenis: "Cacing besar alaska"
    }]

    //let {location :{lat,lng}} = person
    //let {pets:[ { kucing: {jenis,makanan} } , { anjing: {jenis2,makanan2} } ]} = person

};var pet = person.pets;

for (var p in pet) {
    console.log(pet[p].jenis);
}

//div5.innerHTML = `${lat} || ${lng} || ${jenis} || ${makanan} || ${jenis2} || ${makanan2}`