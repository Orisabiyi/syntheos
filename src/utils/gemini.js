const apiKey = import.meta.env.VITE_API_KEY;
export const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

export const placeholder = `📸 Share your favorite travel photo! 🌄

Whether it's a stunning landscape, a bustling city, or a serene beach, we want to see your best travel shots. Use the hashtag #TravelPhotoChallenge and tag us for a chance to be featured!

🌟 Winner gets a special shoutout and a surprise gift! 🎁

#Travel #Photography #Adventure #Wanderlust #TravelPhotoChallenge
`;

export function optimizedRequest(content) {
  return {
    contents: [
      {
        parts: [
          {
            text: `Analyze the following post content and provide the following:
    1. Engagement metrics (e.g., predicted likes, shares, comments).
    2. Suggested improvements for better engagement.
    3. Hashtag recommendations.
    4. Recommended content for the post (twitter).

    Post Content: ${content}`,
          },
        ],
      },
    ],
  };
}
