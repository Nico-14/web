const input = document.getElementById('input');
const terminal = document.getElementById('terminal');
const terminalText = document.getElementById('terminal-text');

input.onblur = () => {
  input.focus();
};

input.onkeypress = (e) => {
  if (e.key === 'Enter') {
    executeCommand(e.currentTarget.value.trim());
    input.value = '';
  }
};

const addTerminalText = (text) => {
  terminalText.innerText += text + '\n';
};

const executeCommand = (cmd) => {
  if (cmd.length === 0) return;
  addTerminalText(cmd);
  switch (cmd) {
    case 'help':
    case 'ayuda':
      addTerminalText('Commands: help, ayuda | about, sobremi | contact, contacto | skills, habilidades');
      break;
    case 'about':
    case 'sobremi':
      addTerminalText(
        `Me llamo Mateo Ledesma, tengo 20 años y soy programador; desde los 15 años estoy en el mundo de la programación y me he mantenido aprendiendo nuevas tecnologías durante todos estos años. \nActualmente me dedico al desarrollo web y a estudiar.\nEstoy en busca de un empleo fijo, para obtener experiencia, estar en un ambiente de trabajo y aprender nuevas tecnologías.`
      );
      break;
    case 'contact':
    case 'contacto':
      terminalText.innerHTML +=
        'LinkedIn: <a href="https://linkedin.com/in/mateo-ledesma" target="_blank">https://linkedin.com/in/mateo-ledesma/</a> <br />Email: mateo.14.ledesma@gmail.com<br/>Instagram: <a href="https://instagram.com/mateoledesma14" target="_blank">https://instagram.com/mateoledesma14/</a> <br />WhatsApp: <a href="https://wa.me/5493435047916" target="_blank">+54 9 343 5047916</a> <br />Discord: Nico14#4929 <br />GitHub: <a href="https://github.com/Nico-14" target="_blank">https://github.com/Nico-14/</a> <br />';
      break;
    case 'skills':
    case 'habilidades':
      addTerminalText(
        'Desarrollo frontend con ReactJS, VueJS, vanilla JavaScript, JQuery y un poco de Angular\nDesarrollo backend con NodeJS. Puedo aprender/usar otros lenguajes y/o frameworks si es necesario, por ejemplo, Python, .NET, PHP.\nDesarrollo de aplicaciones de escritorio con ElectronJs, C# (Forms) y tecnologías similares a Electronjs, como NodeGUI.'
      );
      break;
    default:
      break;
  }
  terminal.scrollTo(0, terminal.scrollHeight);
};
