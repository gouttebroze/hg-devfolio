import Gallery from '../components/Gallery';
import { Outlet } from 'react-router';
import { ImgMediaCard } from '../components/ImgMediaCard';
import { soutiens } from '../soutiens';

export function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      {soutiens.map(soutien => {
        return (
          <ImgMediaCard key={soutien.id} title={soutien.title} about={soutien.about} />
        )
      })}
        
    </div>
  );
}