const VIDEOS: Record<string, string> = {
  "1": "assets/exercise_videos/1-video-636952505812194154.mp4",
  "2": "assets/exercise_videos/2-video-636952506081474357.mp4",
};

export function exerciseVideoPath(id: string): string | undefined {
  return VIDEOS[id];
}
