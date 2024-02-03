class Activity {
  constructor({ id, title, description, imgURL }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgURL = imgURL;
  }
}
class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }
  createActivity(activity) {
    this.id++;
    const newActivity = new Activity({ id: this.id, ...activity });
    this.activities.push(newActivity);
  }
  getAllActivities() {
    return this.activities;
  }
  deleteActivity(id) {
    const filter = this.activities.filter((activity) => activity.id !== id);
    this.activities = filter;
  }
}
const repository = new Repository();

function buildActivity(activity) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", activity.id);

  const nuevaActividad = document.createElement("h2");
  nuevaActividad.innerText = agrearTexto(activity);


  const descripcionActividadjs = document.createElement("p");
  descripcionActividadjs.innerText = agrandarPrimeraLetra(activity)

  const linkImagenjs = document.createElement("img");
  linkImagenjs.src = activity.imgURL;

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.innerText = "Eliminar";
  deleteButton.addEventListener("click", () => {
    card.remove();
    repository.deleteActivity(activity.id);
  });

  card.appendChild(nuevaActividad);
  card.appendChild(descripcionActividadjs);
  card.appendChild(linkImagenjs);
  card.appendChild(deleteButton);

  return card;
}

function buildActivities(activities) {
  const container = document.getElementById("contenedorCard");
  container.innerHTML = "";

  activities.map((activity) => {
    const card = buildActivity(activity);
    container.appendChild(card);
  });
}

function agrearTexto(activity) {
  return `|${activity.title.charAt(0).toUpperCase() + activity.title.slice(1)}|`
}

function agrandarPrimeraLetra(activity) {
  return `${activity.description.charAt(0).toUpperCase() + activity.description.slice(1)}`
}

const handleClick = function (event) {
  event.preventDefault();

  const nombreActividad = document.getElementById("nombreActividad");
  const descripcionActividad = document.getElementById("descripcionActividad");
  const linkImagen = document.getElementById("linkImagen");

  const nombreActividadValue = nombreActividad.value.trim();
  const descripcionActividadValue = descripcionActividad.value.trim();
  const linkImagenValue = linkImagen.value.trim();

  if (!nombreActividadValue || !descripcionActividadValue || !linkImagenValue) {
    alert("Todos los campos deben estar llenos");
    return;
  }

  const activityData = {
    title: nombreActividadValue,
    description: descripcionActividadValue,
    imgURL: linkImagenValue,
  };

  repository.createActivity(activityData);

  buildActivities(repository.getAllActivities());

  nombreActividad.value = "";
  descripcionActividad.value = "";
  linkImagen.value = "";
};

const enviar = document.getElementById("enviar");
enviar.addEventListener("click", handleClick);

