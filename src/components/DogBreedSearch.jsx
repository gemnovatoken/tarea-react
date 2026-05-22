// src/components/DogBreedSearch.jsx
import React, { useState, useEffect } from 'react';

const DogBreedSearch = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        // Crear un array de 10 promesas de fetch
        const promises = Array(10).fill().map(() =>
          fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
        );
        const results = await Promise.all(promises);
        const urls = results.map(result => result.message);
        setImages(urls);
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <img 
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
            alt="Cargando..."
            width="200"
          />
          <p>Cargando perritos, por favor espera...</p>
        </div>
      ) : (
        <div className="grid-container">
          {images.map((url, index) => (
            <div key={index} className="grid-item">
              <img src={url} alt={`Perro ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DogBreedSearch;