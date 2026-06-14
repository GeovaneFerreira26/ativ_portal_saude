import './style.css';

export default function CorpoClinico() {
    const medicos = [
        {
            nome: "Dr. Henrique Valente",
            crm: "CRM-BA 14230",
            especialidade: "Cardiologia",
            descricao: "Cofundador da clínica, especialista em alta complexidade cardiovascular e pioneiro em telemedicina.",
            inicial: "HV"
        },
        {
            nome: "Dra. Clarice Mendes",
            crm: "CRM-BA 16540",
            especialidade: "Clínica Médica & Gestão",
            descricao: "Cofundadora, com foco em atendimento preventivo integrativo e otimização da jornada de saúde do paciente.",
            inicial: "CM"
        },
        {
            nome: "Dr. Marcelo Cavalcanti",
            crm: "CRM-BA 18922",
            especialidade: "Ortopedia e Traumatologia",
            descricao: "Especialista em medicina esportiva e procedimentos minimamente invasivos nas articulações.",
            inicial: "MC"
        },
        {
            nome: "Dra. Mariana Frota",
            crm: "CRM-BA 21455",
            especialidade: "Pediatria",
            descricao: "Dedicada ao desenvolvimento infantil integral, com atendimento humanizado desde recém-nascidos a adolescentes.",
            inicial: "MF"
        },
        {
            nome: "Dr. Roberto Albuquerque",
            crm: "CRM-BA 11340",
            especialidade: "Neurologia",
            descricao: "Pesquisador em neurociência, focado no tratamento de distúrbios cognitivos, do sono e enxaquecas crônicas.",
            inicial: "RA"
        },
        {
            nome: "Dra. Camila Santiago",
            crm: "CRM-BA 23891",
            especialidade: "Dermatologia",
            descricao: "Especialista em saúde da pele, procedimentos estéticos seguros e diagnóstico precoce de câncer de pele.",
            inicial: "CS"
        },
        {
            nome: "Dr. Fábio Linhares",
            crm: "CRM-BA 19760",
            especialidade: "Ginecologia e Obstetrícia",
            descricao: "Referência em pré-natal de alto risco e cirurgia ginecológica avançada por videolaparoscopia.",
            inicial: "FL"
        },
        {
            nome: "Dra. Beatriz Nogueira",
            crm: "CRM-BA 25410",
            especialidade: "Endocrinologia",
            descricao: "Atuação focada no controle de diabetes, distúrbios da tireoide e reeducação metabólica personalizada.",
            inicial: "BN"
        }
    ];

    return (
        <main className="corpoclinico-container">
            {/* Cabeçalho da Página */}
            <section id="corpo-clinico" className="corpoclinico-hero">
                <h1>Nosso Corpo Clínico</h1>
                <p>Especialistas qualificados prontos para oferecer um atendimento seguro, inovador e humanizado.</p>
            </section>

            {/* Grid de Cards */}
            <section className="corpoclinico-grid-wrapper">
                <div className="corpoclinico-grid">
                    {medicos.map((medico, index) => (
                        <div key={index} className="medico-card">
                            {/* Avatar/Esboço da Foto */}
                            <div className="medico-avatar">
                                <span>{medico.inicial}</span>
                            </div>
                            
                            {/* Informações */}
                            <div className="medico-info">
                                <span className="medico-especialidade">{medico.especialidade}</span>
                                <h2 className="medico-nome">{medico.nome}</h2>
                                <span className="medico-crm">{medico.crm}</span>
                                <p className="medico-descricao">{medico.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}