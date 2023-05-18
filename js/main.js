const url = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_MX/champion.json`;

fetch(url)
  .then((res) => res.json())
  .then((data) => mostrarnombre(data));

function mostrarnombre(data) {
  const nombres = Object.keys(data.data);

  for (const iterator of nombres) {
    let url2 = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/es_MX/champion/${iterator}.json`;
    fetch(url2)
      .then((res) => res.json())
      .then((data) => mostrarinfo(data));
  }
}

function mostrarinfo(data) {
  let vacio = " ";
  const personajes = data.data;
  const infoPerosnajes = Object.values(personajes);
  
  for (let i = 0; i < infoPerosnajes.length; i++) {
    const ID = infoPerosnajes[i].id
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

        <a href="#">Jugar</a>
        </div>
        <div class="visual">
             <img src="${imgen}" alt="" />
                </div>
                </section> `;
   
  } 
  console.log(vacio);
document.getElementById("mostrar").innerHTML+=vacio

}
