"use client";

import { useEffect, useRef, useState } from "react";

type Track = {
  title: string;
  artist: string;
  url: string;
};

const DEFAULT_TRACKS: Track[] = [
  {
    title: "Demo Track One",
    artist: "Your Brand Radio",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Demo Track Two",
    artist: "Your Brand Radio",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Demo Track Three",
    artist: "Your Brand Radio",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

type AudioPlayerProps = {
  tracks?: Track[];
};

export function AudioPlayer({ tracks = DEFAULT_TRACKS }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeFrameRef = useRef<number | null>(null);
  const wantedVolumeRef = useRef(0.7);
  const autoplayRef = useRef(false);

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [status, setStatus] = useState("READY");
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const track = tracks[index];

  const cancelFade = () => {
    if (fadeFrameRef.current) cancelAnimationFrame(fadeFrameRef.current);
    fadeFrameRef.current = null;
  };

  const fadeTo = (target: number, ms = 300, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelFade();
    const start = audio.volume;
    const startTime = performance.now();

    const frame = (now: number) => {
      const p = Math.min(1, (now - startTime) / ms);
      audio.volume = start + (target - start) * p;

      if (p < 1) {
        fadeFrameRef.current = requestAnimationFrame(frame);
      } else {
        fadeFrameRef.current = null;
        done?.();
      }
    };

    fadeFrameRef.current = requestAnimationFrame(frame);
  };

  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = 0;
      await audio.play();
      setIsPlaying(true);
      setStatus("PLAYING");
      fadeTo(wantedVolumeRef.current);
    } catch {
      setIsPlaying(false);
      setStatus("TAP PLAY");
    }
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    setStatus("PAUSING");
    fadeTo(0, 250, () => {
      audio.pause();
      audio.volume = wantedVolumeRef.current;
      setIsPlaying(false);
      setStatus("PAUSED");
    });
  };

  const loadTrack = (newIndex: number, shouldPlay = false) => {
    autoplayRef.current = shouldPlay;
    setCurrentTime(0);
    setDuration(0);
    setIndex((newIndex + tracks.length) % tracks.length);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    cancelFade();
    audio.load();

    if (autoplayRef.current) {
      play();
    } else {
      setIsPlaying(false);
      setStatus("READY");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => cancelFade, []);

  const handleSeek = (event: React.MouseEvent<HTMLButtonElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * audio.duration;
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    wantedVolumeRef.current = value;
    setVolume(value);
    const audio = audioRef.current;
    if (audio && !audio.paused) audio.volume = value;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="pdp-audio-player">
      <div className="pdp-audio-top">
        <div className="pdp-audio-cover" aria-hidden="true" />

        <div className="pdp-audio-meta">
          <div className="pdp-audio-label">Now playing</div>
          <div className="pdp-audio-title">{track.title}</div>
          <div className="pdp-audio-artist">{track.artist}</div>
        </div>

        <div className="pdp-audio-counter">
          {String(index + 1).padStart(2, "0")} / {String(tracks.length).padStart(2, "0")}
        </div>
      </div>

      <div className="pdp-audio-progress-wrap">
        <button className="pdp-audio-progress" onClick={handleSeek} type="button" aria-label="Seek">
          <span className="pdp-audio-progress-fill" style={{ width: `${progressPercent}%` }} />
        </button>

        <div className="pdp-audio-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="pdp-audio-controls">
        <button
          className="pdp-audio-icon-btn"
          onClick={() => loadTrack(index - 1, isPlaying)}
          type="button"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24">
            <path d="M6 5h2v14H6V5Zm3.5 7L19 5v14l-9.5-7Z" />
          </svg>
        </button>

        <button
          className="pdp-audio-icon-btn pdp-audio-play-btn"
          onClick={() => (isPlaying ? pause() : play())}
          type="button"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24">
              <path d="M6 5h4v14H6V5Zm8 0h4v14h-4V5Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7L8 5Z" />
            </svg>
          )}
        </button>

        <button
          className="pdp-audio-icon-btn"
          onClick={() => loadTrack(index + 1, isPlaying)}
          type="button"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24">
            <path d="M16 5h2v14h-2V5ZM5 5l9.5 7L5 19V5Z" />
          </svg>
        </button>

        <input
          className="pdp-audio-volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
        />

        <button
          className="pdp-audio-playlist-btn"
          onClick={() => setPlaylistOpen((open) => !open)}
          type="button"
        >
          PLAYLIST
        </button>
      </div>

      {playlistOpen ? (
        <div className="pdp-audio-playlist">
          {tracks.map((item, i) => (
            <button
              className={`pdp-audio-track-item${i === index ? " is-active" : ""}`}
              key={item.title}
              onClick={() => loadTrack(i, isPlaying)}
              type="button"
            >
              <span className="pdp-audio-track-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="pdp-audio-track-copy">
                <strong>{item.title}</strong>
                <small>{item.artist}</small>
              </span>
              <span className="pdp-audio-track-play" aria-hidden="true">
                ▶
              </span>
            </button>
          ))}
        </div>
      ) : null}

      <div className="pdp-audio-status">{status}</div>

      <audio
        ref={audioRef}
        src={track.url}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onWaiting={() => setStatus("BUFFERING")}
        onPlaying={() => setStatus("PLAYING")}
        onError={() => setStatus("AUDIO ERROR")}
        onEnded={() => loadTrack(index + 1, true)}
      />
    </div>
  );
}
