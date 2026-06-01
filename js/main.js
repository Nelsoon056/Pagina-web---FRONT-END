const mascaras = [
    ["Richard (Gallo)", "../assets/images/RICHARD.webp", "Sin efecto adicional. La máscara por defecto y un símbolo del juego."],
    ["Rasmus (Búho)", "../assets/images/Rasmus.webp", "Un ojo para los secretos. Hace que los objetos coleccionables e interactivos brillen en el mapa."],
    ["Tony (Tigre)", "../assets/images/Tony.webp", "Puños de furia. Los golpes cuerpo a cuerpo son letales y las ejecuciones son mucho más rápidas."],
    ["Aubrey (Cerdo)", "../assets/images/Aubrey.webp", "Más armas. Aumenta significativamente la cantidad de armas de fuego que dejan caer los enemigos al morir."],
    ["Don Juan (Caballo)", "assets/images/Don_Juan.webp", "Puertas letales. Al golpear a los enemigos abriendo puertas, mueren al instante en lugar de solo quedar aturdidos."],
    ["Graham (Conejo)", "assets/images/Graham.webp", "Caminar rápido. Aumenta la velocidad de movimiento, ideal para esquivar disparos y hacer combos rápidos."],
    ["Dennis (Lobo)", "assets/images/Dennis.webp", "Empiezas con un cuchillo. Ideal para partidas sigilosas y ataques cuerpo a cuerpo desde el primer segundo."],
    ["George (Jirafa)", "assets/images/George.webp", "Mira más lejos. Permite desplazar la cámara mucho más allá de lo normal para planear tu ruta."],
    ["Ted (Perro)", "assets/images/Ted.webp", "Los perros no te atacan. Los molestos perros guardianes te ignorarán por completo a menos que los ataques primero."],
    ["Rufus (Elefante)", "assets/images/Rufus.webp", "Sobrevives a una bala. Te otorga una 'vida extra' al resistir un disparo que normalmente sería letal."],
    ["Willem (Mono)", "assets/images/Willem.webp", "Robar y matar. Al presionar el botón de ejecución, robas el arma del enemigo mientras lo eliminas."],
    ["Peter (Unicornio)", "assets/images/Peter.webp", "Disparos silenciosos. Las armas de fuego hacen mucho menos ruido, evitando alertar a todos los enemigos del piso."],
    ["Zack (Rana)", "assets/images/Zack.webp", "Ventana de combo más larga. Te da más tiempo entre muertes para mantener tu racha y conseguir más puntos."],
    ["Richter (Rata)", "assets/images/Richter.webp", "Empiezas con una Uzi con silenciador. Fuego rápido y sigiloso desde el inicio del nivel."],
    ["Carl (Saltamontes)", "assets/images/Carl.webp", "Empiezas con un taladro. Te otorga un arma cuerpo a cuerpo única y ejecuciones muy sangrientas (y ruidosas)."],
    ["Jake (Cobra)", "assets/images/Jake.webp", "Lanzamientos letales. Cualquier arma u objeto que arrojes matará a los enemigos al instante en lugar de aturdirlos."],
    ["Louie (Camaleón)", "assets/images/Louie.webp", "Difícil de detectar. Los enemigos tardan más tiempo en notarte, dándote unos valiosos segundos extra para actuar."]
];

const mascara = document.getElementById("mascara_display");
const nombre_mascara = document.getElementById("mascara_nombre");
const descripcion_mascara = document.getElementById("mascara_descripcion");
let indice = 0;

function girarRuleta(num) {
    indice = indice + num;
    if (indice >= mascaras.length) {
        indice = 0;
    } else if (indice < 0) {
        indice = mascaras.length -1;
    }
    
    mascara.src = mascaras[indice][1];
    nombre_mascara.innerText = mascaras[indice][0];
    descripcion_mascara.innerText = mascaras[indice][2];
}