# extens-oCopyZap
Extensão do Google Chrome para ser utilizada no WhatsApp, buscando facilitar a funcionalidade de copiar números em conversas.
Essa extensão desenvolvida em JavaScript busca automatizar a funcionalidade de copiar números das suas conversas no WhatsApp, a exemplo de quem trabalha com o público e necessita de salvar os números pensando em futuras estratégias, essa é a extensão perfeita.
Ela se baseia em clickar em um botão descrito como "CTRL+C", extremamente intuitiva, que sinaliza sua funcionalidade, uma abreviação da ação de copiar.
Ao clickar o script irá rodar e abrir a janela de dados do contato, para que possa ali fazer toda a verificação de número.
Ao pegar o número e enviar para sua área de transferência, ele fecha os dados do contato e você conseguiu copiar um número em 1s com apenas 1 click.

Por quais motivos o script deve abrir a seção de dados do contato?
Basicamente, existem diversas formas de serem salvos os números no WhatsApp, e com isso, ele iria aparecer em divs diferentes e seria díficil localizar o número.
Assim, o script busca as divs que podem ter o número, a verificação ocorre na importação do conteúdo da div e verificação se há letras, caso haja, ele passa a buscar em outra div, até achar. Quando acha a div correta, pega o texto, e formata ele retirando o +55, o hífen entre os números e o espaço entre o ddd e o número. 
Logo, copiando o contato de forma limpa e clara para lançar em uma planilha ou sistema. 

A extensão também pode sofrer alterações visando a cópia conjunta do nome das pessoas, caso seja necessário no seu problema.

Por fim, foi um bom projeto de freela para se trabalhar, que me trouxe diversos aprendizados no DOM.
