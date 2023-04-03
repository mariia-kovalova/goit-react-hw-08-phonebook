export const styles = {
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '50%',
  },
  backdrop: { color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 },
};
