export type ProjektSlide =
  | { type: "image"; src: string }
  // videoId accepts any YouTube URL format (watch/embed/youtu.be/shorts)
  // or a bare 11-char video ID — parsed via src/utils/youtube.ts.
  | { type: "video"; videoId: string };

export type ProjektItem = {
  id: string;
  title: string;
  short: string;
  content: string;
  image: string;
  gallery?: ProjektSlide[];
};
