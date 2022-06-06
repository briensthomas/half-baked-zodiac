import './ZodiacCard.css';

export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiac-card'>
      <h1>{name}</h1>
      <img src={`/images/${name}.png`} />
      <p>{dates}</p>
    </div>
  );
}
