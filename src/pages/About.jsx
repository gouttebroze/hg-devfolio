//import Gallery from '../components/Gallery';
import { Footer } from '../components/Footer';
import { soutiens } from '../datas.js';

export function About() {

    return (
      <>
        <ul>
          {soutiens.map(soutien => (
            <li key={soutien.id}>
              <img src={soutien.images} alt={soutien.title} />
              <h3>{soutien.title}</h3>
              <p>{soutien.about}</p>
              <a href={soutien.url} target="_blank" rel="noopener noreferrer">Visit</a>
            </li>
          ))}
        </ul>

      </>
    )
  }