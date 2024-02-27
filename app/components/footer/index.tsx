import Link from 'next/link';
import './styles.css';
import { LogoLippelWhite } from '../ui/logoLippelWhite';
import { IoLogoInstagram } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container social">
                <div className="footer-row social">
                    <div className="footer-col logo">
                        <LogoLippelWhite/>
                    </div>
                    <div className="footer-col social">
                        <span className="label mobile">Siga a Lippel</span>
                        <div className="social-container">
                            <span className="label desktop">Siga a Lippel</span>
                            <span><IoLogoInstagram /></span>
                            <span><GrFacebookOption /></span>
                            <span><FaYoutube /></span>
                            <span><FaLinkedinIn /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container menu">
                <div className="footer-row menu">
                    <div className="footer-col">
                        <h3>NOSSA SEDE</h3>
                        <p>Segunda à Sexta das 7h30 às 17h30</p>
                        <div className="footer-address">
                            <p>Rua Pitangueira, 733, Agrolândia</p>
                            <p>Santa Catarina - Fábrica</p>
                            <p>88.420-000</p>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>ENTRE EM CONTATO</h3>
                        <div className="footer-phones">
                            <div className="phone">
                                <small>Atendimento Geral</small>
                                <p>+55 47 3534.4266</p>
                            </div>
                            <div className="phone">
                                <small>Comercial e Vendas</small>
                                <p>+55 47 3534.4266</p>
                            </div>
                        </div>
                        <p className="email">atendimento@lippel.com.br</p>
                    </div>
                    <div className="footer-col">
                        <div className="footer-menu">
                            <li><Link href="#">Produtos</Link></li>
                            <li><Link href="#">Aplicações</Link></li>
                            <li><Link href="#">Serviços</Link></li>
                            <li><Link href="#">A Lippel</Link></li>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-menu">
                            <li><Link href="#">A Lippel</Link></li>
                            <li><Link href="#">Vagas de Emprego</Link></li>
                            <li><Link href="#">Notícias</Link></li>
                            <li><Link href="#">Entenda Mais</Link></li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-container copyright">    
                <div className="footer-row copyright">
                    <div className="footer-col copyright">
                        <p>© Todos direitos reservados.</p>
                        <Link href="#">Privacidade</Link>
                        <Link href="#">Sobre os cookies</Link>
                    </div>
                    <div className="footer-col">
                        <p>Desenvolvido por Impacte</p>
                    </div>
                </div>
            </div>
        </div>
    )
}