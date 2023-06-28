import "./Card.css";
import cachorro from "../../../assets/cachorro.png";
import gato from "../../../assets/gato.png";

export default function Card({ title,subtitle, value, clickable, isFirstCard,hasImg, ...props }) {

  return (
 
      <div className="card-container">
             <div className="card-title">
      </div>


      <div className={`card ${clickable && 'clickable'}`} {...props}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        {value && <p>{value}</p>}
        
        
      </div>
      <div className={`card-container ${isFirstCard ? 'first-card' : ''}`} >
      {isFirstCard && (
        <div className="card-container">
               <div className="card-title">
          <h3>Adulto</h3>
        </div>
        <section className="img-section">
          <div className="img">
            <img
              src={cachorro}
              alt="Cachorro"
              width="50"
              height="50"
            />
            
          </div>
        </section>
        </div>
      )}
      
    </div>
    </div>
  );
}