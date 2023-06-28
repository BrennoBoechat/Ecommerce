import React from 'react'
import { BenefitsContainer } from './styles'

function Benefits() {
  return (
    <BenefitsContainer>
        <div className='wrap'>
            <div className='benefits-cards'>
                <p>20% OFF na primeira compra no app usando  cupom: PRIMEIRA</p>
            </div>
            <div className='benefits-cards'>
                <p>Encontre tudo sobre as tendências no nosso Blog</p>
            </div>
            <div className='benefits-cards'>
                <p>Até 10x sem juros pagando com C&A Pay </p>
            </div>
            <div className='benefits-cards'>
                <p>Confira todos os cupons ativos</p>
            </div>
        </div>
    </BenefitsContainer>
  )
}

export default Benefits