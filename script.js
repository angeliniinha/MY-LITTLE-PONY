


function searchContent() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const text = section.innerText.toLowerCase();
    if (text.includes(query) && query.length > 0) {
      section.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  });
}


const infos = {
  twilight: `
    <h3>Twilight Sparkle</h3>
    <p><strong>Espécie:</strong> Unicórnio (posteriormente Alícornio)</p>
    <p><strong>Elemento da Harmonia:</strong> Magia</p>
    <p><strong>Personalidade:</strong> Inteligente, estudiosa e perfeccionista. Inicialmente tímida e reservada, mas aprende o verdadeiro valor da amizade.</p>
    <p><strong>Curiosidades:</strong> É a pupila da Princesa Celestia e se torna princesa da amizade. Sua cutie mark é uma estrela rosa cercada por pequenas estrelas brancas, simbolizando seu domínio mágico e seu papel como guia de amizades.</p>
  `,

  rainbow: `
    <h3>Rainbow Dash</h3>
    <p><strong>Espécie:</strong> Pégaso</p>
    <p><strong>Elemento da Harmonia:</strong> Lealdade</p>
    <p><strong>Personalidade:</strong> Corajosa, confiante e às vezes impulsiva. Deseja ser a pônei mais rápida de Equestria e fazer parte dos Wonderbolts.</p>
    <p><strong>Curiosidades:</strong> Criou o “Sonic Rainboom”, um fenômeno mágico que gera um arco-íris explosivo. Sua cutie mark é uma nuvem com um raio colorido, representando velocidade e bravura.</p>
  `,

  fluttershy: `
    <h3>Fluttershy</h3>                           
    <p><strong>Espécie:</strong> Pégaso</p>
    <p><strong>Elemento da Harmonia:</strong> Bondade</p>
    <p><strong>Personalidade:</strong> Tímida, doce e gentil. Ama profundamente os animais e possui uma conexão natural com eles.</p>
    <p><strong>Curiosidades:</strong> Apesar da timidez, já mostrou grande coragem para proteger seus amigos. Sua cutie mark são três borboletas rosas, representando empatia e delicadeza.</p>
  `,

  pinkie: `
    <h3>Pinkie Pie</h3>
    <p><strong>Espécie:</strong> Pônei Terrestre</p>
    <p><strong>Elemento da Harmonia:</strong> Alegria</p>
    <p><strong>Personalidade:</strong> Extrovertida, divertida e imprevisível. Ama fazer festas e trazer felicidade para todos.</p>
    <p><strong>Curiosidades:</strong> Pode quebrar a “quarta parede”, fazer coisas impossíveis e sempre surpreende seus amigos. Sua cutie mark tem três balões, representando diversão e amizade.</p>
  `,

  rarity: `
    <h3>Rarity</h3>
    <p><strong>Espécie:</strong> Unicórnio</p>
    <p><strong>Elemento da Harmonia:</strong> Generosidade</p>
    <p><strong>Personalidade:</strong> Elegante, artística e um pouco dramática. Ama moda e beleza, mas valoriza o verdadeiro significado da generosidade.</p>
    <p><strong>Curiosidades:</strong> É estilista e dona da Boutique Carrossel. Sua cutie mark são três diamantes azuis, representando seu talento em encontrar beleza em tudo.</p>
  `,

  applejack: `
    <h3>Applejack</h3>
    <p><strong>Espécie:</strong> Pônei Terrestre</p>
    <p><strong>Elemento da Harmonia:</strong> Honestidade</p>
    <p><strong>Personalidade:</strong> Trabalhadora, honesta e confiável. Vive e cuida da fazenda Sweet Apple Acres com sua família.</p>
    <p><strong>Curiosidades:</strong> É conhecida por sua força e sinceridade. Sua cutie mark são três maçãs, simbolizando sua ligação com a fazenda e a verdade.</p>
  `,

  ponyville: `
    <h3>Ponyville</h3>
    <p>Uma vila acolhedora no coração de Equestria. É o lar das seis protagonistas e o principal cenário da série.</p>
    <p><strong>Características:</strong> Comunidade amigável, repleta de festas e eventos.</p>
    <p><strong>Locais Notáveis:</strong> Biblioteca da Twilight (depois Castelo da Amizade), Loja de Doces Sugarcube Corner e a Fazenda Sweet Apple Acres.</p>
  `,

  canterlot: `
    <h3>Canterlot</h3>
    <p>Capital de Equestria, construída nas encostas de uma montanha. É a sede da realeza e da magia mais avançada do reino.</p>
    <p><strong>Habitantes:</strong> Principalmente unicórnios e membros da nobreza.</p>
    <p><strong>Locais Notáveis:</strong> Castelo das Princesas Celestia e Luna, Escola para Unicórnios Superdotados e o Grande Salão Real.</p>
  `,

  cristal: `
    <h3>Reino de Cristal</h3>
    <p>Um reino mágico localizado ao norte de Equestria, inteiramente feito de cristal cintilante.</p>
    <p><strong>Líderes:</strong> Princesa Cadance e Shining Armor.</p>
    <p><strong>Curiosidades:</strong> O Coração de Cristal protege o reino, alimentado pela luz e amor dos habitantes.</p>
  `,

  pegasus: `
    <h3>Pégasos</h3>
    <p>Pôneis alados capazes de voar e controlar o clima. Vivem em cidades nas nuvens, como Cloudsdale.</p>
    <p><strong>Habilidades:</strong> Manipulação de nuvens e controle da chuva.</p>
    <p><strong>Curiosidades:</strong> Só pégasos podem andar sobre nuvens naturalmente.</p>
  `,

  unicornio: `
    <h3>Unicórnios</h3>
    <p>Pôneis com chifres mágicos que canalizam feitiços e energia. Usam telecinesia e magia variada.</p>
    <p><strong>Habilidades:</strong> Magia, feitiços e criação de artefatos mágicos.</p>
    <p><strong>Curiosidades:</strong> Cada unicórnio tem um tipo de magia único, relacionado à sua cutie mark.</p>
  `,

  terra: `
    <h3>Pôneis da Terra</h3>
    <p>Sem asas ou chifre, mas extremamente fortes e resistentes. Ligados à natureza e ao cultivo.</p>
    <p><strong>Habilidades:</strong> Agricultura, força física e instinto natural.</p>
    <p><strong>Curiosidades:</strong> São a base da sociedade pônei e mantêm a prosperidade de Equestria.</p>
  `
};

function showInfo(key) {
  const personagens = ['twilight', 'rainbow', 'fluttershy', 'pinkie', 'rarity', 'applejack'];
  const cidades = ['ponyville', 'canterlot', 'cristal'];
  const especies = ['pegasus', 'unicornio', 'terra'];

  if (personagens.includes(key)) {
    document.getElementById('infoBox').innerHTML = infos[key];
  } else if (cidades.includes(key)) {
    document.getElementById('info-cidades').innerHTML = infos[key];
  } else if (especies.includes(key)) {
    document.getElementById('info-especies').innerHTML = infos[key];
  }
}

function closeInfo() {
  document.getElementById('infoBox').innerHTML = '';
}