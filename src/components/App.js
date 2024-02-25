import React from 'react'

const App = () => {
  const relatives = [
    { key: 'relativeListItem1', name: 'Aunt Rita' },
    { key: 'relativeListItem2', name: 'Uncle Ravi' },
    { key: 'relativeListItem3', name: 'Cousin Priya' },
    { key: 'relativeListItem4', name: 'Grandma Lakshmi' }
  ];
  return (
    <div id="main">
      {/* Do not remove the main div */}
        <h2>Relatives to Visit</h2>
        <ol id="relativeList">
        {relatives.map(relative => (
          <li key={relative.key} id={relative.key}>{relative.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default App;