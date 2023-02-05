import React, { useReducer } from "react";
const Parent = () => {
  const initialState = 0;
  // when got action then show new state
  const reducer =(state, action)=>{
    if(action.type==="DECREMENT"){
      return state - action.payload.count;
    }else if(action.type==="INCREMENT"){
      return state + action.payload.count;
    }
  }
  // before action show initialState
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="grid justify-items-center ">
        <h2 className="text-2xl my-6">Parent {state} </h2>
          <div>
            <button
              className="btn btn-warning mr-2"
              onClick={()=> dispatch({type:"DECREMENT", payload:{count:5}})}
            >Decrement</button>
            <button
              className="btn btn-error"
              onClick={()=> dispatch({type:"INCREMENT", payload:{count:5}})}
            > Increase</button>
          </div>
    </div>
  );
};
export default Parent;

// import React, { useReducer } from "react";
// const Parent = () => {
//   const initialState = 0;
//   const reducer = (state, action) =>{
//     if(action.type=== "INCREMENT"){
//       return state + action.payload.count;
//     }else if(action.type==="DECREMENT"){
//       return state - action.payload.count;
//     }
//   }
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//               onClick={()=>dispatch({type:"DECREMENT", payload:{count:5}})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=>dispatch({type:"DECREMENT", payload:{count:5}})}
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;


// import React, { useReducer } from "react";
// const Parent = () => {
//   const initialState=0;
//   const reducer=(state, action)=>{
//     if(action.type==="INCREMENT"){
//       return state+action.payload.count;
//     }else if(action.type==="DECREMENT"){
//       return state-action.payload.count;
//     }
//   }
// const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//              onClick={()=> dispatch({type:"DECREMENT", payload:{count:5}})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=> dispatch({type:"DECREMENT", payload:{count:5}})}
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;

// THIS IS ANOTHER PRACTICE
// import React, { useReducer } from "react";

// const Parent = () => {
// const initialState = 0;
// const reducer = (state, action) =>{
//   if(action.type==="INCREMENT"){
//     return state + 1;
//   }else if(action.type==="DECREMENT"){
//     return state - 1;
//   }
// }
// const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//               onClick={()=> dispatch({type:"DECREMENT"})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=>dispatch({type:"INCREMENT"})}
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;

// import React,{ useReducer } from "react";

// const Parent = () => {
// const initialState=0;
// const reducer =(state, action)=>{
//     if(action.type==="INCREMENT"){
//         return state+1;
//     }else if(action.type==="DECREMENT"){
//         return state-1;
//     }
// };
// const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//               onClick={()=> dispatch({type:"DECREMENT"})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=> dispatch({type:"INCREMENT"})}
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;

// import React, { useReducer } from "react";

// const Parent = () => {
// const initialState = 0;
// const reducer = (state, action) =>{
//     if(action.type==="DECREMENT"){
//         return state-1;
//     }else if(action.type=== "INCREMENT"){
//         return state+1;
//     }
// }
// const [state, dispatch]= useReducer(reducer, initialState);

//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//               onClick={()=>dispatch({type:"DECREMENT"})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=> dispatch({type:"INCREMENT"})}
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;

// import React, { useReducer } from "react";

// const Parent = () => {

//     const initialState=0;

//     const reducer = (state, action) =>{

//         if(action.type==="INCREMENT"){
//             return state + 1;
//         }else if(action.type==="DECREMENT"){
//             return state - 1;
//         }
//     };

//     const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//               onClick={()=> dispatch({type:"DECREMENT"})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=> dispatch({type:"INCREMENT"}) }
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;

// practice One step

// import React, { useReducer } from "react";
// const Parent = () => {

//     const initialState = 0;

//     const reducer = (state, action)=>{
//         if(action.type=== "INCREMENT"){
//             return state + 1;
//         }else if(action.type==="DECREMENT"){
//             return state-1;
//         }
//     };

//     const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div className="grid justify-items-center ">
//         <h2 className="text-2xl my-6">Parent {state} </h2>
//           <div>
//             <button
//               className="btn btn-warning mr-2"
//               onClick={()=>dispatch({type:"DECREMENT"})}
//             >Decrement</button>
//             <button
//               className="btn btn-error"
//               onClick={()=>dispatch({type:"INCREMENT"})}
//             > Increase</button>
//           </div>
//     </div>
//   );
// };
// export default Parent;
