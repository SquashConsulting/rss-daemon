# Daemon Service For Recurrent RSS Feed Updates

### Install packages

```sh
npm install
```

### Install/Upgrade Foxx Service

- `npm run install:service` - installs the service
- `npm run upgrade:service` - upgrades the service

### Configuration

`manifest.json` defines two configurable variables:

- `QUEUE_NAME` - The name used for the job queue (defaults to: `daemon`).
- `MOUNT_PATH` - The mount path used for the installed service (defaults to `/daemon`).
