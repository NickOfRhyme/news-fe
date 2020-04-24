import React from "react";
import PropTypes from "prop-types";

NewTopicPage.propTypes = {
  topic: PropTypes.string
};

function NewTopicPage({ topic }) {
  return (
    <div>
      <p>The topic '{topic}' does not exist. Why not create it?</p>
    </div>
  );
}

export default NewTopicPage;
