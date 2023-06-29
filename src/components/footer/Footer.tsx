import React from 'react'
import {FooterContainer} from './styles'
import Envelope from '../../assets/envelope.svg'
import Image from 'next/image'

function Footer() {
  return (
    <FooterContainer>
        <div className='wrap'>

            <div className='newsletter'>
                <Image alt='envelope' src={Envelope}/>
                <div>
                    <h1>Assine nossa Newsletter</h1>
                    <p>Fique por dentro das nossas novidades e promoções</p>
                </div>
                <input placeholder='Nome'></input>
                <input placeholder='E-mail'></input>
                <button>Assinar</button>
            </div>

            {/* <div className='social-midia'>
                <Image alt='instagram'/>
                <Image alt='facebook'/>
                <Image alt='tiktok'/>
                <Image alt='twitter'/>
            </div> */}
            
        </div>
    </FooterContainer>
  )
}

export default Footer