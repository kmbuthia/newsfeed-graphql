// TODO: Implement gnews API
async function feed (parent, args, context) {
  const where = args.filter || {};
  const clauses = args.clauses || {};

  const links = context.prisma.link.findMany({
    where,
    ...clauses,
  });
  const count = await context.prisma.link.count({ where });

  return {
    links,
    count,
  };
}

async function link (parent, args, context) {
  return context.prisma.link.findOne({
    where: {
      id: Number(args.id),
    },
  });
}

module.exports = {
  info: () => 'This is a GraphQL NewsFeed example!',
  feed,
  link,
};
