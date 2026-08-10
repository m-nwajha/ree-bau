export function getYouTubeVideoId(urlOrId: string): string {
  const match = urlOrId.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : urlOrId;
}
