export default function Card({ id, title, about, images }) {
  return (
  <section class="p-3 m-0 border-0 bd-example m-0 border-0">
    <div class="card" style="width: 18rem;">
      <svg aria-label="Placeholder: Image cap" class="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <img src={images} class="card-img-top" alt={title} />
      <div class="card-body">
        <h3>{id}</h3>
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{about}</p>
        <a href="#" class="btn btn-primary">Voir logiciel</a>
        <a href="#" class="btn btn-primary">Code source</a>
      </div>
    </div>
  </section>
  )
}