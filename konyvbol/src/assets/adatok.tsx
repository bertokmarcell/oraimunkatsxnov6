export interface KONYTYPE{
    id:number;
    cim:string;
    szerzo:string;
    ar:number;
    darabszam:number;
}
export const KONYVEKLISTAJA:KONYTYPE[]=[{
    id:0,cim:"titanic",szerzo:"decabrio",ar:1500,darabszam:2
},{
    id:1,cim:"witcher",szerzo:"polishguy",ar:7000,darabszam:1000
},{
    id:2,cim:"blogwork",szerzo:"Kiss Áron",ar:500,darabszam:850000
},{
    id:3,cim:"biblia magyarul",szerzo:"Nagy Áron",ar:40000,darabszam:10
},{
    id:4,cim:"alapok a js kódhoz",szerzo:"Közepes Áron",ar:0,darabszam:666
},{
    id:5,cim:"51. árnyalata a szürkének",szerzo:"Sok Áron",ar:2000,darabszam:26
},{
    id:6,cim:"ateisták szentkönyve",szerzo:"Pogány Áron",ar:4500,darabszam:300
},{
    id:7,cim:"davinci resolve kezdőknak",szerzo:"Vágó Áron",ar:700,darabszam:80
},{
    id:8,cim:"varrás mint a pro",szerzo:"Szabó Áron",ar:7777,darabszam:52
},{
    id:9,cim:"Árvaluták idiótáknak",szerzo:"Ár Áron",ar:23,darabszam:300
},{
    id:10,cim:"Férfi nevek babáknak",szerzo:"Áron Áron",ar:2000,darabszam:800
}]