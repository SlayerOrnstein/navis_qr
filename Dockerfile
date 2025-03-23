FROM denoland/deno:2.2.5 AS build

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno task build
RUN deno compile -o /navis_qr --include static --include _fresh --include deno.json -A main.ts

FROM denoland/deno:alpine-2.2.5

COPY --from=build /navis_qr /navis_qr

EXPOSE 8000
CMD [ "./navis_qr" ]
