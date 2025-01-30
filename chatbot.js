// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();

// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil
client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Reiniciar|Cancelar|cancelar|reiniciar)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, '*Bem-vindo(a)!*\n' + name.split(" ")[0] + ', nosso objetivo é ajudar você a destacar suas habilidades e experiências com currículos de alta qualidade.\nJá imaginou se destacar no mercado de trabalho com um currículo impecável? Podemos te ajudar!');
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(4000);
        await client.sendMessage(msg.from, 'Por favor, digite uma das opções abaixo:\n\n1 - Preciso de um Currículo Vencedor!\n2 - Gostaria de fazer o Teste de Personalidade;\n3 - Gostaria de fazer o Teste Disk; \n4 - Tenho uma dúvida;\n5 - Outro motivo...'); //Primeira mensagem de texto
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(4000); //Delay de 5 segundos

    } else if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Certo! Vamos ajudar você a criar um currículo impecável que destaque suas habilidades e experiências de maneira profissional e atraente.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Como funciona? É muito simples!*\n- Preencha o formulário com suas informações pessoais e profissionais.\n- Escolha os serviços adicionais que deseja incluir no seu currículo.\n- Realize o pagamento da taxa correspondente aos serviços escolhidos.\n- Receba seu currículo pronto e profissional em um prazo de 24 horas.');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Link do Formulário: \nhttps://forms.office.com/r/0ZhVdaGYNL');

    } else if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Compreender sua personalidade é essencial para destacar-se no mercado de trabalho e alcançar seus objetivos profissionais. \nNosso serviço de Análise de Personalidade oferece: \n*- AutoConhecimento;* \n*- Dicas Práticas;* \n*- Relatório Detalhado;* \n*- Aplicação.*');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Como Funciona?*\n*Responda às perguntas:* O teste apresenta várias perguntas sobre suas preferências e comportamentos. É importante responder de forma honesta para obter um resultado preciso.\n*Análise dos resultados:* Após responder todas as perguntas, nós calculamos seu tipo de personalidade com base nas suas respostas.\n*Resultado:* O resultado é um dos 16 tipos de personalidade do MBTI, cada um com suas características únicas.');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Link do Formulário: \nhttps://forms.office.com/r/GXnrYahAke');

    } else if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'O Teste DISC é uma ferramenta poderosa para entender seu perfil profissional e explorar carreiras que melhor se encaixam às suas características. \nNosso serviço de Teste DISC inclui: \n*- Identificação de Perfil;* \n*- Sugestões de Carreiras;* \n*- Dicas Personalizadas;* \n*- Inclusão no Currículo.*');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Dicas:*\n- Não há resultado bom ou ruim, por isso, seja sincera(o).\n- Escolha um momento tranquilo para fazer o teste.\n- Não pense muito, a primeira resposta geralmente será a mais correta.\n- Responda pensando em quem você é e não em quem gostaria de ser.');

        await delay(2000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(2000);
        await client.sendMessage(msg.from, 'Link do Formulário: \nhttps://forms.office.com/r/ZPemC4njUy');

    } else if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Tudo bem! \nEstamos aqui para ajudar, qual seria sua dúvida?');

    } else if (msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Certo! \nPor qual motivo você está entrando em contato?');

    }
});
