import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <>
      <Box
        bgcolor="#000"
        width="300px"
        color="#fff"
        margin="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt="30px"
        p="10px"
        borderRadius="100px"
      >

        <Box
           onClick={() => toggleComplete(task.id)}
        >
          {
            task.completed ? (
              <Box
                color="#f6f6f6" 
                onClick={() => 
                toggleComplete(task.id)}
                textDecoration="lineThrow"
                alignItems="center"
                display="flex"
                
                >
                  <Typography>
                    {task.task}
                  </Typography>
                  <CheckBoxIcon/>
              </Box>
            ) : (
              <Box>{task.task}</Box>
            )
          }
        </Box>
        <Box
                display="flex"
                alignItems="center"
                gap="10px"
        >
          <DeleteIcon onClick={() => deleteTodo(task.id)} />
          <CreateIcon onClick={() => editTodo(task.id)} />
  
 
        </Box>

          
      </Box>


    </>
  )
}