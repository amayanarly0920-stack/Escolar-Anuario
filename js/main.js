/* =====================================================================
   ANUARIO PROMOCIÓN 2026 · I.E. Eugenio Ferro Falla
   1) DATOS: lista (array) de objetos, un objeto por persona.
   2) Las imágenes se buscan en las carpetas img/fotos/ y img/firmas/
      con el número de cada persona:  img/fotos/01.jpg  img/firmas/01.png
   3) Los cambios hechos con ✏️ Editar se guardan en el navegador.
   ===================================================================== */

const anuario = {
  colegio: "Eugenio Ferro Falla",
  anio: "2026",
  lema: "Hoy dejamos huella, mañana somos historia",
  cierreTitulo: "¡Gracias por todo!",
  cierreTexto: "Más que una institución, una familia. Aquí también se construyen sueños.",
  estudiantes: [
    {
      "id": "01",
      "nombre": "Laura Liney Alarcon Cortes",
      "cargo": "",
      "frase": "El que persevera alcanza",
      "recuerdo": "Haber encontrado una persona realmente leal en mi vida",
      "aspiraciones": [
        "Enfermera",
        "Doctora",
        "Ingeniera"
      ],
      "agradecimientos": "Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia."
    },
    {
      "id": "02",
      "nombre": "Narly Lizeth Amaya Losada",
      "cargo": "",
      "frase": "No entendí nada",
      "recuerdo": "Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa",
      "aspiraciones": [
        "Seguir estudiando",
        "Terminar hasta sacar el tecnólogo",
        "Trabajar para conseguir mis cosas"
      ],
      "agradecimientos": "A mis padres y a todos los docentes que me acompañaron"
    },
    {
      "id": "03",
      "nombre": "Nycolt Danihela Barrera Mosquera",
      "cargo": "",
      "frase": "\" Su Madreeee \"",
      "recuerdo": "Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en septimo con unas amigas",
      "aspiraciones": [
        "Estudiar en el Sena",
        "Hacer orgullosa a mi madre",
        "Infante de Marina",
        "Chef"
      ],
      "agradecimientos": "Le doy gracias a mi madre por darme u apoyo incondicional en mis etudios y por siempre confiar en mí"
    },
    {
      "id": "04",
      "nombre": "Andres Felipe Bastidas Lombana",
      "cargo": "",
      "frase": "Relax que yo remonto",
      "recuerdo": "Mi noviazgo",
      "aspiraciones": [
        "Odontologo",
        "Mi grado de bachiller"
      ],
      "agradecimientos": "Agradezco a mis padre por todo el esfuerzo que hicieron todos estos años para que yo pudiera llegar hasta acá"
    },
    {
      "id": "05",
      "nombre": "Estiven Julian Benitez Castro",
      "cargo": "",
      "frase": "Mire a este negro",
      "recuerdo": "Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos, para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.",
      "aspiraciones": [
        "Convertirme en doctor y alcanzar todas mis metas profesionales, preparándome con dedicación para proteger la salud de las personas y cumplir con éxito cada objetivo que me proponga en el futuro."
      ],
      "agradecimientos": "Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria."
    },
    {
      "id": "06",
      "nombre": "Nikoll Lizeth Bocanegra Giraldo",
      "cargo": "",
      "frase": "En nombre de Dios, todo lo lograre",
      "recuerdo": "Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora",
      "aspiraciones": [
        "Estudiar la carrera de mis sueños"
      ],
      "agradecimientos": "Gracias a mi familia por el apoyo"
    },
    {
      "id": "07",
      "nombre": "Danna Valentina Caviedes Perdomo",
      "cargo": "",
      "frase": "ay Dios mio",
      "recuerdo": "Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.",
      "aspiraciones": [
        "Estudiar psicología, o seguir con el técnico."
      ],
      "agradecimientos": "Les doy las gracias a mis padres por su apoyo emocional, económico, a mis maestros por su paciencia, y todas las enseñanzas que me han dejado."
    },
    {
      "id": "08",
      "nombre": "Zaidy Liceth Cuellar Caviedes",
      "cargo": "",
      "frase": "Ay no que pena",
      "recuerdo": "Mi recuerdo favorito de decimo fue compartir risas, locuras y momento inovidables con mis compañeros, creando recuerdos que siempre llevare en mi corazó.",
      "aspiraciones": [
        "Estudiar en el SENA",
        "Hacer el orgullosa de mi familia",
        "Cumplir mi sueño sin rendirme",
        "Crecer como persona y aprender de mis errores"
      ],
      "agradecimientos": "Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida."
    },
    {
      "id": "09",
      "nombre": "Kewin Daniel Escobar Ramirez",
      "cargo": "",
      "frase": "ole no",
      "recuerdo": "el dia que jugue un torneo departamental",
      "aspiraciones": [
        "ser profesional en multimedia",
        "debutar como jugador"
      ],
      "agradecimientos": "le agradesco a mi familia por apoyarme"
    },
    {
      "id": "10",
      "nombre": "Laura Fuentes Aranda",
      "cargo": "",
      "frase": "Estoy siendo victima de Xenofobia por parte de mi compañero Benítez",
      "recuerdo": "Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la ultima hora de todos los miércoles.",
      "aspiraciones": [
        "Ser programadora y tener una vida tranquila y digna"
      ],
      "agradecimientos": "Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin.\nA Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando ; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño.\nA mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación.\nA mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso.\nPero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos."
    },
    {
      "id": "11",
      "nombre": "Laura Valentina Galindo Diaz",
      "cargo": "",
      "frase": "Tengo Sueño",
      "recuerdo": "Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria",
      "aspiraciones": [
        "Poder especializarme en lo que mas aspiro"
      ],
      "agradecimientos": "Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante."
    },
    {
      "id": "12",
      "nombre": "Mariana García Pérez",
      "cargo": "",
      "frase": "Falsos",
      "recuerdo": "La vez que hicieron caer a Edwin y de paso a Natalia en el puente de guaunda y quedó cochino",
      "aspiraciones": [
        "Psicología o licenciatura en lengua castellana"
      ],
      "agradecimientos": "Agradezco principalmente a Dios y a mis padres sobre todo a mi hermana Nubia quien ah hecho el papel principal en apoyarme tanto académica como financieramente, los amo."
    },
    {
      "id": "13",
      "nombre": "Jesus Fernando Gutierres Diz",
      "cargo": "",
      "frase": "Los errores ocurren",
      "recuerdo": "Cuando obtuve las 80horas sociales sin hacer practicamente nada.",
      "aspiraciones": [
        "Convertirme en un Medico"
      ],
      "agradecimientos": "Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante."
    },
    {
      "id": "14",
      "nombre": "Laura Angeline Marinez Olaya",
      "cargo": "",
      "frase": "no joda",
      "recuerdo": "Con mis padres de pequeña",
      "aspiraciones": [
        "Estudiar derecho"
      ],
      "agradecimientos": "agradezco a mi familia"
    },
    {
      "id": "15",
      "nombre": "Francy Fidelina Medina Garcia",
      "cargo": "",
      "frase": "Todo es mental",
      "recuerdo": "mi recuerdo favorito en general es cuando compartimos",
      "aspiraciones": [
        "Graduarme",
        "Ingresar a la universidad",
        "Estudiar Medicina",
        "Crecer como persona y ayudar a mi familia",
        "Conocer nuevos lugares y cumplir cada uno de mis sueños"
      ],
      "agradecimientos": "Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica."
    },
    {
      "id": "16",
      "nombre": "Isabella Monje Vega",
      "cargo": "",
      "frase": "Te cuento un chiste amisga",
      "recuerdo": "Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio",
      "aspiraciones": [
        "Tener mi propia empresa",
        "Llegar a componer mis propias canciones"
      ],
      "agradecimientos": "le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mi incluso cuando yo no lo podía hacer"
    },
    {
      "id": "17",
      "nombre": "Saory Valentina Montaña Piñeros",
      "cargo": "",
      "frase": "tengo hambre",
      "recuerdo": "cuando me la pasaba jugando voleibol",
      "aspiraciones": [
        "salir del colegio y formar una carrera"
      ],
      "agradecimientos": "agradecimiento a todos los que me acompañaron en mi formación académica"
    },
    {
      "id": "18",
      "nombre": "Julieth Valentina Mora Esquivel",
      "cargo": "",
      "frase": "somos la resistencia",
      "recuerdo": "en 7mo cuando jugábamos futbol la mayoría del salón unidos",
      "aspiraciones": [
        "estudiar lo que me gusta y terminarlo",
        "trabajar en eso",
        "formar una hermosa familia"
      ],
      "agradecimientos": "agradezco primeramente a Dios por haberme permitirme estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad q tengo"
    },
    {
      "id": "19",
      "nombre": "Cristian Rene Muñoz Quintero",
      "cargo": "",
      "frase": "amo a angeline",
      "recuerdo": "Cuando fui novio de angeline",
      "aspiraciones": [
        "hacer un tecnologo en el SENA",
        "ir a la UNI y estudiar lo que me gusta para ganar mucha plata"
      ],
      "agradecimientos": "cc"
    },
    {
      "id": "20",
      "nombre": "Alex Felipe Ortiz Narvaez",
      "cargo": "",
      "frase": "No mienta",
      "recuerdo": "cuando jugaba micro con mi compañeros",
      "aspiraciones": [
        "estudiar mi carrera de mis sueños y ser un gran profecional"
      ],
      "agradecimientos": "Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo."
    },
    {
      "id": "21",
      "nombre": "Duvan Felipe Ortiz Sarmiento",
      "cargo": "",
      "frase": "yo si estudie pero se me olvido todo",
      "recuerdo": "cuando jugué futbol con mis compañeros y nos golearon pero no faltaron las risas",
      "aspiraciones": [
        "Terminar mis estudios y graduarme del colegio",
        "Estudiar lo que me gusta y convertirme en un gran profesional",
        "Tener un buen trabajo, una casa propia, ayudar económicamente a mi familia y hacer sentir orgullosos a mi mamá y hermano",
        "Viajar y conocer nuevos lugares",
        "Ser una persona responsable, humilde y respetuosa, y cumplir cada uno de mis sueños con la ayuda de Dios"
      ],
      "agradecimientos": "Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida."
    },
    {
      "id": "22",
      "nombre": "Joan Sebastian Ramirez Garcia",
      "cargo": "",
      "frase": "sapa",
      "recuerdo": "c",
      "aspiraciones": [
        "ser un gran empresario"
      ],
      "agradecimientos": "ccc"
    },
    {
      "id": "23",
      "nombre": "Julieta Rocha Losada",
      "cargo": "",
      "frase": "Todo pasa por algo, los planes de Dios son perfectos",
      "recuerdo": "Cuando me cay en un rio con mis amigos y aprovechamos y nos bañamos.",
      "aspiraciones": [
        "Llegar a ser profesora de pedagogía infantil para mostrar el amor tan grande que tengo con los niños y enseñarles las bases que les van a servir para el resto de su vida",
        "Estudiar para ser azafata, uno de mis mayores sueños"
      ],
      "agradecimientos": "A mis papas que han estado en el momento en que naci y me han apollado en todo"
    },
    {
      "id": "24",
      "nombre": "Heilyn Yireth Sánchez Dussan",
      "cargo": "",
      "frase": "ya quisiera yo",
      "recuerdo": "el compartir de la salchipapa",
      "aspiraciones": [
        "llegar ser una persona exitosa que no necesita ayuda de los demás"
      ],
      "agradecimientos": "agradezco a mi familia, amigos , compañeros y profesores por darme enseñanzas , ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora ."
    },
    {
      "id": "25",
      "nombre": "Thaliana Sofia Sanchez Rocha",
      "cargo": "",
      "frase": "vive la vida",
      "recuerdo": "el 2022 con mis amigas",
      "aspiraciones": [
        "ser feliz"
      ],
      "agradecimientos": "agradezco a mdzs , a mis padres, a mis profesores y a los compañeros para ayudarme a lograr mis metas"
    },
    {
      "id": "26",
      "nombre": "Hillary Natalia Serrato Acosta",
      "cargo": "",
      "frase": "\"No todo es para siempre, pero tú sí vas a poder con todo.\"",
      "recuerdo": "Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río esa vez me lanzaron al río con otro compañero yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación nos llevaron para allá le pusieron observación y nos regañaron",
      "aspiraciones": [
        "Terminar mi bachillerato con la ayuda de Dios y graduarme",
        "Estudiar para ser una gran licenciada en educación infantil"
      ],
      "agradecimientos": ""
    },
    {
      "id": "27",
      "nombre": "Laura Sofia Serrato Trujillo",
      "cargo": "",
      "frase": "uy no atrás satanás",
      "recuerdo": "mi recuerdo favorito es cuando todos fuimos a la casa de el man que me gustaba y ellos se pusieron a de serenata la canción de la ventana marroncita",
      "aspiraciones": [
        "Quiero graduarme feliz junto a mis amigos",
        "Terminar el tecnólogo",
        "Homologar y estudiar diseño",
        "Estudiar mas cursos en el sena",
        "Entrar en la universidad y estudiar biología; graduarme de la universidad; ser profesional con lo estudiado"
      ],
      "agradecimientos": "gracias a mis amigos: Laura fuentes, Ancizar Triana, Joan Ramírez, Isabella moje, Yuvettslit Yunda... y a todo el salón por ser tan especial para mi y por ser tan unidos a pesar de nuestras diferencias"
    },
    {
      "id": "28",
      "nombre": "Nicolas Soto Calderon",
      "cargo": "",
      "frase": "yo que me saque un 3 me conformo",
      "recuerdo": "cuando jugamos un partido con mis amigos y nos golearon",
      "aspiraciones": [
        "tener un trabajo estable",
        "tener un titulo profesional de ingeniero",
        "estar junto a mis padres"
      ],
      "agradecimientos": "Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo y gracias a eso es podido con todo y siempre salir adelante afrontando todo"
    },
    {
      "id": "29",
      "nombre": "Ancizar Steven Triana Murcia",
      "cargo": "",
      "frase": "six seven",
      "recuerdo": "El día del compartir en 10°",
      "aspiraciones": [
        "Terminar el tecnólogo",
        "Irme del país junto a mi familia",
        "Hacer la Universidad",
        "Tener hijos"
      ],
      "agradecimientos": "Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe sebas por ser tan buen docente y a mis amigos por hacer los dias tan divertidos y mas faciles"
    },
    {
      "id": "30",
      "nombre": "Yuvettslit Yunda Cortes",
      "cargo": "",
      "frase": "Life goes on",
      "recuerdo": "mi mamá y yo en la graduación de 9no, por como se veía y sentí su orgullo",
      "aspiraciones": [
        "Ayudar a mi mamá",
        "Llegar a ser profesional en marketing",
        "Viajar",
        "Tener un trabajo estable y obtener dinero",
        "Especializarme en algo"
      ],
      "agradecimientos": "A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo por demostrarme su apoyo, amor y orgullo"
    },
    {
      "id": "31",
      "nombre": "Johan Sebastian Masmelas Vega",
      "cargo": "Docente de Multimedia",
      "frase": "La constancia consede la victoria",
      "recuerdo": "Cuando me gradue de Ingeniero",
      "aspiraciones": [
        "Doctorado en Educacion",
        "Tener Salud",
        "Ser feliz"
      ],
      "agradecimientos": "A mi familia quiero agradecerles por ser mi mayor refujio y mi equipo incondicional."
    }
  ]
};

