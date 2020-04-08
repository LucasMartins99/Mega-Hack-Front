import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';

import Mensagem from '../Mensagem/index';
import Ajuda from '../Ajuda/index';

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  btn: {
    marginLeft: 30,
    marginTop: 7,
  },
});
function ModalStar(props) {
  const { classes, ajuda, importante, nivel, mensagem, link } = props;
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      disableEnforceFocus
      open={open}
      onClose={handleClose}
      closeAfterTransition
      disableBackdropClick
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        {!ajuda ? (
          <Mensagem importante={importante} nivel={nivel} />
        ) : (
          <Ajuda mensagem={mensagem} link={link} />
        )}
      </Fade>
    </Modal>
  );
}
ModalStar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ModalStar);
