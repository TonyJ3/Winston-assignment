import {
  Container,
  Typography,
  Box,
  Avatar,
  Paper,
  Divider,
  Stack,
} from "@mui/material";
import profilePic from "../images/download.png"

function ProfilePage() {
    return(
        <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box textAlign="center" mb={3}>
          <Avatar
            alt="John Doe"
            src={profilePic}
            sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
          />
          <Typography variant="h4" component="h1" color="primary">John Doe</Typography>
          <Typography variant="subtitle1" color="text.secondary">johndoe@example.com</Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Stack spacing={2}>
          <Typography variant="body1"><strong>Location:</strong> Amsterdam, Netherlands</Typography>
          <Typography variant="body1"><strong>Occupation:</strong> Hotel manager</Typography>
          <Typography variant="body1"><strong>Bio:</strong> I like pizza</Typography>
          <Typography variant="body1"><strong>Joined:</strong> January 2024</Typography>
        </Stack>
      </Paper>
    </Container>
    );
}

export default ProfilePage;