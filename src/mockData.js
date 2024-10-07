const generateMockData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    authorName: `user${i + 1}`,
    username: `user${i + 1}`,
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
    file: generateMockMedia(i),
  }));
};

const generateMockMedia = (i) => {
  if (i % 2 === 0) {
    return {
      image: "JPEG image",
      video: "",
      url: "https://media.istockphoto.com/id/2060984408/ko/%EC%82%AC%EC%A7%84/stack-of-colorful-books-education-background-back-to-school-book-hardback-colorful-books-on.jpg?s=612x612&w=is&k=20&c=x6WRvpLvHYNsjpkRabsLJ-m3_bF0EX0h_GaRZSsxZYY=",
    };
  } else {
    return {
      image: "",
      video: "mp4 video",
      url: "https://videos.pexels.com/video-files/28701289/12456139_1920_1080_24fps.mp4",
    };
  }
};

export const mockFeed = {
  items: generateMockData(20),
};

export const mockPost = (username, id) => ({
  items: [
    ...generateMockData(1).map((item) => ({
      ...item,
      id: parseInt(id),
      contentId: parseInt(id),
    })),
    ...generateMockData(5).map((item) => ({ ...item, parentId: parseInt(id) })),
  ],
});

export const mockProfile = (id) => ({
  profile: {
    userName: "User1",
    email: "abc@abc.com",
    faceUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
  },
});
