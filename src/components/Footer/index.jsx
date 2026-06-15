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
                        <a href="#instagram" aria-label="Instagram">Instagram</a>
                        <a href="#facebook" aria-label="Facebook">Facebook</a>
                        <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>

                {/* Coluna 2: Links Úteis / Navegação */}
                <div className="footer-column">
                    <h4 className="footer-section-title">Links Úteis</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#quem-somos">Quem Somos</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#corpo-clinico">Corpo Clínico</a></li>
                        <li><a href="#blog">Blog da Saúde</a></li>
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
                    <a href="#privacidade">Política de Privacidade</a>
                    <a href="#termos">Termos de Uso</a>
                </div>
                <div className="footer-credits">
                    <p className='footer-title'>Desenvolvido por Bruno Rosa e Geovane Ferreira</p>
                    <p className='footer-copy'>&copy; {new Date().getFullYear()} Portal Saúde Senai. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}