const url = `https://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_MX/champion.json`;
const options = {
  method: "GET",
  Headers:{
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://nirclaw.github.io/ApiDeLeagueOfLegends1.0/"
  }
};

fetch(url,options)
  .then((res) => res.json())
  .then((data) => mostrarnombre(data));

function mostrarnombre(data) {
  const nombres = Object.keys(data.data);

  for (const iterator of nombres) {
    let url2 = `https://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_MX/champion/${iterator}.json`;
    fetch(url2,options)
      .then((res) => res.json())
      .then((data) => mostrarinfo(data));
  }
}

function mostrarinfo(data) {
  let vacio = " ";
  const personajes = data.data;
  const infoPerosnajes = Object.values(personajes);

  for (let i = 0; i < infoPerosnajes.length; i++) {
    const ID = infoPerosnajes[i].id;
    const nombre = infoPerosnajes[i].name;
    const origen = infoPerosnajes[i].blurb;
    const rol = (infoPerosnajes[i].tags[0], infoPerosnajes[i].tags[1]);
    const imgen = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${ID}_0.jpg`;
    /*HTML*/
    vacio += `<section class="card">
        <div class="text-content">
            <h3>${nombre}</h3>
            <p>${origen}</p>  
            <p>${rol}</p>  

        <a href="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ID}_0.jpg" target="_blanck">img completa</a>
        </div>
        <div class="visual">
             <img src="${imgen}" alt="" />
        </div>
         </section> `;
  }

  document.getElementById("mostrar").innerHTML += vacio;
}
