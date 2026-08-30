ARG BASE_IMAGE
FROM ${BASE_IMAGE}

USER root

RUN pnpm add -g eslint @eslint/js typescript typescript-eslint tsx

# Restore the original user
USER node
