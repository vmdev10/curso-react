import React from 'react'

import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'

const UseCustom = (props) => {
    const [count, inc, dec] = useCounter(10)

    console.log(useCounter)

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <div className="center">
                <span className="text">{count}</span>

                <div>
                    <button onClick={() => dec(count - 1)} className="btn">-1</button>
                    <button onClick={() => inc(count + 1)} className="btn">+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseCustom