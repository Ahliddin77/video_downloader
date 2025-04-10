# Video Downloader

## Overview

This project enables users to download videos effortlessly from popular platforms like **YouTube**, **TikTok**, and **Instagram**. It uses `youtube-dl-exec` to fetch and download videos in the best available quality.

## Features

- **YouTube Support**: Fetch video information and download videos in multiple resolutions.
- **TikTok Support**: Download TikTok videos directly.
- **Instagram Support**: Download Instagram videos directly.
- Simple and efficient execution with `youtube-dl-exec`.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [ffmpeg](https://ffmpeg.org/) (optional, for advanced video processing)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/video-downloader.git
   cd video-downloader
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Ensure `ffmpeg` is available globally (optional). You can check by running:
   ```bash
   ffmpeg -version
   ```
   If it's not installed, refer to the [ffmpeg installation guide](https://ffmpeg.org/download.html).

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Use the following endpoints to download videos:

   - **YouTube Video Information**:

     - Endpoint: `POST /video`
     - Body:
       ```json
       {
         "url": "https://www.youtube.com/watch?v=example"
       }
       ```
     - Response: Video metadata including title, thumbnail, uploader, and available resolutions.

   - **Download YouTube Video**:

     - Endpoint: `POST /download`
     - Body:
       ```json
       {
         "video_url": "https://www.youtube.com/watch?v=example"
       }
       ```
     - The video will be saved as `video.mp4`.

   - **Download TikTok Video**:

     - Endpoint: `POST /download-tiktok`
     - Body:
       ```json
       {
         "video_url": "https://www.tiktok.com/@user/video/example"
       }
       ```
     - The video will be saved as `tiktok_video.mp4`.

   - **Download Instagram Video**:
     - Endpoint: `POST /download-instagram`
     - Body:
       ```json
       {
         "video_url": "https://www.instagram.com/p/example"
       }
       ```
     - The video will be saved as `instagram_video.mp4`.

## Known Issues

- Some videos may not be downloadable due to platform restrictions.
- Ensure `youtube-dl` or `yt-dlp` is up to date to avoid compatibility issues:
  ```bash
  npx youtube-dl --update
  ```

## Contributing

Feel free to fork this repository, create a feature branch, and submit a pull request!

## License

This project is licensed under the MIT License.
