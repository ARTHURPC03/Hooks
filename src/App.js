import React, { useState, useEffect, useMemo, useCallback } from 'react'

function App() {
  const [tech, setTech] = useState([])
  const [newtech, setNewTech] = useState('')

  const handleAdd = useCallback(() => {
    setTech([...tech, newtech])
    setNewTech('')
  }, [newtech, tech])

  useEffect(() => {
    const storageTech = localStorage.getItem('tech')

    if (storageTech) {
      setTech(JSON.parse(storageTech))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech))
  }, [tech])

  const techSize = useMemo(() => tech.length, [tech])

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologia(s) </strong>
      <br />
      <input
        value={newtech}
        onChange={(e) => setNewTech(e.target.value)}
        type="text"
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  )
}

export default App
