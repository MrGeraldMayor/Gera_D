'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { 
  Card, CardContent, CardMedia, Typography, Box, 
  Button, Chip, Divider, Container, CircularProgress 
} from '@mui/material';

// Icons
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayArrow';
import CloudIcon from '@mui/icons-material/Cloud';
import RadioIcon from '@mui/icons-material/Radio';

const Track = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // Fix for Hydration Error

  useEffect(() => {
    setMounted(true);
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      setLoading(true);
      // Ensure your .env.local uses NEXT_PUBLIC_SUPABASE_ANON_KEY
      const { data, error } = await supabase
        .from('tracks')
        .select('*');

      if (error) throw error;
      setSongs(data || []);
    } catch (error) {
      console.error('Error fetching songs:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // 1. Prevent Hydration Mismatch: Don't render until client-side mount
  if (!mounted) return null;

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
        {songs.map((song) => (
          <Card key={song.id} sx={{ maxWidth: 380, borderRadius: 4, boxShadow: 6 }}>
            <CardMedia
              component="img"
              height="260"
              image={song.cover_image}
              alt={song.title}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontWeight="bold">{song.title}</Typography>
              <Typography variant="subtitle1" color="text.secondary">{song.artist}</Typography>
              <Chip label={song.genre} size="small" sx={{ mt: 1, mb: 2 }} color="primary" variant="outlined" />
              
              <Divider sx={{ my: 2 }}>Listen On</Divider>

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                <MusicLinkButton label="Spotify" icon={<LibraryMusicIcon />} url={song.spotify_url} color="#1DB954" />
                <MusicLinkButton label="Apple" icon={<AppleIcon />} url={song.apple_url} color="#FC3C44" />
                <MusicLinkButton label="YouTube" icon={<YouTubeIcon />} url={song.yt_url} color="#FF0000" />
                <MusicLinkButton label="SoundCloud" icon={<CloudIcon />} url={song.soundcloud_url} color="#FF5500" />
                <MusicLinkButton label="Amazon" icon={<PlayCircleOutlineIcon />} url={song.amazon_url} color="#00A8E1" />
                <MusicLinkButton label="Tidal" icon={<GraphicEqIcon />} url={song.tidal_url} color="#000000" />
                <MusicLinkButton label="Pandora" icon={<CloudQueueIcon />} url={song.pandora_url} color="#00A0EE" />
                <MusicLinkButton label="Audiomack" icon={<LibraryMusicIcon />} url={song.audiomack_url} color="#FFA200" />
                <MusicLinkButton label="Boomplay" icon={<PlayCircleOutlineIcon />} url={song.boomplay_url} color="#000000" />
                <MusicLinkButton label="BandLab" icon={<GraphicEqIcon />} url={song.bandlab_url} color="#EE2C3C" />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

const MusicLinkButton = ({ label, icon, url, color }) => {
  if (!url || url === "#") return null;

  return (
    <Button
      variant="contained"
      size="small"
      startIcon={icon}
      href={url}
      target="_blank"
      sx={{
        backgroundColor: color,
        fontSize: '0.65rem',
        textTransform: 'none',
        '&:hover': { backgroundColor: color, opacity: 0.85, transform: 'scale(1.02)' },
        transition: '0.2s'
      }}
    >
      {label}
    </Button>
  );
};

export default Track;