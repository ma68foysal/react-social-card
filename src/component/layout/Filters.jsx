import React from 'react'

function Filters({applyTheme,applyLayout}) {
  return (
    <div className=''>
        <div className="card-details-theme">
        <button className="oreng" onClick={() => applyTheme('oreng')} />
        <button className="pest" onClick={() => applyTheme('pest')} />
        <button className="light" onClick={() => applyTheme('light')} />
        <button className="dark" onClick={() => applyTheme('dark')} />
        <button className="red" onClick={() => applyTheme('red')} />
        <button className="blue" onClick={() => applyTheme('blue')} />
        <button className="yellow" onClick={() => applyTheme('yellow')} />
        <button className="green" onClick={() => applyTheme('green')} />
        <button className="gradient" onClick={() => applyTheme('gradient')} />
        </div>
        <div className="filter-layout">
            <button className="layout-one" onClick={()=>applyLayout("one")}>layout one</button>
            <button className="layout-two"onClick={()=>applyLayout("two")}>layout two</button>
            <button className="layout-three" onClick={()=>applyLayout("three")}>layout three</button>
            <button className="layout-four" onClick={()=>applyLayout("four")}>layout four</button>
            <button className="layout-five" onClick={()=>applyLayout("five")}>layout five</button>
            <button className="layout-sixs" onClick={()=>applyLayout("six")}>layout six</button>
            <button className="layout-seven" onClick={()=>applyLayout("seven")}>layout seven</button>
            <button className="layout-eight" onClick={()=>applyLayout("eight")}>layout eight</button>
            <button className="layout-eight" onClick={()=>applyLayout("default")}>Default</button>
        </div>
    </div>
  )
}

export default Filters