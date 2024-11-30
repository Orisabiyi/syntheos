const apiKey = import.meta.env.VITE_API_KEY;
export const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

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
