// Importação dos listeners
import './listeners/actionListener.js';
import './listeners/cookieChangeListener.js';
import './listeners/messageListener.js';
import './listeners/tabChangeListener.js';

// Importação das funções principais
import iniciarPing from './functions/iniciarPing.js';

// Inicialização
console.log('Extensão inicializada...');
iniciarPing();