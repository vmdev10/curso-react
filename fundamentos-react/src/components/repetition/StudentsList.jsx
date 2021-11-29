import students from '../../data/Students'

import React from "react";

export default () => {
  const student = students.map(student => (
    <li key={student.id}>{ student.id }- { student.name } -{'>'} { student.grade }</li>
  ))
  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        { student }
      </ul>
    </div>
  )
}