/*Se estiver executando js no frontend esta executando no Browser, se estiver executando no backend esta 
executando no Node.
No Browser tudo que e criado pode estar disputando o escopo global, quando se cria variaveis ou constantes em js 
elas irao todas para o escopo global se nao estiver dentro de um escopo local(dentro de chaves, funcoes, array,etc).
Ja dentro de Node cada arquivo e um modulo, sendo assim cada variavel criada vai para um escopo local, ja se 
nao utilizar 'let' ou 'var' ou 'const' a variavel vai para o escopo global(nao tem utilidade usar isso).
Isso e necessario para conhecer o runtime e local que esta executando. Uma dica e sempre fugir do escopo global.*/