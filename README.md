# MarkdownEditor

  >  In this repository you will find the solution of exercise7 of Technical Exercise

### Required
 - Node
 - Redis
 - Docker (optional to run redis container)

### Clone repo

`git clone git@github.com:mxorla/MarkdownEditor.git`

 
####  Run Redis
  >  Redis is used to store entries 

if you have docker installed run: 
`docker run --name redis-me -p 6379:6379 redis:alpine`

####  Run Backend
Navigate to ~/MarkdownEditor/backend and run 
`npm install && npm start`

> Should be start backend on localhost:5000

####  Run Frontend
Navigate to ~/MarkdownEditor/frontend and run 
`npm install && npm run build && npm start`

> Should be start application on localhost:3000


### Video DEMO:
https://drive.google.com/file/d/1sgoGRLj0C8vHiSaAhBovYoiF8c7Sasqa/view?usp=sharing