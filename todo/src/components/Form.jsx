// src/components/Form.jsx

function Form() {
    const handleSubmit = (event) => {
      event.preventDefault();   // prevents the form from submitting and reloading the entire app
      // reset the form
      event.target.reset();  // reset the form
    };
    return (
      <form className="form" >
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Write your next task"
          />
        </label>
        <button>
          <span className="visually-hidden">Submit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </form>
    );
  }
export default Form;