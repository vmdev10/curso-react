import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

const NotFound = props => (
    <div className="NotFound">
        <PageTitle error
            title="404"
            subtitle="Opss... Página Não Encontrada!" />
    </div>
)

export default NotFound