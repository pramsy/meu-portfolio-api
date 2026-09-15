import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            error: "Método não permitido"
        });

    }

    try {

        const { message } = req.body;

        if (!message) {

            return res.status(400).json({
                error: "Mensagem não informada"
            });

        }

        const response = await client.responses.create({

            model: "gpt-5-mini",

            instructions: `
Você é o Assistente Virtual do portfólio de Ramses Pierre.

Sua função é responder perguntas sobre:

- Ramses Pierre
- sua formação
- sua experiência profissional
- suas tecnologias
- seus projetos
- seu portfólio
- sua disponibilidade profissional
- formas de contato

REGRAS:

1. Seja profissional, cordial e objetivo.
2. Responda em português.
3. Não invente informações sobre Ramses.
4. Se uma informação não estiver disponível na base de conhecimento, diga claramente que não possui essa informação.
5. Não diga que Ramses possui experiência profissional que não esteja informada na base.
6. Quando fizer sentido, incentive o visitante a conhecer os projetos do portfólio.
`,

            input: message

        });

        return res.status(200).json({

            response: response.output_text

        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({

            error: "Erro ao processar a mensagem."

        });

    }

}