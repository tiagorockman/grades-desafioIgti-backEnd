#DICAS
- Para execução do backend no Heroku adicionar arquivo Procfile
- Define .env caso não esteja definido
- Define o modo de conexão no Procfile web: node -r dotenv/config --experimental-modules app.js
- Atualiza o repository remote
- Depois executa git push heroku master
- NO Heroku definir as variáveis de ambiente do MONGO para conexão
- No Atlas liberar o ip do heroku para conexão every.
- Reiniciar o heroku -> heroku restart
- Mudar a baseURL no FrontEnd para a url Base do backend