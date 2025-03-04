import React, { useEffect, useState } from 'react';

export default function UserIdComponent() {
  const [userId, setUserId] = useState(null); // Estado para guardar el ID

  // Efecto para generar o recuperar el ID
  useEffect(() => {
    // Verificar si ya existe un ID en el LocalStorage
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      // Si existe, usarlo
      setUserId(storedUserId);
    } else {
      // Si no existe, generar un nuevo ID
      const newUserId = Math.random().toString(36).substr(2, 9); // ID aleatorio
      localStorage.setItem('userId', newUserId); // Guardar en LocalStorage
      setUserId(newUserId); // Actualizar el estado
    }
  }, []); // El efecto solo se ejecuta una vez (al montar el componente)

  return userId; // Devuelve el userId como un valor
}