import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, } from "@mui/material";

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (value) {
        // add todo
        addTodo(value);
        // clear form after submission
        setValue('');
          }  
      }


    return (
        <>
    <form onSubmit={handleSubmit}>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="5px"
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
        </>
    )
}