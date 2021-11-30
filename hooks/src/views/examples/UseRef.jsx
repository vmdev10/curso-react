import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const counter = useRef(0)

    useEffect(function() {
        counter.current = counter.current + 1
    }, [value1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{ counter.current }</span>
                    <span className="text">]</span>
                </div>
                <input onChange={(event) => setValue1(event.target.value)} type="text" className="input" value={value1} />
            </div>
        </div>
    )
}

export default UseRef