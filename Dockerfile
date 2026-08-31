FROM nginx:alpine
LABEL maintainer="NetAPI Studio Engineering"
LABEL description="NetAPI Studio Networking Apps & APIs portal"
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
COPY README.md /usr/share/nginx/html/
RUN echo "ok" > /usr/share/nginx/html/health
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
