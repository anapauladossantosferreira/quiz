<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz de Conhecimentos Gerais - 76 Perguntas</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            color: #fff;
        }

        .container {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            padding: 40px;
            max-width: 700px;
            width: 100%;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #00d2ff, #3a7bd5);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .subtitle {
            text-align: center;
            color: #a0aec0;
            margin-bottom: 30px;
            font-size: 1rem;
        }

        /* Tela inicial */
        #start-screen, #result-screen {
            text-align: center;
        }

        .btn {
            background: linear-gradient(90deg, #00d2ff, #3a7bd5);
            color: white;
            border: none;
            padding: 16px 40px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
            box-shadow: 0 10px 20px rgba(0, 210, 255, 0.3);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 25px rgba(0, 210, 255, 0.4);
        }

        .btn:active {
            transform: translateY(0);
        }

        /* Progresso */
        .progress-container {
            margin-bottom: 25px;
        }

        .progress-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 0.95rem;
            color: #a0aec0;
        }

        .progress-bar {
            height: 10px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #00d2ff, #3a7bd5);
            border-radius: 10px;
            transition: width 0.4s ease;
            width: 0%;
        }

        /* Pergunta */
        #question-text {
            font-size: 1.35rem;
            font-weight: 600;
            margin-bottom: 30px;
            line-height: 1.5;
            text-align: center;
        }

        /* Opções */
        .options {
            display: grid;
            gap: 14px;
        }

        .option {
            background: rgba(255, 255, 255, 0.07);
            border: 2px solid rgba(255, 255, 255, 0.12);
            padding: 18px 22px;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.25s ease;
            font-size: 1.05rem;
            text-align: left;
            color: #e2e8f0;
        }

        .option:hover:not(.disabled) {
            background: rgba(255, 255, 255, 0.12);
            border-color: #00d2ff;
            transform: translateX(6px);
        }

        .option.correct {
            background: rgba(16, 185, 129, 0.25);
            border-color: #10b981;
            color: #6ee7b7;
        }

        .option.incorrect {
            background: rgba(239, 68, 68, 0.25);
            border-color: #ef4444;
            color: #fca5a5;
        }

        .option.disabled {
            cursor: not-allowed;
            opacity: 0.85;
        }

        /* Botão próxima */
        #next-btn {
            display: none;
            width: 100%;
            margin-top: 25px;
        }

        /* Resultado */
        .score-circle {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00d2ff, #3a7bd5);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto 25px;
            box-shadow: 0 15px 30px rgba(0, 210, 255, 0.3);
        }

        .score-number {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1;
        }

        .score-total {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .result-message {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .result-detail {
            color: #a0aec0;
            margin-bottom: 25px;
        }

        /* Esconder telas */
        .hidden {
            display: none !important;
        }

        @media (max-width: 600px) {
            .container {
                padding: 25px 20px;
            }
            h1 {
                font-size: 1.6rem;
            }
            #question-text {
                font-size: 1.15rem;
            }
            .option {
                padding: 15px 18px;
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Tela Inicial -->
        <div id="start-screen">
            <h1>🧠 Quiz de Conhecimentos Gerais</h1>
            <p class="subtitle">76 perguntas básicas para testar seus conhecimentos</p>
            <p style="color:#a0aec0; margin-bottom: 30px;">Responda com calma e boa sorte!</p>
            <button class="btn" onclick="startQuiz()">Começar o Quiz</button>
        </div>

        <!-- Tela do Quiz -->
        <div id="quiz-screen" class="hidden">
            <div class="progress-container">
                <div class="progress-info">
                    <span id="question-counter">Pergunta 1 de 76</span>
                    <span id="score-display">Pontos: 0</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" id="progress-fill"></div>
                </div>
            </div>

            <div id="question-text"></div>
            <div class="options" id="options-container"></div>
            <button class="btn" id="next-btn" onclick="nextQuestion()">Próxima Pergunta →</button>
        </div>

        <!-- Tela de Resultado -->
        <div id="result-screen" class="hidden">
            <h1>Resultado Final</h1>
            <div class="score-circle">
                <div class="score-number" id="final-score">0</div>
                <div class="score-total">de 76</div>
            </div>
            <div class="result-message" id="result-message"></div>
            <div class="result-detail" id="result-detail"></div>
            <button class="btn" onclick="restartQuiz()">Jogar Novamente</button>
        </div>
    </div>

    <script>
        // ==================== 76 PERGUNTAS ====================
        const questions = [
            {
                question: "Quem foi a primeira pessoa a viajar no espaço?",
                options: ["Yuri Gagarin", "Neil Armstrong", "A cadela Laika", "Buzz Aldrin"],
                correct: 0
            },
            {
                question: "Qual é a montanha mais alta do mundo?",
                options: ["Monte Everest", "K2", "Monte Kilimanjaro", "Pico da Neblina"],
                correct: 0
            },
            {
                question: "Onde se localiza Machu Picchu?",
                options: ["Colômbia", "Peru", "Bolívia", "Chile"],
                correct: 1
            },
            {
                question: "Que país tem o formato de uma bota?",
                options: ["Portugal", "Brasil", "Itália", "México"],
                correct: 2
            },
            {
                question: "Quem inventou a lâmpada elétrica?",
                options: ["Graham Bell", "Thomas Edison", "Nikola Tesla", "Santos Dumont"],
                correct: 1
            },
            {
                question: "Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?",
                options: ["Aproximadamente 24 horas", "365 dias", "7 dias", "30 dias"],
                correct: 0
            },
            {
                question: "A que temperatura a água ferve (ao nível do mar)?",
                options: ["0 °C", "50 °C", "100 °C", "200 °C"],
                correct: 2
            },
            {
                question: "Quais são as fases da Lua?",
                options: ["Nova, crescente, cheia e minguante", "Nova e cheia", "Crescente e minguante", "Nova, cheia e superlua"],
                correct: 0
            },
            {
                question: "Quantos ossos tem o corpo humano adulto?",
                options: ["126", "206", "300", "180"],
                correct: 1
            },
            {
                question: "Qual é o maior planeta do Sistema Solar?",
                options: ["Saturno", "Júpiter", "Netuno", "Terra"],
                correct: 1
            },
            {
                question: "Qual é o planeta mais próximo do Sol?",
                options: ["Vênus", "Marte", "Mercúrio", "Terra"],
                correct: 2
            },
            {
                question: "Quantos continentes existem?",
                options: ["5", "6", "7", "8"],
                correct: 1
            },
            {
                question: "Qual é a maior floresta tropical do mundo?",
                options: ["Mata Atlântica", "Floresta Amazônica", "Floresta do Congo", "Taiga"],
                correct: 1
            },
            {
                question: "Quem pintou a Mona Lisa?",
                options: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Picasso"],
                correct: 1
            },
            {
                question: "O que representam os cinco anéis olímpicos?",
                options: ["Os cinco continentes", "Cinco esportes principais", "Cinco deuses gregos", "Cinco cores primárias"],
                correct: 0
            },
            {
                question: "Qual é a capital do Brasil?",
                options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
                correct: 2
            },
            {
                question: "De quem é a famosa frase “Penso, logo existo”?",
                options: ["Platão", "Sócrates", "Descartes", "Aristóteles"],
                correct: 2
            },
            {
                question: "De onde é a invenção do chuveiro elétrico?",
                options: ["França", "Inglaterra", "Brasil", "Estados Unidos"],
                correct: 2
            },
            {
                question: "Quais são o menor e o maior país do mundo?",
                options: ["Vaticano e Rússia", "Mônaco e China", "Nauru e Canadá", "San Marino e Índia"],
                correct: 0
            },
            {
                question: "Qual planeta é conhecido como o Planeta Vermelho?",
                options: ["Vênus", "Marte", "Júpiter", "Mercúrio"],
                correct: 1
            },
            {
                question: "Qual é o maior oceano da Terra?",
                options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
                correct: 2
            },
            {
                question: "Quem foi o primeiro presidente dos Estados Unidos?",
                options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
                correct: 2
            },
            {
                question: "Em que ano terminou a Segunda Guerra Mundial?",
                options: ["1939", "1945", "1918", "1950"],
                correct: 1
            },
            {
                question: "Qual gás as plantas absorvem durante a fotossíntese?",
                options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"],
                correct: 2
            },
            {
                question: "Qual é a capital da França?",
                options: ["Londres", "Berlim", "Madri", "Paris"],
                correct: 3
            },
            {
                question: "Quantos lados tem um hexágono?",
                options: ["5", "6", "7", "8"],
                correct: 1
            },
            {
                question: "Qual é o animal terrestre mais rápido do mundo?",
                options: ["Leão", "Cavalo", "Guepardo", "Antílope"],
                correct: 2
            },
            {
                question: "Quantas cores tem o arco-íris?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "Qual é o maior animal do planeta?",
                options: ["Elefante africano", "Baleia-azul", "Tubarão-baleia", "Girafa"],
                correct: 1
            },
            {
                question: "Quem escreveu “Dom Quixote”?",
                options: ["William Shakespeare", "Miguel de Cervantes", "Machado de Assis", "Victor Hugo"],
                correct: 1
            },
            {
                question: "Qual é a fórmula química da água?",
                options: ["CO₂", "H₂O", "O₂", "NaCl"],
                correct: 1
            },
            {
                question: "Qual é a capital do Japão?",
                options: ["Pequim", "Seul", "Tóquio", "Bangkok"],
                correct: 2
            },
            {
                question: "Quantos jogadores tem um time de futebol em campo?",
                options: ["10", "11", "12", "9"],
                correct: 1
            },
            {
                question: "Qual é o rio mais longo do mundo?",
                options: ["Amazonas", "Nilo", "Yangtzé", "Mississipi"],
                correct: 1
            },
            {
                question: "Quem descobriu o Brasil?",
                options: ["Cristóvão Colombo", "Pedro Álvares Cabral", "Vasco da Gama", "Fernão de Magalhães"],
                correct: 1
            },
            {
                question: "Qual é o metal líquido à temperatura ambiente?",
                options: ["Ferro", "Mercúrio", "Chumbo", "Alumínio"],
                correct: 1
            },
            {
                question: "Quantos estados tem o Brasil?",
                options: ["25", "26", "27", "28"],
                correct: 1
            },
            {
                question: "Qual é a capital da Argentina?",
                options: ["Santiago", "Montevidéu", "Buenos Aires", "Lima"],
                correct: 2
            },
            {
                question: "O que significa a sigla ONU?",
                options: ["Organização das Nações Unidas", "Ordem Nacional Unida", "Organização Mundial da Saúde", "Organização das Nações do Universo"],
                correct: 0
            },
            {
                question: "Qual é o maior deserto do mundo?",
                options: ["Deserto do Saara", "Deserto da Arábia", "Deserto de Gobi", "Antártida"],
                correct: 3
            },
            {
                question: "Quem pintou “A Noite Estrelada”?",
                options: ["Picasso", "Van Gogh", "Monet", "Dalí"],
                correct: 1
            },
            {
                question: "Qual é a língua mais falada no mundo (nativos)?",
                options: ["Inglês", "Espanhol", "Mandarim", "Hindi"],
                correct: 2
            },
            {
                question: "Quantos dentes tem um adulto normalmente?",
                options: ["28", "30", "32", "36"],
                correct: 2
            },
            {
                question: "Qual é o menor osso do corpo humano?",
                options: ["Estribo", "Martelo", "Bigorna", "Fíbula"],
                correct: 0
            },
            {
                question: "Em que continente fica o Egito?",
                options: ["Ásia", "Europa", "África", "América"],
                correct: 2
            },
            {
                question: "Qual é a capital de Portugal?",
                options: ["Porto", "Lisboa", "Coimbra", "Braga"],
                correct: 1
            },
            {
                question: "Quem foi Albert Einstein?",
                options: ["Pintor", "Físico", "Músico", "Escritor"],
                correct: 1
            },
            {
                question: "Qual é o símbolo químico do ouro?",
                options: ["Ag", "Au", "Fe", "Cu"],
                correct: 1
            },
            {
                question: "Quantas cordas tem um violão padrão?",
                options: ["4", "5", "6", "7"],
                correct: 2
            },
            {
                question: "Qual é a capital da Itália?",
                options: ["Milão", "Veneza", "Roma", "Nápoles"],
                correct: 2
            },
            {
                question: "O que é a fotossíntese?",
                options: ["Processo de respiração das plantas", "Processo de produção de alimento pelas plantas", "Processo de reprodução das plantas", "Processo de absorção de água"],
                correct: 1
            },
            {
                question: "Qual é o maior órgão do corpo humano?",
                options: ["Fígado", "Pele", "Pulmão", "Intestino"],
                correct: 1
            },
            {
                question: "Em que ano o homem pisou na Lua pela primeira vez?",
                options: ["1965", "1969", "1972", "1961"],
                correct: 1
            },
            {
                question: "Qual é a capital da Alemanha?",
                options: ["Munique", "Hamburgo", "Berlim", "Frankfurt"],
                correct: 2
            },
            {
                question: "Quantos segundos tem uma hora?",
                options: ["3600", "60", "600", "360"],
                correct: 0
            },
            {
                question: "Qual é o país com maior população do mundo?",
                options: ["Índia", "China", "Estados Unidos", "Indonésia"],
                correct: 0
            },
            {
                question: "Quem escreveu “Romeu e Julieta”?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "Qual é a velocidade da luz no vácuo?",
                options: ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "30.000 km/s"],
                correct: 0
            },
            {
                question: "Qual é a capital do Canadá?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                correct: 2
            },
            {
                question: "Quantos planetas tem o Sistema Solar?",
                options: ["7", "8", "9", "10"],
                correct: 1
            },
            {
                question: "Qual é o nome do satélite natural da Terra?",
                options: ["Lua", "Titã", "Europa", "Ganimedes"],
                correct: 0
            },
            {
                question: "Quem inventou o telefone?",
                options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
                correct: 1
            },
            {
                question: "Qual é a capital da Espanha?",
                options: ["Barcelona", "Madri", "Sevilha", "Valência"],
                correct: 1
            },
            {
                question: "O que significa a sigla DNA?",
                options: ["Ácido Desoxirribonucleico", "Ácido Ribonucleico", "Dióxido de Nitrogênio", "Composto Orgânico"],
                correct: 0
            },
            {
                question: "Qual é o maior mamífero terrestre?",
                options: ["Girafa", "Elefante africano", "Rinoceronte", "Hipopótamo"],
                correct: 1
            },
            {
                question: "Em que país fica a Torre Eiffel?",
                options: ["Itália", "França", "Inglaterra", "Alemanha"],
                correct: 1
            },
            {
                question: "Qual é a capital da Rússia?",
                options: ["São Petersburgo", "Moscou", "Kiev", "Minsk"],
                correct: 1
            },
            {
                question: "Quantos minutos tem um dia?",
                options: ["1440", "24", "60", "1000"],
                correct: 0
            },
            {
                question: "Qual é o processo pelo qual a água passa do estado líquido para o gasoso?",
                options: ["Condensação", "Evaporação", "Solidificação", "Sublimação"],
                correct: 1
            },
            {
                question: "Quem foi o primeiro homem a pisar na Lua?",
                options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
                correct: 1
            },
            {
                question: "Qual é a capital da China?",
                options: ["Xangai", "Pequim", "Hong Kong", "Cantão"],
                correct: 1
            },
            {
                question: "Qual é o nome do maior osso do corpo humano?",
                options: ["Tíbia", "Fêmur", "Úmero", "Rádio"],
                correct: 1
            },
            {
                question: "Em que ano o Brasil foi descoberto?",
                options: ["1492", "1500", "1502", "1498"],
                correct: 1
            },
            {
                question: "Qual é o instrumento musical de teclas mais conhecido?",
                options: ["Violino", "Piano", "Flauta", "Guitarra"],
                correct: 1
            },
            {
                question: "Qual é a capital da Austrália?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2
            },
            {
                question: "Quantos lados tem um triângulo?",
                options: ["2", "3", "4", "5"],
                correct: 1
            },
            {
                question: "Qual é o gás mais abundante na atmosfera terrestre?",
                options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Argônio"],
                correct: 1
            },
            {
                question: "Quem é conhecido como o “Rei do Futebol”?",
                options: ["Maradona", "Pelé", "Cristiano Ronaldo", "Messi"],
                correct: 1
            },
            {
                question: "Qual é a capital do México?",
                options: ["Guadalajara", "Monterrey", "Cidade do México", "Cancún"],
                correct: 2
            },
            {
                question: "O que é um eclipse solar?",
                options: ["Quando a Lua fica entre a Terra e o Sol", "Quando a Terra fica entre o Sol e a Lua", "Quando o Sol fica entre a Terra e a Lua", "Quando a Lua some completamente"],
                correct: 0
            }
        ];

        // ==================== VARIÁVEIS ====================
        let currentQuestion = 0;
        let score = 0;
        let answered = false;

        // ==================== FUNÇÕES ====================
        function startQuiz() {
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('quiz-screen').classList.remove('hidden');
            currentQuestion = 0;
            score = 0;
            showQuestion();
        }

        function showQuestion() {
            answered = false;
            const q = questions[currentQuestion];
            
            document.getElementById('question-text').textContent = q.question;
            document.getElementById('question-counter').textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
            document.getElementById('score-display').textContent = `Pontos: ${score}`;
            
            // Atualiza barra de progresso
            const progress = ((currentQuestion) / questions.length) * 100;
            document.getElementById('progress-fill').style.width = progress + '%';

            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';

            q.options.forEach((option, index) => {
                const btn = document.createElement('div');
                btn.className = 'option';
                btn.textContent = option;
                btn.onclick = () => selectOption(index);
                optionsContainer.appendChild(btn);
            });

            document.getElementById('next-btn').style.display = 'none';
        }

        function selectOption(selectedIndex) {
            if (answered) return;
            answered = true;

            const q = questions[currentQuestion];
            const options = document.querySelectorAll('.option');

            options.forEach((opt, index) => {
                opt.classList.add('disabled');
                if (index === q.correct) {
                    opt.classList.add('correct');
                } else if (index === selectedIndex) {
                    opt.classList.add('incorrect');
                }
            });

            if (selectedIndex === q.correct) {
                score++;
                document.getElementById('score-display').textContent = `Pontos: ${score}`;
            }

            document.getElementById('next-btn').style.display = 'block';
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            document.getElementById('quiz-screen').classList.add('hidden');
            document.getElementById('result-screen').classList.remove('hidden');

            const percentage = Math.round((score / questions.length) * 100);
            document.getElementById('final-score').textContent = score;

            let message = '';
            let detail = '';

            if (percentage >= 90) {
                message = 'Excelente! Você é um expert!';
                detail = `Você acertou ${percentage}% das perguntas. Parabéns!`;
            } else if (percentage >= 70) {
                message = 'Muito bom!';
                detail = `Você acertou ${percentage}% das perguntas. Continue estudando!`;
            } else if (percentage >= 50) {
                message = 'Bom esforço!';
                detail = `Você acertou ${percentage}% das perguntas. Dá para melhorar!`;
            } else {
                message = 'Continue tentando!';
                detail = `Você acertou ${percentage}% das perguntas. Pratique mais!`;
            }

            document.getElementById('result-message').textContent = message;
            document.getElementById('result-detail').textContent = detail;
        }

        function restartQuiz() {
            document.getElementById('result-screen').classList.add('hidden');
            document.getElementById('start-screen').classList.remove('hidden');
        }
    </script>
</body>
</html>