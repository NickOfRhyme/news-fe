import React from "react";

function ErrorPage(props) {
  const msg = props.err !== undefined ? props.err.response.data : "Not found";
  const status = props.err !== undefined ? props.err.response.status : "404";
  return (
    <main>
      <h1>Whoops!</h1>
      <h2>Status code {status}</h2>
      <h3>{msg}</h3>
    </main>
  );
}

export default ErrorPage;
