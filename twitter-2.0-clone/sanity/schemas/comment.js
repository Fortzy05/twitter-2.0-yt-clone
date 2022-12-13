export default {
  name: "Comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "Comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "tweet",
      title: "Tweet",
      description: "Reference to the tweet this comment belongs to",
      type: "reference",
      to: { type: "tweet" },
    }
  ],
};
