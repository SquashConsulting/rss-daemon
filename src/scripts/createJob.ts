import queues from '@arangodb/foxx/queues';

const { argv } = module.context;
const feed = argv[0];

const { QUEUE_NAME, MOUNT_PATH } = module.context.configuration;
const QUEUE = queues.get(QUEUE_NAME);

const ONE_HOUR = 3600 * 1000;

const currentDate = new Date();
const DATE_IN_ONE_HOUR = currentDate.setHours(currentDate.getHours() + 1);

QUEUE.push({ mount: MOUNT_PATH, name: 'update-feed', maxFailures: 2 }, feed, {
  maxFailures: 2,
  repeatTimes: Infinity,
  repeatDelay: ONE_HOUR,
  delayUntil: DATE_IN_ONE_HOUR,
});
