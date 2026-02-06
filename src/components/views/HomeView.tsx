// ========================================================================
// HOME VIEW
// ========================================================================
// Landing page for the application.
// ========================================================================

import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Stack,
} from '@mui/material';
import {
  Login as LoginIcon,
  Dashboard as DashboardIcon,
  Rocket as RocketIcon,
} from '@mui/icons-material';
import { useClientAuth } from '../../services/datablokApi';

export default function HomeView() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useClientAuth();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <RocketIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
          Welcome to My App
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A clean React + MUI template with authentication ready to go.
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        {isAuthenticated ? (
          <Stack spacing={3} alignItems="center">
            <Typography variant="h5">
              Hello, {user?.first_name || 'User'}! 👋
            </Typography>
            <Typography color="text.secondary">
              You're logged in and ready to explore.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<DashboardIcon />}
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
            </Button>
          </Stack>
        ) : (
          <Stack spacing={3} alignItems="center">
            <Typography variant="h5">
              Get Started
            </Typography>
            <Typography color="text.secondary">
              Sign in to access all features of the application.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<LoginIcon />}
              onClick={() => navigate('/auth')}
            >
              Sign In / Register
            </Button>
          </Stack>
        )}
      </Paper>

      {/* Feature highlights */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" textAlign="center" fontWeight={600} mb={4}>
          Built With
        </Typography>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={3} 
          justifyContent="center"
        >
          {[
            { title: 'React 19', desc: 'Latest React with modern hooks' },
            { title: 'MUI v7', desc: 'Beautiful Material Design components' },
            { title: 'TypeScript', desc: 'Type-safe development' },
            { title: 'Vite', desc: 'Lightning fast build tool' },
          ].map((feature) => (
            <Paper key={feature.title} sx={{ p: 3, flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.desc}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
