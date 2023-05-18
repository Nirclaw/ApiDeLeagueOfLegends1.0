

const  url = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_MX/champion.json`

fetch(url).then(res=> res.json()).then(data => mostrarnombre(data))

function mostrarnombre(data){
  const  nombres=Object.keys(data.data)
  

for (const iterator of nombres) {
    let url2 = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_MX/champion/${iterator}.json`
    fetch(url2).then(res => res.json()).then(data=> mostrarinfo(data))
}}

function mostrarinfo(data){
    console.log(Object.values(data.data)[0]);
}