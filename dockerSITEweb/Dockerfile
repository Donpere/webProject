# Utilisez l'image de base Nginx
FROM nginx

# Créez le répertoire pour les fichiers statiques
RUN mkdir -p /usr/share/nginx/html

# Copiez les fichiers statiques de votre site web dans le répertoire de travail de Nginx
COPY SITEweb /usr/share/nginx/html

# Copier le fichier 
COPY default.conf /etc/nginx/conf.d

# Exposez le port 8080
EXPOSE 8080

# Commande de démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]

