import React from 'react'

export function Button({onClick, mostrar, comprobacion}) {
  return (
    <button onClick={onClick} disabled={comprobacion===null}>{mostrar}</button>
  )
}