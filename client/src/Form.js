import React from "react";
import { createLogEntry } from "./Api";
import Show from "./Show";
export default function Form() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [state, setState] = React.useState({
    name: "",
    author: "",
    description: ""
  });

  const changeHandler = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = async e => {
    //e.preventDefault();
    setLoading(true);
    try {
      await createLogEntry({
        name: state.name,
        author: state.author,
        description: state.description
      });
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    setState({ name: "", author: "", description: "" });
  };

  return (
    <React.Fragment>
      <div className="app">
        <div className="row">
          <form className="col s12" onSubmit={handleSubmit}>
            {error ? <p className="error">{error}</p> : null}
            <div className="row">
              <div className="input-field col s3">
                <input
                  id="name"
                  type="text"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.name}
                  required
                />
                <label htmlFor="input_text">Topic</label>
              </div>
              <div className="input-field col s3">
                <input
                  id="author"
                  type="text"
                  data-length="4"
                  onChange={changeHandler}
                  value={state.author}
                  required
                />
                <label htmlFor="input_text">Author</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <textarea
                  id="description"
                  className="materialize-textarea"
                  data-length="120"
                  onChange={changeHandler}
                  value={state.description}
                  required
                ></textarea>
                <label htmlFor="textarea2">Description</label>
              </div>
            </div>
            <button
              className="btn waves-effect blue lighten-1"
              type="submit"
              name="action"
              disabled={loading}
            >
              {loading ? "Loading..." : "Create Entry"}
            </button>
          </form>
        </div>
      </div>
      <Show />
    </React.Fragment>
  );
}
