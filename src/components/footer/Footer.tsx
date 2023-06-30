import React from 'react'
import {FooterContainer} from './styles'
import Envelope from '../../assets/envelope.svg'
import Twitter from '../../assets/twitter-logo.svg'
import TikTok from '../../assets/tiktok-logo.svg'
import Insta from '../../assets/instagram-logo.svg'
import Face from '../../assets/facebook-logo.svg'
import Visa from '../../assets/visa@2x.png'
import Master from '../../assets/mastercard@2x.png'
import Whats from '../../assets/whatsapp-logo.svg'
import Elo from '../../assets/elo@2x.png'
import MercadoPago from '../../assets/mercadopago@2x.png'
import Boleto from '../../assets/boleto@2x.png'
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

            <div className='itens'>
                <div className='social-midia'>
                    <button><Image alt='instagram' src={Insta}/></button>
                    <button><Image alt='facebook' src={Face}/></button>
                    <button><Image alt='tiktok' src={TikTok}/></button>
                    <button><Image alt='twitter' src={Twitter}/></button>
                    <button><Image alt='whatsapp' src={Whats}/></button>
                </div>
                
                    <p>Cactus Co. - 2023. Todos os direitos reservados.</p>
                
                <div className='pay'>
                    <Image className='payment' alt='elo' src={Elo}/>
                    <Image className='payment' alt='boleto' src={Boleto}/>
                    <Image className='payment' alt='master' src={Master}/>
                    <Image className='payment' alt='mercadopago' src={MercadoPago}/>
                    <Image className='payment' alt='visa' src={Visa}/>
                </div>
            </div>
            
        </div>
    </FooterContainer>
  )
}

export default Footer