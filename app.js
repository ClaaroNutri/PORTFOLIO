let oscuro = document.querySelector(".btn");

let proyecto = document.querySelector(".proyectos");

let fondo = document.body;

let capaProyecto = document.createElement("div");
fondo.appendChild(capaProyecto);

let button = document.createElement("button");
button.innerHTML = "Atrás";
button.classList.add("volver");

let skill = document.querySelector(".skills");

let sobreMi = document.querySelector(".about");

const pantallaSobreMi = () => {
  let div1 = document.createElement("div");
  div1.innerHTML = `
    <div class="container mi mt-3">
        <h3>Soy Claudia</h3>
        <div class="row sobre_mi mt-4">
            <div class="col col-md-5">
              <p>Soy <strong>Licenciada en Nutrición</strong>, me recibí en la Universidad de Buenos Aires. Cuento con 20 años de experiencia en la atención de pacientes, trabajo que me permitío desarrollar la capacidad de <strong>empatia</strong>, <strong>escucha</strong>, acompañamiento y <strong>resolución de problemas</strong> para el logro de los objetivos de salud de mis consultantes.<br> En los ultimos tiempos comencé a interesarme en la tecnología y descubrí un área que me llenó de curiosidad y deseo de explorar. Mi formación es una combinación entre lo autodidacta y lo formal. Mis estudios incluyen los cursos impartidos por el gobierno de la ciudad de Buenos Aires, bajo la propuesta Codo a Codo. Allí participé y completé <strong>Desarrollo Full Stack NodeJs, Diseño UX/UI, Big Data y React </strong>. Me interesa particularmente el <strong>desarrolo Front End</strong> y la creación de interfaces atractivas y útiles para una mejor experiencia del usuario.</p>
            </div>
            <div class="col col-md-5 foto">
            <div class="profile-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                     <img class="yo" src="./img/WhatsApp_Image_2024-09-20_at_18.28.53-removebg-preview.png">
                  </div>
                  <div class="flip-card-back">
                  <h4>Claudia Andrea Aronno</h4>
                   <h6>Desarrolladora Front-End</h6>
                 </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
    `;
  div1.classList.add("sobre_mi");
  capaProyecto.appendChild(div1);
};
sobreMi.addEventListener("click", () => {
  if (capaProyecto.classList.contains("banner") != true) {
    capaProyecto.classList.add("banner");
    capaProyecto.appendChild(button);
    backHome();
    pantallaSobreMi();
  } else {
    capaProyecto.classList.remove("banner");
  }
});

const pantallaSkill = () => {
  let div1 = document.createElement("div");
  div1.innerHTML = `
    <div class="container container-skill mt-5">
    <h3 class="title_skill text-center mt-4">Estas son las tecnologias que manejo
    </h3>
    <div class="skill-wrapper mt-4">
    <div class="skill-item">
    <img src="./img/html5-logo-72.png" class="skill">
    <img src="./img/css3-logo-72.png" class="skill">
    <img src="./img/javascript-logo-72.png" class="skill">
    <img src="./img/bootstrap-logo-72.png" class="skill">
    <img src="./img/nodejs-logo-72.png" class="skill">
    <img src="./img/github-logo-72.png" class="skill">
    <img src="./img/firebase-logo-72.png" class="skill">
    <img src="./img/react-logo-72.png" class="skill">
    <img src="./img/postgresql-logo-72.png" class="skill">
    <img src="./img/figma-logo-72.png" class="skill">
    <img src="./img/html5-logo-72.png" class="skill">
    <img src="./img/css3-logo-72.png" class="skill">
    <img src="./img/javascript-logo-72.png" class="skill">
    <img src="./img/bootstrap-logo-72.png" class="skill">
    <img src="./img/nodejs-logo-72.png" class="skill">
    <img src="./img/github-logo-72.png" class="skill">
    <img src="./img/firebase-logo-72.png" class="skill">
    <img src="./img/react-logo-72.png" class="skill">
    <img src="./img/postgresql-logo-72.png" class="skill">
    <img src="./img/figma-logo-72.png" class="skill">
    </div>
    </div>
    <div class="skill-wrapper mt-4">
    <div class="skill-item">
    <p>HTML - CSS - JAVASCRIPT - BOOTSTRAP - NODEJS - GITHUB - FIREBASE - REACT - SQL - FIGMA </p>
    <p>HTML - CSS - JAVASCRIPT - BOOTSTRAP - NODEJS - GITHUB - FIREBASE - REACT - SQL - FIGMA </p>
    <p>HTML - CSS - JAVASCRIPT - BOOTSTRAP - NODEJS - GITHUB - FIREBASE - REACT - SQL - FIGMA -</p>
    </div>
    </div>
    </div>
    `;
  capaProyecto.appendChild(div1);
};

