import queues from '@arangodb/foxx/queues';

const { QUEUE_NAME } = module.context.configuration;

queues.create(QUEUE_NAME);
