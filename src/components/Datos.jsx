import React from 'react'

const Datos = () => {
  return (
    <div>
        
        <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => alert('Emulamos que se cierra la card')}

        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => alert(characterID)}
        />
      </div>
    </div>


    </div>
  )
}

export default Datos