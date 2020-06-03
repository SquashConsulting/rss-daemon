import queues from '@arangodb/foxx/queues';

const { argv } = module.context;
const feed = argv[0];

const { QUEUE_NAME, MOUNT_PATH } = module.context.configuration;
const QUEUE = queues.get(QUEUE_NAME);

QUEUE.push({ mount: MOUNT_PATH, name: 'update-feed' }, feed, {
  repeatTimes: 3,
  repeatDelay: 5 * 1000,
});
