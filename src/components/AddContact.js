import React, {  useState } from "react";
import { useNavigate } from "react-router";

//This is a class based react component;
// export default class AddContent extends Component {
//   // static propTypes = {
//   //   prop: PropTypes
//   // }
//   state = {
//     name: "",
//     email: "",
//   };
//   addList = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("Fill all the inputs");
//       return;
//     }
//       console.log(this.state);
//       this.props.addContactHandle(this.state);
//       this.setState({name:"", email:""});
//       console.log(this.props);
//       // this.props.history.push("/")

//   };

//   render() {
//     return (
// <div className='flex flex-col items-center'>
// <div className="inline-block mx-10 mx-lg-40 mt-5">
//   <h2 className="text-center text-[2rem]">Add Contact</h2>
//   <form className="form" onSubmit={this.addList}>
//     <div className="pb-5">
//       <label className="text-[1.4rem]">Name: </label>
//       <br />
//       <input
//         className="mt-1 border-[1px] rounded p-1 w-[360px]"
//         type="text"
//         placeholder="Full Name"
//         id="name"
//         value={this.state.name}
//         onChange={(e) => this.setState({ name: e.target.value })}
//       />
//     </div>
//     <div>
//       <label className="text-[1.4rem]">Email: </label>
//       <br />
//       <input
//         className="mt-1 border-[1px] rounded p-1 w-[360px]"
//         type="email"
//         placeholder="example@gmail.com"
//         id="email"
//         value={this.state.email}
//         onChange={(e) => this.setState({ email: e.target.value })}
//       />
//     </div>
//     <button
//       type="submit"
//       className="button bg-indigo-500 rounded px-4 py-1 my-2 text-white text-[1.2rem] border-[2px] border-white hover:bg-indigo-700 hover:border-slate-400"
//     >
//       Add
//     </button>
//   </form>
//   <Link to="/">
//     <button
//       type="button"
//       className="bg-blue-700 rounded px-4 py-3 font-bold text-white"
//     >
//       Contact List
//     </button>
//   </Link>
// </div>
// </div>
//     );
//   }
// };



const AddContact = (props) => {
  //This is function based component
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate =useNavigate();

  const handleChange = (e)=>{
    setContact({...contact, [e.target.name]: e.target.value})
  };

  const addList = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("Fill all the inputs");
      return;
    }
    // console.log(contact);
    props.addContactHandle(contact);
    setContact({ name: "", email: ""});
    // console.log(props+ JSON.stringify(contact));
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="inline-block mx-10 mx-lg-40 mt-5">
        <h2 className="text-center text-[2rem]">Add Contact</h2>
        <form className="form" onSubmit={addList} >
          <div className="pb-5">
            <label className="text-[1.4rem]">Name: </label>
            <br />
              <input
              className="mt-1 border-[1px] rounded p-1 w-[360px]"
              type="name"
              placeholder="Full Name"
              id="name" 
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-[1.4rem]">Email: </label>
            <br />
            <input
              className="mt-1 border-[1px] rounded p-1 w-[360px]"
              type="email"
              placeholder="example@gmail.com"
              id="email" 
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="button bg-indigo-500 rounded px-4 py-1 my-2 text-white text-[1.2rem] border-[2px] border-white hover:bg-indigo-700 hover:border-slate-400"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
