/*
  Componente ConciertoCard
  Representa la tarjeta individual de un concierto recibiendo sus datos vía props
  y gestionando la interacción básica del usuario.
*/
function ConciertoCard({ concierto }) {
    // Manejador de prueba para el botón de acción
    const manejarReserva = () => {
        console.log(`Acción de prueba: interesado en el concierto de ${concierto.artista}`);
        alert(`Has seleccionado el concierto de ${concierto.artista} (${concierto.horario})`);
    };

    return (
        <article className="concierto-card">
            <h2>{concierto.artista}</h2>
            <p><strong>Género:</strong> {concierto.genero}</p>
            <p><strong>Horario:</strong> {concierto.horario}</p>
            <button type="button" onClick={manejarReserva}>
                Me interesa
            </button>
        </article>
    );
}

export default ConciertoCard;