skill.addEventListener("click", () => {
  if (capaProyecto.classList.contains("banner") != true) {
    capaProyecto.classList.add("banner");
    capaProyecto.appendChild(button);
    backHome();
    pantallaSkill();
  } else {
    capaProyecto.classList.remove("banner");
  }
});

oscuro.addEventListener("click", () => {
  let fondo = document.body;
  if (fondo.style.backgroundColor != "black") {
    fondo.style.backgroundColor = "black";
    oscuro.innerHTML = "MODO CLARO";
    oscuro.style.color = "white";
  } else {
    fondo.style.backgroundColor = "white";
    oscuro.innerHTML = "MODO OSCURO";
    oscuro.style.color = "grey";
  }
});

const backHome = () => {
  button.addEventListener("click", () => {
    capaProyecto.classList.remove("banner");
    capaProyecto.innerHTML = "";
  });
};

let contacto = document.querySelector(".contacto");

const pantallaContacto = () => {
  let div1 = document.createElement("div");
  div1.innerHTML = `
    <div class="pag-contacto">
    <form action="https://formsubmit.co/claudiaronno@gmail.com" method="POST">
    <h3>Completa el Formulario y me comunico con vos</h3>
    <div class="form-group  col-md-4">
    <label for="formGroupExampleInput"></label>
    <input type="text" name="nombre" class="form-control" id="formGroupExampleInput">Dejame tu Nombre
    </div>
    <div class="form-group  col-md-4">
    <label for="exampleInputEmail1"></label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">Dejame tu Email
    </div>
    <div class="form-group col-md-4">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" name="consulta" id="exampleFormControlTextarea1" rows="8">Escribí tu consulta o comentario </textarea>
  </div>
    <button type="submit" class="btn btn-contacto mt-4">Submit</button>
  </form>
  <div class="what">
  <a href="https://wa.me/5491150407050" target="_blank"><img src="./img/whatsapp-48.png"></a>
  </div>
  </div>
    `;
  capaProyecto.appendChild(div1);
};
contacto.addEventListener("click", () => {
  if (capaProyecto.classList.contains("banner") != true) {
    capaProyecto.classList.add("banner");
    capaProyecto.appendChild(button);
    backHome();
    pantallaContacto();
  } else {
    capaProyecto.classList.remove("banner");
  }
});

const pantallaProyecto = () => {
  let div1 = document.createElement("div");
  div1.innerHTML = `
  <div class="container container-card">
  <h3>Echale un vistazo a mis proyectos</h3>
   <div class="row row-proyecto">
    <div class="card col-md-3">
        <h3 class="title-proyecto">ARGEN RESTÓ</h3>
          <p>E-commerce. Maquetado con HTML y CSS. Interactividad con Javascript</p>
          <a href="https://claaronutri.github.io/ArgenResto/" class="enlace_proy">Ver proyecto</a>
    </div>
    <div class="card col-md-3">
          <h3 class="title-proyecto">NUTRI WEB</h3>
            <p>Página web profesional. Maquetado con HTML y CSS. Interactividad con Javascript.</p>
            <a href="https://claaro-nutri-web.vercel.app/" class="enlace_proy">Ver proyecto</a>
        </div>
      <div class="card col-md-3">
          <h3 class="title-proyecto">TODO LIST</h3>
           <p>Lista de tareas, con almacenamiento en Local Storage. Integración de API de clima y de citas famosas</p>
            <a href="https://claaronutri.github.io/TODO-LIST/" class="enlace_proy">Ver proyecto</a>
      </div>
      <div class="card col-md-3">
          <h3 class="title-proyecto">NUTRI WEB</h3>
            <p>Página web profesional. Maquetado con HTML y CSS. Interactividad con Javascript.</p>
            <a href="" class="enlace_proy">Ver proyecto</a>
        </div>
        <div class="card col-md-3">
          <h3 class="title-proyecto">NUTRI WEB</h3>
            <p>Página web profesional. Maquetado con HTML y CSS. Interactividad con Javascript.</p>
            <a href="" class="enlace_proy">Ver proyecto</a>
        </div>
  </div>
</div>

    `;
  capaProyecto.appendChild(div1);
};
proyecto.addEventListener("click", () => {
  if (capaProyecto.classList.contains("banner") != true) {
    capaProyecto.classList.add("banner");
    capaProyecto.appendChild(button);
    backHome();
    pantallaProyecto();
  } else {
    capaProyecto.classList.remove("banner");
  }
});
