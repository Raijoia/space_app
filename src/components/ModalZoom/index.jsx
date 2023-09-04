import React from 'react'

export default function ModalZoom({ foto }) {
  return (
    <>
      <dialog open={!!foto}>
        <p>Greetings, onde and all!</p>
        <form method='dialog'>
          <button>ok</button>
        </form>
      </dialog>
    </>
  )
}
