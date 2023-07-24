import React, {useState} from 'react'
import { Button,    } from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit}>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="5px"
            mt="10px"
        >
      <TextField
        label="What is the task today?"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Add Task
      </Button>
        </Box>
    </form>
  )
}