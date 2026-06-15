import { Link } from 'react-router-dom'; // Importa o componente de navegação do React Router
import './style.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            {/* Parte Principal do Rodapé: Organizada em Colunas */}
            <div className="footer-content">
                
                {/* Coluna 1: Sobre a Clínica */}
                <div className="footer-column">
                    <h3 className="footer-brand">Portal Saúde<span>Senai</span></h3>
                    <p className="footer-description">
                        Sua saúde em boas mãos. Oferecemos atendimento médico de excelência com profissionais qualificados e infraestrutura moderna.
                    </p>
                    <div className="footer-socials">
                        {/* Links externos continuam usando a tag <a> padrão */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>

                {/* Coluna 2: Links Úteis / Navegação Conectada */}
                <div className="footer-column">
                    <h4 className="footer-section-title">Links Úteis</h4>
                    <ul className="footer-links">
                        {/* Mudamos de <a> href para <Link> to conectando com as suas páginas */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quem-somos">Quem Somos</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/corpo-clinico">Corpo Clínico</Link></li>
                        <li><Link to="/blog">Blog da Saúde</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Contato e Emergência */}
                <div className="footer-column">
                    <h4 className="footer-section-title">Contato</h4>
                    <ul className="footer-info-list">
                        <li className="info-emergency"><strong>Emergência:</strong> (71) 0000-0000</li>
                        <li><strong>Telefone:</strong> (71) 1111-1111</li>
                        <li><strong>WhatsApp:</strong> (71) 99999-9999</li>
                        <li><strong>E-mail:</strong> contato@saudesenai.com.br</li>
                    </ul>
                </div>

                {/* Coluna 4: Atendimento e Localização */}
                <div className="footer-column">
                    <h4 className="footer-section-title">Funcionamento</h4>
                    <p className="footer-text">
                        <strong>Atendimento 24h</strong> para urgências e emergências.
                    </p>
                    <p className="footer-text">
                        <strong>Ambulatório:</strong> Seg a Sex, das 07h às 19h.
                    </p>
                    <p className="footer-text address">
                        Av. Dendezeiros do Bonfim, 99, Salvador - BA
                    </p>
                </div>

            </div>

            {/* Linha Divisória */}
            <hr className="footer-divider" />

            {/* Parte Inferior: Créditos, Direitos e Políticas */}
            <div className="footer-bottom">
                <div className="footer-legal">
                    <Link to="/privacidade">Política de Privacidade</Link>
                    <Link to="/termos">Termos de Uso</Link>
                </div>
                <div className="footer-credits">
                    <p className='footer-title'>Desenvolvido por Bruno Rosa e Geovane Ferreira</p>
                    <p className='footer-copy'>&copy; {new Date().getFullYear()} Portal Saúde Senai. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}