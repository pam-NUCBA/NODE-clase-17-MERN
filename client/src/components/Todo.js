import React, { useContext } from "react";
import { Card, CardBody, CardFooter, CardText, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faCheckCircle,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import todoContext from "../context/todoContext/todoContext";
import './Todo.css'
import Swal from 'sweetalert2'

const Todo = ({ todo }) => {
  const { deleteTodo, completeTodo } = useContext(todoContext);
  const { title, complete, date, _id } = todo;

  //sweet alert:
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const deleteOne = () => {
    deleteTodo(_id);
  };

  //*la funcion normal. 
  // const changeComplete = () => {
  //   console.log(_id, complete);
  //   completeTodo(_id);
  // };

  //*la funcion con swal:
  const changeComplete = () => {
    swalWithBootstrapButtons.fire({
      title: 'Mark as completed?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        completeTodo(_id);
        swalWithBootstrapButtons.fire(
          'Completed!',
          'yay.',
        )
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled'
        )
      }
    })
    // console.log(_id, complete);
    // completeTodo(_id);
  };

  return (
    <>
      <Col xs="3">
        <Card className="card">
          <FontAwesomeIcon
            icon={faBan}
            className="text-danger position-absolute top-0 end-0 m-1 fs-3 delete-icon"
            onClick={deleteOne}
          />
          <CardBody>
            <CardText tag="h3" className="p-2">{title}</CardText>
            <span className="icon p-2">
              <FontAwesomeIcon
                icon={complete === false ? faTimesCircle : faCheckCircle}
                className={complete === false ? "text-danger" : "text-primary"}
                onClick={changeComplete}
              />{" "}
              {complete === false ? "incompleta" : "completada"}
            </span>
            <br />

            <CardFooter className="text-muted pt-3">{date.substring(10, -9)}</CardFooter>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Todo;
