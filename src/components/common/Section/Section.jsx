import { Box, Container, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Box component="section" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Container>
        {title && (
          <Typography component="h2" variant="h2">
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
