import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const MusicPlayerWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 9999; /* Defina um z-index alto para ficar sempre por cima */
`;

const MinimizedPlayer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 10px;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999;
  cursor: pointer;
`;

const MinimizedIcon = styled.div`
  font-size: 24px;
`;

const ControlButton = styled.button`
  background-color: #007acc;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px;
`;

const SongInfo = styled.div`
  margin-top: 20px;
  color: #fff;
`;

const MinimizeButton = styled.button`
  background-color: #007acc;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const MusicPlayer = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [playing, setPlaying] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

const handleAddMusic = () => {
  if (youtubeUrl) {
    // Adicione a lógica para extrair o videoId da URL do YouTube (exemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ)
    // Você pode usar expressões regulares ou qualquer outra técnica para obter o videoId.
    const videoId = youtubeUrl.split('v=')[1];
     
    if (videoId) {
      // Construa o URL do vídeo completo
      const fullVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      // Defina o URL no estado
      setYoutubeUrl(fullVideoUrl);
      // Inicie a reprodução
      setPlaying(true);
    } else {
      console.error('URL do YouTube inválida. Certifique-se de que ela tenha o formato correto.');
    }
  } else {
    console.error('Por favor, insira uma URL do YouTube.');
  }
};
  

  const content = isMinimized ? (
    <MinimizedPlayer onClick={toggleMinimize}>
      <MinimizedIcon>▶️</MinimizedIcon>
    </MinimizedPlayer>
  ) : (
    <MusicPlayerWrapper>
      <div className="player-controls">
        <ControlButton>⏮️</ControlButton>
        <ControlButton onClick={() => setPlaying(!playing)}>
          {playing ? '⏸️' : '▶️'}
        </ControlButton>
        <ControlButton>⏭️</ControlButton>
      </div>
      <SongInfo>
        <h3>Song Title</h3>
      </SongInfo>
      <input
        type="text"
        placeholder="URL do YouTube"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
      />s
      <button onClick={handleAddMusic}>Adicionar Música</button>
      <ReactPlayer
        url={youtubeUrl} // Use a variável youtubeUrl aqui
        playing={playing}
        controls
        width="100%"
      />
      <MinimizeButton onClick={toggleMinimize}>Minimizar</MinimizeButton>
    </MusicPlayerWrapper>
  );

  return <Draggable>{content}</Draggable>;
};

export default MusicPlayer;
