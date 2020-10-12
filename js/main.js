const summaryCompHandler = document.getElementById("summaryComp")

let gpu = [
    {
        id: 1,
        name: "MSI GTX 1660 VENTUS XS 6G OC, 6GB GDDR5",
        price: 945,
        img:"gpu1.jpg"
    },
    {
        id: 2,
        name: "Gigabyte Radeon RX 5600 XT Gaming OC 6GB GDDR6",
        price: 1349,
        img:"gpu2.jpg"
    },
    {
        id: 3,
        name: "MSI GeForce RTX 2080Ti Gaming X Trio 11GB GDDR6",
        price: 5696,
        img:"gpu3.jpg"
    },
    {
        id: 4,
        name: "EVGA GeForce RTX 2070 XC Gaming 8GB GDDR6",
        price: 2592,
        img:"gpu4.jpg"
    },
]

let mb = [
    {
        id: 1,
        name: "ASRock B460 Phantom Gaming 4",
        price: 399,
        img:"mb1.jpg"
    },
    {
        id: 2,
        name: "MSI MAG Z490 TOMAHAWK",
        price: 843,
        img:"mb2.jpg"
    },
    {
        id: 3,
        name: "ASRock B450M PRO4",
        price: 339,
        img:"mb3.jpg"
    },
    {
        id: 4,
        name: "MSI MPG X570 GAMING EDGE WIFI",
        price: 909,
        img:"mb4.jpg"
    },
]

let cpu = [
    {
        id: 1,
        name: "i5-10400F, 2.9GHz, 12 MB, BOX",
        price: 699,
        img:"proc1.jpg"
    },
    {
        id: 2,
        name: "AMD Ryzen 7 3700X, 3.6GHz, 32 MB, BOX",
        price: 1320,
        img:"proc2.jpg"
    },
    {
        id: 3,
        name: "Intel Core i9-10850K, 3.6GHz, 20 MB, BOX",
        price: 2189,
        img:"proc3.jpg"
    },
    {
        id: 4,
        name: "AMD Ryzen 3 3100, 3.6GHz, 16 MB, BOX",
        price: 489,
        img:"proc4.jpg"
    },
]

let ram = [
    {
        id: 1,
        name: "Corsair Vengeance LPX, DDR4, 16 GB, 3200MHz, CL16",
        price: 289,
        img:"ram1.jpg"
    },
    {
        id: 2,
        name: "GoodRam IRDM, DDR4, 16 GB, 3600MHz, CL17",
        price: 318,
        img:"ram2.jpg"
    },
    {
        id: 3,
        name: "HyperX Predator RGB, DDR4, 16 GB, 4000MHz, CL19",
        price: 671,
        img:"ram3.jpg"
    },
    {
        id: 4,
        name: "G.Skill Trident Z Neo, DDR4, 32 GB, 3600MHz, CL16",
        price: 917,
        img:"ram4.jpg"
    },
]

let zasilacz = [
    {
        id: 1,
        name: "SilentiumPC Vero L3 500W",
        price: 219,
        img:"zasilacz1.jpg"
    },
    {
        id: 2,
        name: "Asus ROG Thor 80 Plus Platinum 850W",
        price: 1159,
        img:"zasilacz2.jpg"
    },
    {
        id: 3,
        name: "Corsair RM750x 750W",
        price: 619,
        img:"zasilacz3.jpg"
    },
    {
        id: 4,
        name: "Chieftec GPS-500A8 500W",
        price: 189,
        img:"zasilacz4.jpg"
    },
]

