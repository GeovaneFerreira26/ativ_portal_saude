import './style.css';

export default function QuemSomos() {
    return (
        <main className="quemsomos-container">
            {/* Cabeçalho da Página */}
            <section id="quem-somos" className="quemsomos-hero">
                <h1>Nossa História</h1>
                <p>Conheça a trajetória de inovação e cuidado por trás do Portal Saúde Senai</p>
            </section>

            {/* Conteúdo Principal */}
            <section className="quemsomos-content">
                <div className="quemsomos-story">
                    <h2>Como Surgimos</h2>
                    <p>
                        A história do <strong>Portal Saúde Senai</strong> começou em 2018, idealizada pelo 
                        <em> Dr. Henrique Valente</em>, um médico cardiologista renomado, e pela 
                        <em> Dra. Clarice Mendes</em>, especialista em gestão hospitalar avançada. Ambos compartilhavam 
                        da mesma inquietação: a burocracia e a falta de integração tecnológica na saúde dificultavam o 
                        acesso rápido a um atendimento médico verdadeiramente humanizado.
                    </p>
                    <p>
                        Foi durante um simpósio de inovação tecnológica que os fundadores cruzaram caminhos com o 
                        projeto de modernização do Senai. Dessa sinergia nasceu uma parceria inédita. A ideia era ousada: 
                        unir a excelência técnica e o pioneirismo tecnológico do Senai à medicina de alta performance.
                    </p>
                    <p>
                        Em 2021, a clínica abriu oficialmente suas portas em Salvador. O "Portal" no nome não é por acaso; 
                        ele representa a nossa missão de ser a principal porta de entrada para uma saúde inteligente, 
                        onde prontuários digitais integrados, telemedicina de ponta e diagnósticos precisos via inteligência 
                        artificial trabalham lado a lado com o calor do acolhimento humano.
                    </p>
                    <p>
                        Hoje, o Portal Saúde Senai é referência em atendimento ambulatorial e de urgência, combinando a 
                        tradição de formar e aplicar as melhores tecnologias com o compromisso inegociável de salvar e 
                        melhorar vidas.
                    </p>
                </div>

                {/* Bloco Lateral com Missão, Visão e Valores */}
                <div className="quemsomos-mvv">
                    <div className="mvv-box">
                        <h3>Missão</h3>
                        <p>Prover assistência à saúde de excelência através da inovação tecnológica, garantindo um atendimento humano, rápido e acessível.</p>
                    </div>
                    <div className="mvv-box">
                        <h3>Visão</h3>
                        <p>Ser reconhecida regionalmente como a clínica médica modelo em integração digital, eficiência operacional e acolhimento ao paciente.</p>
                    </div>
                    <div className="mvv-box">
                        <h3>Valores</h3>
                        <ul>
                            <li>Humanização e Empatia</li>
                            <li>Inovação Tecnológica</li>
                            <li>Ética e Transparência</li>
                            <li>Segurança do Paciente</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}