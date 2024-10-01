const generateMockData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    authorName: `User ${i + 1}`,
    contentId: i + 1,
    faceUrl: `https://randomuser.me/api/portraits/${i % 2 ? "women" : "men"}/${
      (i % 70) + 1
    }.jpg`,
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
    content: `This is a mock content ${
      i + 1
    }. It can be a post or a comment depending on the context.`,
    likes: Math.floor(Math.random() * 100),
    replies: Math.floor(Math.random() * 20),
  }));
};

export const mockFeed = {
  items: generateMockData(20),
};

export const mockPost = (id) => ({
  items: [
    ...generateMockData(1).map((item) => ({
      ...item,
      id: parseInt(id),
      contentId: parseInt(id),
    })),
    ...generateMockData(5).map((item) => ({ ...item, parentId: parseInt(id) })),
  ],
});
