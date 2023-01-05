/app/node_modules/.bin/nodemon --watch /app/index.js /app/index.js
#nodemon --exec bash -c "node index.js & (sleep 1 && curl -N localhost:8000) && wait"
# curl -N localhost:8000 &
