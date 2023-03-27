FROM nginx:1.21.0-alpine
COPY ./dist/spa /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8045
CMD ["nginx", "-g", "daemon off;"]

# docker build -t booking-books .
# docker run -d -p 8045:8045 --restart=unless-stopped --name pihome-booking-books booking-books
