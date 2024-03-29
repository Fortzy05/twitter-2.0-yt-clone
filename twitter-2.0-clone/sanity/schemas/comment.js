export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },

    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the tweet the comment is associated to:',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    },
  ],
}
