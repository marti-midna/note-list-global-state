import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { completed, removeTodo, favoriteTodo } from './Store/actions';

export default ({ note }) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeTodo(note.id));
  };

  const done = () => {
    dispatch(completed(note.id));
  };

  const favorite = () => {
    dispatch(favoriteTodo(note.id));
    console.log('è true')
  };

  return (
    <ListGroup className="d-flex justify-content-between align-content-center flex-row">
      <ListGroup.Item
        variant={note.done ? 'success' : '' || note.favorite ? 'info' : ''}
        className="d-flex p-2 flex-grow-1 align-items-center justify-content-center "
        as="li"
      >
        {note.text}
      </ListGroup.Item>
      <ListGroup className="d-flex p-2">
        <Button className="mb-2" variant="danger" onClick={remove}>
          Remove
        </Button>

        <Button className="mb-2" variant="primary" onClick={done}>
          Done
        </Button>

        <Button className="mb-2" variant="info" onClick={favorite}>
          Favorite
        </Button>
      </ListGroup>
    </ListGroup>
  );
};
