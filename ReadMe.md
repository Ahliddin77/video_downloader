# Video Downloader

## Overview

This project enables users to download videos effortlessly from prevalent platforms like YouTube. It fetches the best available video and audio formats separately and merges them into a single high-quality output file using `ffmpeg`.

## Features

- Fetches video and audio separately to ensure the best quality.
- Supports multiple resolutions (4320p, 2160p, 1080p, etc.).
- Merges video and audio seamlessly using `ffmpeg`.
- Simple and efficient execution with `youtube-dl-exec`.

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [ffmpeg](https://ffmpeg.org/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-downloader.git
   cd video-downloader
   ```
2. Install dependencies:
   ```bash
   npm install youtube-dl-exec fluent-ffmpeg
   ```
3. Ensure `ffmpeg` is available globally. You can check by running:
   ```bash
   ffmpeg -version
   ```
   If it's not installed, refer to the [ffmpeg installation guide](https://ffmpeg.org/download.html).

## Usage

1. Open `app.js` and modify the video URL:
   ```javascript
   youtubedl("https://www.youtube.com/watch?v=GLjPyo3ThV8", {
     dumpSingleJson: true,
   });
   ```
2. Run the script:
   ```bash
   node app.js
   ```
3. The merged video will be saved in the current directory with the best available resolution.

## Known Issues

- Some videos may not be downloadable due to YouTube restrictions.
- Ensure `ffmpeg` is installed and accessible in the system path.

## Contributing

Feel free to fork this repository, create a feature branch, and submit a pull request!

## License

This project is licensed under the MIT License.
