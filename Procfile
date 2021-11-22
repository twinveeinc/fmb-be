web: ENV_SILENT=true node build/server.js
release: node ace build --production && node ace migration:rollback && node ace migration:run

