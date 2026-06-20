# 🎉 Presente de Aniversário Renata 2026

Uma página estática de perfil do **Orkut** bem simples, com direito a depoimentos (porque nostalgia é tudo, não é mesmo?) e alguns easter eggs!

## 📁 Estrutura do Projeto

```bash
├── src/                   
│   ├── styles/            # CSS 
│   ├── js/                # JavaScript (tocador de vinil, confete, etc)
│   └── assets/
│       ├── img/           # Imagens e fotos
│       └── fonts/         # Fontes 
│
├── scripts/               # Scripts Python 🐍
│   ├── generate_qrcode.py # Gera QR code estilizado
│   └── requirements.txt   # Dependências
│
│   index.html         # A página principal
└── README.md (você está aqui!)
```

## 🎮 Como Usar

Clone o projeto e abra `src/index.html` no navegador. **Pronto!**

Alguns easter eggs:

- Confete ao scrollar a página (para baixo e para cima)
- Tocador de vinil funcional que aparece ao pressionar a tecla `R` 🎵
- Cartão de aniversário que aparece ao clicar no emoji 🥳
- Anúncio que foge do cursor ao tentar fechá-lo
- Só funciona na internet grande!

### 🐍 Python: Gerando o QR Code

O script `generate_qrcode.py` cria um QR code estilizado que leva para a página deployada deste projeto!

#### Pré-requisitos

- Python 3.7+ instalado

#### Instalando Dependências

Em `scripts/`, siga os passos abaixo:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python generate_qrcode.py
```

**O que acontece:**

Este QR code ✨bonitão✨ é gerado (com direito a gradiente e tudo! chique, né?):

<div align="center">
    <img src="scripts/qrcode.png" alt="QR code em gradiente radial do preto para azul escuro, com um emoji segurando um presente no meio."/>
</div>

Ele fica salvo como `qrcode.png` na pasta `scripts/` e, caso queira personalizá-lo, siga os passos da próxima seção!

#### Personalizando (opcional)

Se quiser mexer no script:

- **Mudar a URL:** Edite a linha `qr.add_data('...')`
- **Mudar a imagem central:** Troque o `emoji.jpg` por outra imagem
- **Mudar as cores:** Mexe na `RadialGradiantColorMask()`

## 🛠️ Tech Stack

- **HTML5** - Simples assim
- **CSS3** - Muito CSS mesmo 😅
- **JavaScript** - Vanilla JS
- **Python** - Para gerar ✨arte✨ em QR code!

## 🎨 Créditos

Página estática de perfil baseada no Orkut dos anos 2000.

Este é um presente de aniversário cheio de nostalgia, feito com muito carinho por mim e [@itepifanio](https://github.com/itepifanio/) para a nossa amiga Renata. 💛
