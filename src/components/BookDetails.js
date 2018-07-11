import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Chip from "@material-ui/core/Chip";
import ReactStars from "react-stars";
import PropTypes from "prop-types";

class BookDetails extends Component {
  static propTypes = {
    textButton: PropTypes.string,
    detailsTitle: PropTypes.string,
    detailsContent: PropTypes.string,
    detailsCategories: PropTypes.array,
    detailsRating: PropTypes.number
  };
  state = {
    open: false
  };

  Transition(props) {
    return <Slide direction="up" {...props} />;
  }

  render() {
    const handleClose = () => {
      this.setState({ open: false });
    };

    const handleOpen = () => {
      this.setState({ open: true });
    };
    const {
      textButton,
      detailsTitle,
      detailsContent,
      detailsCategories
    } = this.props;
    return (
      <div>
        <Dialog
          open={this.state.open}
          TransitionComponent={this.Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {detailsTitle}

            <br />

            {this.props.detailsRating >= 0 && (
              <ReactStars
                count={5}
                edit={false}
                size={24}
                value={this.props.detailsRating}
                color2={"#ffd700"}
              />
            )}

            {detailsCategories &&
              detailsCategories.length &&
              detailsCategories.map((category, index) => {
                return (
                  <Chip
                    key={index}
                    className="book-category"
                    label={category}
                  />
                );
              })}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {detailsContent}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              ok
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          disabled={!detailsTitle || !detailsContent}
          color="primary"
          variant="contained"
          onClick={() => {
            handleOpen();
          }}
        >
          {textButton}
        </Button>
      </div>
    );
  }
}

export default BookDetails;
