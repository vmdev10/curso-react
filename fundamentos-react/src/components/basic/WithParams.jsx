import React from "react"

export default function WithParams(props) {
  const status = props.grade > 7.0 ? 'aprovado(a)' : 'reprovadoa(a)'
  const gradeInt = Math.ceil(props.grade)

  return (
    <div>
      <h2>{ props.title }</h2>
      <p>
        <strong>{ props.student } </strong>
        tem nota
        <strong> { gradeInt } </strong>
        e foi
        <strong> { status }</strong>
      </p>
    </div>
  )
}