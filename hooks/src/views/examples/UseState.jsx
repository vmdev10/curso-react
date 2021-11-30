import React, { useState } from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [counter, setCounter] = useState(0)
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{counter}</span>
            <div>
                <button onClick={() => setCounter(counter - 1)} className="btn">-1</button>
                <button onClick={() => setCounter(counter + 1)} className="btn">+1</button>
                {/* A função dentro de setCount retorna o valor atual */}
                <button onClick={() => setCounter((current) => current + 1000)} className="btn">1000</button>
            </div>
            </div>
        </div>
    )
}

export default UseState