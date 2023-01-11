FROM node:14-alpine

RUN npm install -g @mockoon/cli@2.2.1
COPY mockoon-registration.json ./mockoon-registration.json

# Do not run as root.
RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon
RUN chown -R mockoon ./mockoon-registration.json
USER mockoon

EXPOSE 3003

ENTRYPOINT ["mockoon-cli", "start", "--hostname", "0.0.0.0", "--daemon-off", "--data", "mockoon-registration.json", "--container"]

# Usage: docker run -p <host_port>:<container_port> mockoon-test