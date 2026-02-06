// ========================================================================
// DASHBOARD VIEW
// ========================================================================
// Protected dashboard page - only accessible when authenticated.
// ========================================================================

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Assignment as TaskIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { useClientAuth } from '../../services/datablokApi';

// Example stat card component
interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            {value}
          </Typography>
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: `${color}15`,
            color: color,
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default function DashboardView() {
  const { user } = useClientAuth();

  // Example stats - replace with real data from your API
  const stats = [
    { title: 'Total Tasks', value: 24, icon: <TaskIcon />, color: '#3b82f6' },
    { title: 'Completed', value: 18, icon: <CheckCircleIcon />, color: '#10b981' },
    { title: 'Team Members', value: 5, icon: <PeopleIcon />, color: '#8b5cf6' },
    { title: 'Growth', value: '+12%', icon: <TrendingUpIcon />, color: '#f59e0b' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Welcome back, {user?.first_name || 'User'}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's an overview of your dashboard.
        </Typography>
      </Box>

      {/* Stats Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* Main Content Area */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Recent Activity
            </Typography>
            <Typography color="text.secondary">
              This is a placeholder for your main dashboard content.
              Connect it to your API using the CRUD operations from datablokApi.
            </Typography>
            <Box sx={{ mt: 3, p: 4, bgcolor: 'grey.50', borderRadius: 2, textAlign: 'center' }}>
              <Typography color="text.secondary">
                Your data will appear here
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Actions
            </Typography>
            <Typography color="text.secondary" paragraph>
              Add your quick action buttons and widgets here.
            </Typography>
            <Box sx={{ p: 4, bgcolor: 'primary.50', borderRadius: 2, textAlign: 'center' }}>
              <Typography color="primary.main" fontWeight={500}>
                Customize this sidebar
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
