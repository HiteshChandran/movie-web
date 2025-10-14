import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import "./App.scss";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.9);
  const [played, setPlayed] = useState(0); // fraction 0 → 1
  const [playedSeconds, setPlayedSeconds] = useState(0); // actual seconds
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const playerRef = useRef(null);

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played); // fraction
      setPlayedSeconds(state.playedSeconds); // seconds
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? "0" + minutes : minutes}:${secs < 10 ? "0" + secs : secs}`;
  };

  const handleTogglePlay = () => setIsPlaying((prev) => !prev);
  const handleToggleMute = () => setIsMuted((prev) => !prev);

  const handleForward = () => {
    if (playerRef.current) {
      const newTime = Math.min(playedSeconds + 10, duration);
      playerRef.current.seekTo(newTime, "seconds");
      setPlayedSeconds(newTime);
      setPlayed(newTime / duration);
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      const newTime = Math.max(playedSeconds - 10, 0);
      playerRef.current.seekTo(newTime, "seconds");
      setPlayedSeconds(newTime);
      setPlayed(newTime / duration);
    }
  };

  const handleSeekMouseDown = () => setSeeking(true);
  const handleSeekChange = (e) => {
    const seekTo = parseFloat(e.target.value);
    setPlayed(seekTo);
    setPlayedSeconds(seekTo * duration);
  };
  const handleSeekMouseUp = (e) => {
    const seekTo = parseFloat(e.target.value);
    setSeeking(false);
    playerRef.current.seekTo(seekTo, "fraction");
  };

  const progressStyle = {
    background: `linear-gradient(to right, #ff0000 ${played * 100}%, #555 ${played * 100}%)`,
  };

  

  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={playerRef}
        src="https://www.youtube.com/watch?v=wwfEy4qSw7s"
        width="100%"
        height="360px"
        playing={isPlaying}
        muted={isMuted}
        volume={volume}
        controls={false}
        onDuration={(d) => setDuration(d)}
        onProgress={handleProgress}
        progressInterval={500} // fires every 0.5s
        />


      <div className="controls-center">
        <button onClick={handleBackward}>⏪</button>
        <button onClick={handleTogglePlay}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={handleForward}>⏩</button>
      </div>

      <div className="timeline-wrapper">
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
          className="timeline"
          style={progressStyle}
        />
        <div className="time-display">
          {formatTime(playedSeconds)} / {formatTime(duration)}
        </div>
      </div>

      <div className="bottom-controls">
        <input
          type="range"
          value={volume}
          min={0}
          max={1}
          step={0.1}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <button onClick={handleToggleMute}>{isMuted ? "🔊 Unmute" : "🔇 Mute"}</button>
      </div>
    </div>
  );
};

export default App;
