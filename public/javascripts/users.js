const socket = io()

socket.on( 'user-created', ({ id, email }) => {
  console.log( id, email )

  const tbody = document.querySelector( 'tbody' )
  const row = `
    <tr>
      <td>${id}</td>
      <td>${email}</td>
    </tr>
  `

  tbody.innerHTML += row
})