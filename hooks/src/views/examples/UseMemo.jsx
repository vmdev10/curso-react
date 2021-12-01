import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {
    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")
    const [n3, setN3] = useState("")

    function sum(num1, num2) {
        const future = Date.now() + 2000

        while(Date.now() < future) {}

        return num1 + num2
    }

    // 1° OPÇÃO

    // const [result, setResult] = useState(0)
    
    // useEffect(() => {
    //     setResult(sum(n1, n2))
    // }, [n1, n2])

    // 2° OPÇÃO

    const result = useMemo(() => sum(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input value={n1} onChange={(event) => setN1(parseInt(event.target.value))} className="input" type="number" className="input" />
                <input value={n2} onChange={(event) => setN2(parseInt(event.target.value))} className="input" type="number" className="input" />
                <input value={n3} onChange={(event) => setN3(parseInt(event.target.value))} className="input" type="number" className="input" />
                <span className="text">Soma: {result}</span>
            </div>
        </div>
    )
}

export default UseMemo