let obudowa = [
    {
        id: 1,
        name: "SilentiumPC Signum SG7V Evo TG ARGB",
        price: 389,
        img:"obudowa1.jpg"
    },
    {
        id: 2,
        name: "SilentiumPC Regnum RG4T Pure Black",
        price: 199,
        img:"obudowa2.jpg"
    },
    {
        id: 3,
        name: "be quiet! Silent Base 601",
        price: 568,
        img:"obudowa3.jpg"
    },
    {
        id: 4,
        name: "be quiet! DArk Bas Pro 900 V2",
        price: 1089,
        img:"obudowa4.jpg"
    },
]
let ssd = [
    {
        id: 1,
        name: "GoodRam IRDM 120 GB 2.5'' SATA III",
        price: 134,
        img:"ssd120.jpg"
    },
    {
        id: 2,
        name: "ADATA Ultimate SU800 256 GB 2.5'' SATA III",
        price: 169,
        img:"ssd256.jpg"
    },
    {
        id: 3,
        name: "Crucial MX500 500 GB 2.5'' SATA III",
        price: 269,
        img:"ssd500.jpg"
    },
    {
        id: 4,
        name: "Samsung 860 EVO 1 TB 2.5'' SATA III",
        price: 619,
        img:"ssd1000.jpg"
    },
]
let hdd = [
    {
        id: 1,
        name: "Toshiba P300 1 TB SATA III",
        price: 160,
        img:"hdd100.jpeg"
    },
    {
        id: 2,
        name: "Seagate Barracuda 2 TB SATA III",
        price: 259,
        img:"hdd2000.jpg"
    },
    {
        id: 3,
        name: "Toshiba 4 TB SATA III X300",
        price: 589,
        img:"hdd4000.jpg"
    },
    {
        id: 4,
        name: "Seagate Exos 6 TB SATA III",
        price: 949,
        img:"hdd6000.jpg"
    },
]
let fancpu = [
    {
        id: 1,
        name: "SilentiumPC Fortis 3",
        price: 155,
        img:"fan1.jpg"
    },
    {
        id: 2,
        name: "be quiet! Dark Rock 4 Pro",
        price: 423,
        img:"fan2.jpg"
    },
    {
        id: 3,
        name: "SilentiumPC Navis RGB 240",
        price: 319,
        img:"fan3.jpg"
    },
    {
        id: 4,
        name: "Corsair Hydro Series H100i RGB Platinum",
        price: 599,
        img:"fan4.jpg"
    },
]
let monitor = [
    {
        id: 1,
        name: "Samsung U28R550",
        price: 1799,
        img:"monitor1.jpg"
    },
    {
        id: 2,
        name: "iiyama G-Master Black Hawk G2530HSU-B1",
        price: 599,
        img:"monitor2.jpg"
    },
    {
        id: 3,
        name: "Acer K222HQLbid",
        price: 359,
        img:"monitor3.png"
    },
    {
        id: 4,
        name: "LG 27GL850-B",
        price: 2299,
        img:"monitor4.jpg"
    },
]
var cart = [
    {
        name: 'mb',
        price: 0
    },
    {
        name: 'cpu',
        price: 0
    },
    {
        name: 'gpu',
        price: 0
    },
    {
        name: 'ram',
        price: 0
    },
    {
        name: 'zasilacz',
        price: 0
    },
    {
        name: 'obudowa',
        price: 0
    },
    {
        name: 'ssd',
        price: 0
    },
    {
        name: 'hdd',
        price: 0
    },
    {
        name: 'fancpu',
        price: 0
    },
    {
        name: 'monitor',
        price: 0
    },
]
function  addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);
    option = document.createElement("option");
    option.setAttribute("value", optValue);
    const textOption = document.createTextNode(textOpt);
    option.appendChild(textOption);
    select1.appendChild(option);
}

function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute("value");
    console.log("Wybrany element ma ID"+strAtt);

    const summaryCpu = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGpu = document. getElementById("summaryGpu");
    const summaryRam = document. getElementById("summaryRam");
    const summaryObudowa = document. getElementById("summaryObudowa");
    const summarySSD = document. getElementById("summarySSD");
    const summaryfancpu = document. getElementById("summaryfancpu");
    const summarymonitor = document. getElementById("summarymonitor");

    if (SelectId == "cpu") {
        summaryCpu.innerHTML = "<td><img src='img/"+cpu[strAtt-1].img+"'></td><td>"+cpu[strAtt - 1].name + "</td><td>" + cpu[strAtt - 1].price+"zł</td"
        cart[0].price = cpu[strAtt - 1].price
        cart[0].name = cpu[strAtt - 1].name
    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML = "<td><img src='img/"+mb[strAtt-1].img+"'></td><td>"+mb[strAtt - 1].name + "</td><td>" + mb[strAtt - 1].price +"zł</td>"
        cart[1].price = mb[strAtt - 1].price
        cart[1].name = mb[strAtt - 1].name
    }
    else if (SelectId == "gpu") {
        summaryGpu.innerHTML ="<td><img src='img/"+gpu[strAtt-1].img+"'></td><td>"+gpu[strAtt-1].name + "</td><td>" + gpu[strAtt-1].price +"zł</td>"
        cart[2].price = gpu[strAtt - 1].price
        cart[2].name = gpu[strAtt - 1].name
    }
    else if (SelectId == "ram") {
        summaryRam.innerHTML ="<td><img src='img/"+ram[strAtt-1].img+"'></td><td>"+ram[strAtt - 1].name + "</td><td>" + ram[strAtt - 1].price +"zł</td>"
        cart[3].price = ram[strAtt - 1].price
        cart[3].name = ram[strAtt - 1].name
    }
    else if (SelectId == "zasilacz") {
        summaryZasilacz.innerHTML ="<td><img src='img/"+zasilacz[strAtt-1].img+"'></td><td>"+zasilacz[strAtt - 1].name + "</td><td>" + zasilacz[strAtt - 1].price +"zł</td>"
        cart[4].price = zasilacz[strAtt - 1].price
        cart[4].name = zasilacz[strAtt - 1].name
    }
    else if (SelectId == "obudowa") {
        summaryObudowa.innerHTML ="<td><img src='img/"+obudowa[strAtt-1].img+"'></td><td>"+obudowa[strAtt - 1].name + "</td><td>" + obudowa[strAtt - 1].price +"zł</td>"
        cart[5].price = obudowa[strAtt - 1].price
        cart[5].name = obudowa[strAtt - 1].name
    }
    else if (SelectId == "ssd") {
        summarySSD.innerHTML ="<td><img src='img/"+ssd[strAtt-1].img+"'></td><td>"+ssd[strAtt - 1].name + "</td><td>" + ssd[strAtt - 1].price +"zł</td>"
        cart[6].price = ssd[strAtt - 1].price
        cart[6].name = ssd[strAtt - 1].name
    }
    else if (SelectId == "hdd") {
        summaryHDD.innerHTML ="<td><img src='img/"+hdd[strAtt-1].img+"'></td><td>"+hdd[strAtt - 1].name + "</td><td>" + hdd[strAtt - 1].price +"zł</td>"
        cart[7].price = hdd[strAtt - 1].price
        cart[7].name = hdd[strAtt - 1].name
    }
    else if (SelectId == "fancpu") {
        summaryfancpu.innerHTML ="<td><img src='img/"+fancpu[strAtt-1].img+"'></td><td>"+fancpu[strAtt - 1].name + "</td><td>" + fancpu[strAtt - 1].price +"zł</td>"
        cart[8].price = fancpu[strAtt - 1].price
        cart[8].name = fancpu[strAtt - 1].name
    }
    else if (SelectId == "monitor") {
        summarymonitor.innerHTML ="<td><img src='img/"+monitor[strAtt-1].img+"'></td><td>"+monitor[strAtt - 1].name + "</td><td>" + monitor[strAtt - 1].price +"zł</td>"
        cart[9].price = monitor[strAtt - 1].price
        cart[9].name = monitor[strAtt - 1].name
    }
    else{}
    document.getElementById("sumALL").innerHTML="<b>Suma koszyka: "+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price+cart[6].price+cart[7].price+cart[8].price+cart[9].price) +"</b>zł"
}

for(let i=0; i<mb.length; i++){
    addOpt("mb", mb[i].id, mb[i].name, mb[i].price)
}
for (let i=0; i<gpu.length; i++){
    addOpt("gpu", gpu[i].id, gpu[i].name, gpu[i].price)
}
for (let i=0; i< cpu.length; i++){
    addOpt("cpu", cpu[i].id, cpu[i].name, cpu[i].price)
}
for (let i=0; i< ram.length; i++){
    addOpt("ram", ram[i].id, ram[i].name, ram[i].price)
}
for (let i=0; i< zasilacz.length; i++){
    addOpt("zasilacz", zasilacz[i].id, zasilacz[i].name, zasilacz[i].price)
}
for (let i=0; i< obudowa.length; i++){
    addOpt("obudowa", obudowa[i].id, obudowa[i].name, obudowa[i].price)
}
for (let i=0; i< ssd.length; i++){
    addOpt("ssd", ssd[i].id, ssd[i].name, ssd[i].price)
}
for (let i=0; i< hdd.length; i++){
    addOpt("hdd", hdd[i].id, hdd[i].name, hdd[i].price)
}
for (let i=0; i< fancpu.length; i++){
    addOpt("fancpu", fancpu[i].id, fancpu[i].name, fancpu[i].price)
}
for (let i=0; i< monitor.length; i++){
    addOpt("monitor", monitor[i].id, monitor[i].name, monitor[i].price)
}