/* ---------- Estado ---------- */
const CLAVE = "anuario2026-datos";
const EXTS = ["jpg", "jpeg", "png", "webp"];
let datos = JSON.parse(JSON.stringify(anuario)); // copia de trabajo
let subidas = {};                                // imágenes subidas (guardadas en el navegador)
let actual = 0, editando = false, ocupado = false;

const $ = s => document.querySelector(s);
const esc = t => String(t ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- Guardar y cargar (localStorage) ---------- */
function guardar() {
  try { localStorage.setItem(CLAVE, JSON.stringify({ datos, subidas })); aviso("✔ Cambios guardados"); }
  catch (e) { aviso("⚠ No hay espacio para guardar. Usa «Descargar respaldo» o pon las imágenes en las carpetas."); }
}
function cargar() {
  try {
    const g = JSON.parse(localStorage.getItem(CLAVE));
    if (g && g.datos) { datos = g.datos; subidas = g.subidas || {}; }
  } catch (e) {}
}
function aviso(t) { $("#aviso").textContent = t; }

/* ---------- Imágenes: busca la subida o prueba cada extensión ---------- */
function img(carpeta, id, alt, clase = "") {
  const sub = subidas[carpeta + id];
  return sub ? `<img class="${clase}" src="${sub}" alt="${alt}">`
             : `<img class="${clase}" data-base="img/${carpeta}/${id}" data-i="0" alt="${alt}">`;
}
function activarImagenes(raiz) {
  raiz.querySelectorAll("img[data-base]").forEach(im => {
    const probar = () => {
      const i = +im.dataset.i;
      if (i >= EXTS.length) { im.classList.add("oculto"); if (im.parentElement) im.parentElement.classList.add("sin-imagen"); return; }
      im.src = `${im.dataset.base}.${EXTS[i]}`; im.dataset.i = i + 1;
    };
    im.onerror = probar; probar();
  });
}
/* Reduce la imagen subida para que quepa en el navegador */
function reducir(archivo, max, tipo) {
  return new Promise(res => {
    const lector = new FileReader();
    lector.onload = () => {
      const im = new Image();
      im.onload = () => {
        const k = Math.min(1, max / Math.max(im.width, im.height));
        const c = document.createElement("canvas");
        c.width = im.width * k; c.height = im.height * k;
        c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
        res(c.toDataURL(tipo, 0.82));
      };
      im.src = lector.result;
    };
    lector.readAsDataURL(archivo);
  });
}

/* ---------- Construcción de cada página ---------- */
function cabecera() {
  return `<header>${img("", "escudo", "Escudo")}<div>INSTITUCIÓN EDUCATIVA<strong>${esc(datos.colegio).toUpperCase()}</strong></div></header>`;
}
function campo(clave, valor, texto, largo) {
  return largo ? `<textarea rows="3" data-c="${clave}" placeholder="${texto}">${esc(valor)}</textarea>`
                : `<input type="text" data-c="${clave}" value="${esc(valor)}" placeholder="${texto}">`;
}
function paginaPortada() {
  const d = datos;
  return `<section class="portada ${editando ? "edicion" : ""}">
    ${img("", "escudo", "Escudo", "escudo")}
    <small>INSTITUCIÓN EDUCATIVA</small><h2>${esc(d.colegio).toUpperCase()}</h2>
    <p class="titulo">Anuario</p><div class="promocion">Promoción ${esc(d.anio)}</div>
    <p class="lema">${esc(d.lema)}</p>
    ${img("", "colegio", "Foto del colegio", "foto-portada")}
    ${editando ? `<div style="width:100%">${campo("colegio", d.colegio, "Colegio")}${campo("anio", d.anio, "Año")}${campo("lema", d.lema, "Lema")}
      <p style="font-size:11px">Pon el escudo en <b>img/escudo.png</b> y la foto en <b>img/colegio.jpg</b></p></div>` : ""}
  </section>`;
}
function paginaCierre() {
  const d = datos;
  return `<section class="cierre ${editando ? "edicion" : ""}">${img("", "escudo", "Escudo", "escudo")}
    <p class="grande">${esc(d.cierreTitulo)}</p><p style="max-width:80%">${esc(d.cierreTexto)}</p>
    ${editando ? `<div style="width:100%">${campo("cierreTitulo", d.cierreTitulo, "Título")}${campo("cierreTexto", d.cierreTexto, "Mensaje", true)}</div>` : ""}</section>`;
}
function paginaEstudiante(e, n) {
  const E = editando, a = e.aspiraciones || [];
  const largo = (e.agradecimientos || "").length > 350;
  const L = [e.frase, e.recuerdo, e.agradecimientos, ...a].join("").length;
  const k = L < 700 ? 1 : L < 1100 ? .85 : L < 1500 ? .72 : .62;   // letra más pequeña si hay mucho texto
  const caja = (clave, titulo, color, largoCampo) =>
    `<div class="caja ${color}"><h2>${titulo}</h2>${E ? campo(clave, e[clave], titulo, largoCampo) : `<p>${esc(e[clave])}</p>`}</div>`;
  return `<article class="estudiante-pagina ${E ? "edicion" : ""}" style="--k:${k}" data-n="${n}">
    ${cabecera()}
    <div class="fila">
      <div><div class="marco">${img("fotos", e.id, "Foto de " + esc(e.nombre))}</div>
        ${E ? `<label class="subir">📷 Subir foto<input type="file" accept="image/*" hidden data-sube="fotos"></label>` : ""}</div>
      <div>
        <div class="caja c-amarilla"><h2>Nombre completo:</h2>${E ? campo("nombre", e.nombre, "Nombre") + campo("cargo", e.cargo, "Cargo (solo docentes)") : `<h1 style="margin:2px 0;font-size:1.3em">${esc(e.nombre)}</h1>${e.cargo ? `<p class="cargo">🎓 ${esc(e.cargo)}</p>` : ""}`}</div>
        ${caja("frase", "Mi frase favorita:", "c-roja", true)}
      </div>
    </div>
    <div class="dos">
      ${caja("recuerdo", "Mi recuerdo favorito:", "c-verde", true)}
      <div class="caja c-amarilla"><h2>Mis aspiraciones:</h2>
        ${E ? [0,1,2,3,4].map(i => `<input type="text" data-asp="${i}" value="${esc(a[i])}" placeholder="${i+1}.">`).join("")
            : `<ul>${a.filter(Boolean).map(x => `<li>${esc(x)}</li>`).join("")}</ul>`}</div>
    </div>
    <div class="${largo ? "" : "dos"}">
      ${caja("agradecimientos", "Mis agradecimientos:", "c-roja", true)}
      <div class="caja c-gris"><h2>Mi firma:</h2><div class="firma">${img("firmas", e.id, "Firma")}</div>
        ${E ? `<label class="subir">✍️ Subir firma<input type="file" accept="image/*" hidden data-sube="firmas"></label>` : ""}</div>
    </div>
  </article>`;
}

/* ---------- Dibujar el libro: todas las páginas, solo una visible ---------- */
function construir() {
  const paginas = [paginaPortada(), ...datos.estudiantes.map(paginaEstudiante), paginaCierre()];
  $("#libro").innerHTML = paginas.map((p, i) =>
    `<div class="pagina ${i === actual ? "" : "oculto"}" data-p="${i}">${p}</div>`).join("");
  activarImagenes($("#libro")); conectarEdicion(); contador();
}
function contador() {
  const t = $("#libro").children.length;
  $("#contador").textContent = `${actual + 1} / ${t}`;
  $("#btnAnterior").disabled = actual === 0; $("#btnSiguiente").disabled = actual === t - 1;
}

/* ---------- Navegación: oculta la página actual y muestra la siguiente ---------- */
function ir(paso) {
  const paginas = [...$("#libro").children], nueva = actual + paso;
  if (ocupado || nueva < 0 || nueva >= paginas.length) return;
  paginas[actual].classList.add("oculto");
  actual = nueva;
  const p = paginas[actual];
  p.classList.remove("oculto", "entra", "entra-atras"); void p.offsetWidth;   // reinicia la animación
  p.classList.add(paso > 0 ? "entra" : "entra-atras");
  contador();
}
$("#btnSiguiente").onclick = () => ir(1);
$("#btnAnterior").onclick = () => ir(-1);
document.addEventListener("keydown", e => {
  if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
  if (e.key === "ArrowRight") ir(1); if (e.key === "ArrowLeft") ir(-1);
});
let x0 = null;
$("#libro").addEventListener("touchstart", e => x0 = e.touches[0].clientX, {passive:true});
$("#libro").addEventListener("touchend", e => {
  if (x0 === null || editando) return;
  const d = e.changedTouches[0].clientX - x0; if (Math.abs(d) > 50) ir(d < 0 ? 1 : -1); x0 = null;
});

/* ---------- Edición: los cambios se guardan solos ---------- */
function conectarEdicion() {
  if (!editando) return;
  const pag = () => $(`.pagina[data-p="${actual}"] [data-n]`);
  document.querySelectorAll("#libro [data-c]").forEach(el => el.onchange = () => {
    const art = el.closest("[data-n]");
    (art ? datos.estudiantes[+art.dataset.n] : datos)[el.dataset.c] = el.value;
    guardar();
  });
  document.querySelectorAll("#libro [data-asp]").forEach(el => el.onchange = () => {
    const e = datos.estudiantes[+el.closest("[data-n]").dataset.n];
    e.aspiraciones = e.aspiraciones || []; while (e.aspiraciones.length < 5) e.aspiraciones.push("");
    e.aspiraciones[+el.dataset.asp] = el.value; guardar();
  });
  document.querySelectorAll("#libro [data-sube]").forEach(el => el.onchange = async () => {
    if (!el.files[0]) return;
    const e = datos.estudiantes[+el.closest("[data-n]").dataset.n], tipo = el.dataset.sube;
    subidas[tipo + e.id] = await reducir(el.files[0], tipo === "fotos" ? 600 : 500, tipo === "fotos" ? "image/jpeg" : "image/png");
    guardar(); construir();
  });
}
$("#btnEditar").onclick = () => {
  editando = !editando;
  $("#btnEditar").textContent = editando ? "✔ Terminar edición" : "✏️ Editar";
  ["#btnGuardar", "#lblCargar", "#btnReset"].forEach(s => $(s).classList.toggle("oculto", !editando));
  const a = actual; construir(); actual = a;
};

/* ---------- Respaldo y restablecer ---------- */
$("#btnGuardar").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify({ datos, subidas })], {type: "application/json"}));
  a.download = "respaldo-anuario-2026.json"; a.click();
};
$("#inpCargar").onchange = e => {
  const f = e.target.files[0]; if (!f) return;
  f.text().then(t => { const g = JSON.parse(t); datos = g.datos; subidas = g.subidas || {}; guardar(); construir(); });
};
$("#btnReset").onclick = () => {
  if (confirm("¿Borrar todos los cambios guardados y volver a los datos originales?")) {
    localStorage.removeItem(CLAVE); location.reload();
  }
};

/* ---------- Inicio ---------- */
cargar(); construir();