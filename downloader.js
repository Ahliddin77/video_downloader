import youtubedl from "youtube-dl-exec";
import fs from "fs";

export async function downloadVideo(video_url) {
  await youtubedl(video_url, {
    output: "video.mp4",
  });
}

export async function downloadTikTokVideo(video_url) {
  await youtubedl(video_url, {
    output: "tiktok_video.mp4",
  });
}

export async function downloadInstagramVideo(video_url) {
  await youtubedl(video_url, {
    output: "instagram_video.mp4",
  });
}

export async function getVideoInfromation(video_url) {
  const info = await youtubedl(video_url, {
    dumpSingleJson: true,
  });
  return {
    title: info.title,
    thumbnail: info.thumbnail,
    uploader: info.uploader || info.channel,
    duration: info.duration,
    formats: info.formats,
  };
}

export const youtubeVideoFormats = [
  { resolution: "1080p" },
  { resolution: "720p" },
  { resolution: "480p" },
  { resolution: "360p" },
];
