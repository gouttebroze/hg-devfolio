import React from 'react';
import Card from './Card';
import { soutiens } from '../datas';

export default function Gallery() {
  return (
    <div className="gallery">
        {soutiens && soutiens.map((soutien) => {
            return (
                <Card 
                    id={soutien.id}
                    title={soutien.title}
                    about={soutien.about}
                    url={soutien.url}
                    images={soutien.images}
                />
            )
        })}
    </div>
  );
}
