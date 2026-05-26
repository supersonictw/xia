# Xia Dockerfile
# Bun based multi-stage build for Nuxt 4 application

FROM oven/bun:alpine AS factory
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . ./
RUN bun run build

FROM oven/bun:alpine
WORKDIR /app
COPY --from=factory /app/.output/ ./
COPY --from=factory /app/docker-entrypoint.sh /docker-entrypoint.sh
ENV BUN_INSTALL=/bun
ENV NUXT_PORT=3000
ENV NUXT_HOST=0.0.0.0
RUN chmod +x /docker-entrypoint.sh
RUN bun install -g pm2
RUN adduser -u 3000 -D xia
RUN chown -R 3000:3000 /app
USER 3000
EXPOSE 3000
ENTRYPOINT ["/docker-entrypoint.sh"]
