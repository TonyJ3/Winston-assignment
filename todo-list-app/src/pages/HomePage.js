import { Container, Typography, Box } from "@mui/material";

function HomePage() {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h3" component="h1" gutterBottom color="primary">Home</Typography>
            </Box>
            <Typography variant="h5" component="h2" gutterBottom>Description</Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                faucibus ex sapien, vitae pellentesque sem placerat. In id cursus mi,
                pretium tellus. Duis convallis tempus leo eu aenean sed diam urna
                tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl, malesuada lacinia integer nunc posuere. Ut
                hendrerit semper vel, class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
            </Typography>
        </Container>
    );
}

export default HomePage;