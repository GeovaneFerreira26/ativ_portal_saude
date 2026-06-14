import './style.css';

export default function Blog() {
    const posts = [
        {
            id: 1,
            categoria: "Avanços Clínicos",
            titulo: "Inteligência Artificial auxilia na detecção precoce de alterações cardiovasculares",
            resumo: "Estudo clínico recente mostra como algoritmos integrados a exames de imagem aumentam em até 40% a precisão no diagnóstico de cardiopatias antes dos primeiros sintomas.",
            data: "12 Jun 2026",
            autor: "Dr. Henrique Valente",
            leitura: "5 min de leitura"
        },
        {
            id: 2,
            categoria: "Inovação",
            titulo: "Telemedicina e o Futuro do Atendimento Ambulatorial Integrado",
            resumo: "Como a transformação digital e os prontuários em nuvem estão otimizando o tempo de resposta médica e aproximando pacientes de especialistas renomados.",
            data: "08 Jun 2026",
            autor: "Dra. Clarice Mendes",
            leitura: "4 min de leitura"
        },
        {
            id: 3,
            categoria: "Saúde Preventiva",
            titulo: "Novos Protocolos de Check-up: O impacto da medicina personalizada",
            resumo: "Entenda como mapeamentos genéticos e exames preventivos customizados baseados no estilo de vida estão substituindo os pacotes de exames genéricos tradicionais.",
            data: "28 Mai 2026",
            autor: "Dra. Beatriz Nogueira",
            leitura: "6 min de leitura"
        },
        {
            id: 4,
            categoria: "Dermatologia",
            titulo: "Dispositivos Vestíveis (Wearables) e o monitoramento de reações alérgicas na pele",
            resumo: "Pesquisas clínicas avaliam a eficácia de smartwatches e sensores adesivos na detecção precoce de crises inflamatórias cutâneas induzidas por estresse.",
            data: "15 Mai 2026",
            autor: "Dra. Camila Santiago",
            leitura: "3 min de leitura"
        }
    ];

    // O primeiro post será o nosso "Destaque" no topo
    const postDestaque = posts[0];
    // Os outros três entram na lista comum
    const postsSecundarios = posts.slice(1);

    return (
        <main className="blog-container">
            {/* Cabeçalho */}
            <section id="blog" className="blog-hero">
                <h1>Blog Portal Saúde</h1>
                <p>Acompanhe artigos científicos, novidades do mundo clínico e os principais avanços da medicina moderna.</p>
            </section>

            <div className="blog-content-wrapper">
                
                {/* 1. ARTIGO EM DESTAQUE */}
                <section className="blog-featured">
                    <div className="featured-card">
                        <div className="featured-badge">Artigo em Destaque</div>
                        <span className="post-category">{postDestaque.categoria}</span>
                        <h2>{postDestaque.titulo}</h2>
                        <p>{postDestaque.resumo}</p>
                        <div className="post-meta">
                            <span>Por <strong>{postDestaque.autor}</strong></span>
                            <div className="post-submeta">
                                <time>{postDestaque.data}</time>
                                <span className="separator">•</span>
                                <span>{postDestaque.leitura}</span>
                            </div>
                        </div>
                        <a href={`#post-${postDestaque.id}`} className="read-more-btn">Ler Artigo Completo</a>
                    </div>
                </section>

                {/* 2. GRADE DE OUTROS ARTIGOS */}
                <section className="blog-grid-section">
                    <h2 className="section-title">Últimas Publicações</h2>
                    <div className="blog-grid">
                        {postsSecundarios.map((post) => (
                            <article key={post.id} className="blog-card">
                                <span className="post-category">{post.categoria}</span>
                                <h3 className="blog-card-title">{post.titulo}</h3>
                                <p className="blog-card-excerpt">{post.resumo}</p>
                                <div className="post-meta">
                                    <span>Por <strong>{post.autor}</strong></span>
                                    <div className="post-submeta">
                                        <time>{post.data}</time>
                                        <span className="separator">•</span>
                                        <span>{post.leitura}</span>
                                    </div>
                                </div>
                                <a href={`#post-${post.id}`} className="card-link">Continuar lendo →</a>
                            </article>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}