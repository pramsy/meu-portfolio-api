const conhecimento = {

    perfil: {
        nome: "Ramses Pierre",
        cargo: "Analista de Desenvolvimento de Sistemas",
        objetivo: "Desenvolvedor Full Stack / Backend Júnior",

        apresentacao: `Ramses Pierre é Analista de Desenvolvimento de Sistemas,
                    com foco em desenvolvimento de software e interesse em
                    oportunidades como Desenvolvedor Full Stack ou Backend Júnior.
                    `
    },


    tecnologias: {

        frontend: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "React",
            "Bootstrap",
            "Tailwind CSS"
        ],

        backend: [
            "PHP",
            "C#",
            "Python",
            "Laravel",
            "Node.js"
        ],

        bancoDeDados: [
            "MySQL",
            "MariaDB",
            "Firebase",
            "PostgreSQL",
            "SQL Server"
            
        ],

        ferramentas: [
            "Git",
            "GitHub",
            "Docker",
            "Composer"
        ],

        integracoes: [
            "APIs REST",
            "ViaCEP"
        ]
    },


    projetos: [

        {
            nome: "Agenda Online",

            objetivo: `Desenvolvimento de um ferramenta facilitando a organização de compromissos 
                    e tarefas, permitindo o gerenciamento eficiente do tempo. e Planejamento eficace 
                    de atividades pessoais e profissionais.
                    `,

            descricao: `
            Aplicação web para organizar e consultar os eventos da minhaIgreja. 
            Líderes de departamentos podem cadastrar eventos, 
            acompanhar seus status e consultar a programação da comunidade.
            `,
            funcionalidades: [
                "Cadastro de usuários",
                "Cadastro de eventos",
                "Gerenciamento de eventos",
                "Consulta de eventos",
                "Geração de PDF com eventos agendados"
            ],

            tecnologias: [
                "Vue 3", "Vue Router 4 e Vue CLI 5",
                "Bootstrap 5",
                "Firebase Authentication e Cloud Firestore",
                "FullCalendar",
                "jsPDF e jsPDF AutoTable"
            ],
            aprendizado: `Durante o desenvolvimento deste projeto, adquiri conhecimentos práticos em 
            Vue 3, Vue Router 4 e Vue CLI 5, além de aprimorar minhas habilidades 
            em Bootstrap 5 para criar interfaces responsivas e atraentes.
            Além disso, explorei a integração com Firebase Authentication e Cloud Firestore, 
            permitindo a autenticação de usuários e o armazenamento eficiente de dados em tempo real.
            A utilização do FullCalendar proporcionou uma experiência interativa para a 
            visualização de eventos, enquanto o jsPDF e jsPDF AutoTable possibilitaram a 
            geração de relatórios em PDF de forma dinâmica.
            Este projeto me proporcionou uma compreensão mais profunda do desenvolvimento 
            web moderno, aprimorando minhas habilidades técnicas e fortalecendo minha capacidade 
            de criar soluções funcionais e escaláveis.
            `, 

            github: "",
            demo: ""
        },


        {
            nome: "Cadastro de usuarios e consulta de endereços com Laravel e ViaCEP",
            objetivo: "Desenvolvimento de uma API para gerenciamento de usuários e consulta de endereços utilizando a API ViaCEP.",

            descricao: `
            API desenvolvida com Laravel para gerenciamento de usuários
            e consulta de endereços utilizando a API ViaCEP.
            `,
            funcionalidades: [
                "Cadastro de usuário com nome, e-mail e CEP.",
                "Validação dos campos obrigatórios, formato do e-mail e quantidade de dígitos do CEP.",
                "Preenchimento do endereço por meio da API ViaCEP.",
                "Listagem paginada de usuários, com cinco registros por página.",
                "Busca por nome, e-mail ou CEP.",
                "Visualização, edição e exclusão de usuários.",
                "Exclusão em cascata do endereço relacionado ao usuário."
            ],

            tecnologias: [
                "PHP",
                "Laravel",
                "Blade e Vite",
                "Bootstrap5",
                "MySQL",
                "Docker",
                "ViaCEP",
                "API REST",
                "Nginx e PHP-FPM"
                
            ],
            aprendizado: `Durante o desenvolvimento deste projeto, adquiri conhecimentos práticos em
            Laravel, Blade e Vite, além de aprimorar minhas habilidades em Bootstrap 5 para criar interfaces responsivas e atraentes.
            Além disso, explorei a integração com a API ViaCEP, permitindo a consulta eficiente de endereços com base no CEP fornecido pelos usuários.
            A utilização do MySQL como banco de dados proporcionou uma experiência sólida na modelagem e gerenciamento de dados, enquanto o Docker facilitou a configuração do ambiente de desenvolvimento.
            Este projeto me proporcionou uma compreensão mais profunda do desenvolvimento web moderno, aprimorando minhas habilidades técnicas e fortalecendo minha capacidade de criar soluções funcionais e escaláveis.
            `,

            github: "https://github.com/pramsy/cadastro_de-_usuario",
            demo: ""
        },


        {
            nome: "Cadastro de veículos",

            Objetivo: "Praticando Crud com Laravel e MySQL, o mesmo projeto com C# e SQL Server.",

            descricao: `
            Sistema para gerenciamento de cadastro de veículos, com funcionalidades
            relacionadas a proprietários, modelos, marcas e manutenção.
            `,
            funcionalidades: [
                "Cadastro de veículos, qtd de portas, cambio, combustivel",
                "Gerenciamento de modelos e marcas",
            ],

            tecnologias: [
                "PHP",
                "Laravel",
                "MySQL",
                "Docker"
            ],

            github: "https://github.com/pramsy/crudVehiculo, https://github.com/pramsy/CadastroVehiculo",
            demo: ""
        }

    ],


    formacao: [

        {
            nome: "Pós-Graduação em Desenvolvimento de Sistemas Computacionais  ",
            instituicao: "Instituto Federal de Tocantins - IFTO",
            periodo: "2025-2026",
            descricao: ""
        },
         {
            nome: "Analista de Desenvolvimento de Sistemas", 
            instituicao: "Centro universitario Adventista de São Paulo - UNASP",
            periodo: "2022-2024",
            descricao: ""
        },
         {
            nome: "Tecnico em Eletrônica", 
            instituicao: "ETEC - Escola Técnica Estadual Bento Quirino",
            periodo: "2018-2020",
            descricao: ""
        }

    ],

    capacitacoes: [

        {
            nome: "Programa Desenvolver",
            organizacao: "O Boticário + Koru",

            temas: [
                "Inteligência Artificial",
                "Criação de conteúdo com IA",
                "Fundamentos de Dados",
                "Uso de dados para apoio à tomada de decisões"
            ],

            descricao: `
                Participação em uma formação voltada à utilização de Inteligência
                Artificial e fundamentos de dados, incluindo criação de conteúdos
                com ferramentas de IA e utilização de dados para geração de
                informações de apoio à tomada de decisões.
                `
        },
        {
            nome: "Desenvolvimento Front-end.",
            organizacao: "HBR + IFSP Campinas",

            temas: [
                "HTML, CSS e JavaScript, React.",
                "Node.js,Figma, Git e GitHub."
            ],

            descricao: `
                Formação prática em desenvolvimento Front-end, 
                abordando tecnologias como HTML, CSS, JavaScript e React, 
                além de ferramentas como Node.js, Figma, Git e GitHub.
                O curso proporcionou conhecimentos essenciais para a criação de 
                interfaces web interativas e responsivas, capacitando os participantes 
                a desenvolverem aplicações modernas e eficientes.
            `
        },
        {
            nome: "Arquitetura de Sistemas",
            organizacao: "Fondação FAT E Qualifica SP",

            temas: [
                "Java.",
                "Node.js,Figma, Git e GitHub."
            ],

            descricao: `
                Qualifica o estudante abordando desde a modelagem de dados até o uso de APIs RESTful, 
                segurança básica, controle de transações e documentação técnica. 
                Também são apresentados conceitos introdutórios de testes automatizados, integração
                contínua (CI/CD), escalabilidade, monitoramento e boas práticas de desenvolvimento em 
                ambientes corporativos.
            `
        }

    ],



    experiencia: [

        {
            cargo: "Assistente de Sistemas",
            empresa: "Saude e Vida Comercio de Purificadores LTDA",
            periodo: "02-2023   até 10-2024",
            descricao:`Desenvolvimento e manutenção de funcionalidades em sistemas internos  
                     Integração com sistemas externos e correção de bugs. 
                     Suporte técnico e manutenção de banco de dados. 
                     Extração e análise de dados para apoiar a tomada de decisão. 
                     Configuração de equipamentos de redes e suportes aos usuários. 
                     Documentação de processos e apoio a melhoria contínua dos serviços. 
                     Utilização de WordPress para manutenção e customização de páginas
            `
        },
        {
            cargo: "Assistente de Logística",
            empresa: "Bros Logística e Transportes EIRELI EPP",
            periodo: "07-2025   até 08-2025",
            descricao:` Colaborei no processo de recebimento e expedição garantindo maior eficiência operacional 
                Colaborei com diferentes áreas para otimizar fluxo internos, reduzindo atrasos, diminuindo 
                indenização por extravio e avaria. 
                Desenvolvi habilidades de organização, análise e resolução de problemas aplicáveis também 
                em projetos de tecnologia
            `
        }

    ],

    objetivoDoPortfolio: `
                Este portfólio tem como objetivo apresentar a trajetória,
                conhecimentos, projetos e habilidades técnicas de Ramses Pierre,
                demonstrando sua capacidade de desenvolver soluções utilizando
                diferentes tecnologias e ferramentas de desenvolvimento.
                O portfólio também visa fornecer informações sobre percuso academica e
                a disponibilidade profissional de Ramses e formas de contato para possíveis 
                oportunidades de colaboração ou contratação.`,


    disponibilidadeProfissional: {
        tipo: [
            "CLT",
            "Remoto",
            "Freelance"
        ],

        areasDeInteresse: [
            "Desenvolvimento Backend",
            "Desenvolvimento Frontend",
            "Desenvolvimento Full Stack",
            "Desenvolvimento Web"
        ]
    },



    contato: {

        portfolio: "https://pramsy.github.io/meu-portfolio/",
        github: "https://github.com/pramsy/meu-portfolio",
        linkedin: "https://www.linkedin.com/in/ramses-pierre-1a7a8757/",
        email: "pramses26@gmail.com"
    }

};


export default conhecimento;