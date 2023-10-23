import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ContactListItem = ({ contact, handleDelete }) => {
  return (
    <ListItem sx={{ border: '1px solid #00000099', borderRadius: 3 }}>
      <ListItemText primary={`${contact.name}: ${contact.number}`} />
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </ListItem>
  );
};
