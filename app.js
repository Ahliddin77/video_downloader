import express from "express";
import {
  downloadVideo,
  getVideoInfromation,
  youtubeVideoFormats,
  downloadInstagramVideo,
  downloadTikTokVideo,
} from "./downloader.js";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.post("/video", async (req, res) => {
  const body = req.body;
  const video_url = body?.url;
  if (!video_url) {
    return res.status(400).send("Please send video url!");
  }
  const videoInfo = await getVideoInfromation(video_url);
  res.send({
    title: videoInfo.title,
    thumbnail: videoInfo.thumbnail,
    uploader: videoInfo.uploader,
    duration: videoInfo.duration,
    availableResolutions: youtubeVideoFormats
      .map((format) => {
        const info = videoInfo.formats.find(
          (f) => f.resolution === format.resolution
        );

        return {
          ...format,
          url: info?.url,
        };
      })
      .filter((t) => t.url)
      .reverse(),
  });
});

app.post("/download", async (req, res) => {
  const video_url = req.body.video_url;
  await downloadVideo(video_url);
  const videoPath = path.resolve("video.mp4");
  res.download(videoPath, "video.mp4", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("File not found");
    }
  });
});

app.post("/download-tiktok", async (req, res) => {
  const video_url = req.body.video_url;
  if (!video_url) {
    return res.status(400).send("Please send TikTok video url!");
  }
  await downloadTikTokVideo(video_url);
  const videoPath = path.resolve("tiktok_video.mp4");
  res.download(videoPath, "tiktok_video.mp4", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("File not found");
    }
  });
});

// Instagram video download
app.post("/download-instagram", async (req, res) => {
  const video_url = req.body.video_url;
  if (!video_url) {
    return res.status(400).send("Please send Instagram video url!");
  }
  await downloadInstagramVideo(video_url);
  const videoPath = path.resolve("instagram_video.mp4");
  res.download(videoPath, "instagram_video.mp4", (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("File not found");
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
