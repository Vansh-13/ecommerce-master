import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const adminData = createAsyncThunk("/admin/data", async (formdata) => {
//   try {
//     console.log("ye admin ka data hai and send ",formdata);
    
//     const response = await axios.post(
//       "http://localhost:4000/api/adminData",
//       formdata,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     return error.response.data;
//   }
// });


export const productsCreate = createAsyncThunk(
  "/admin/data",
  async(values)=>{
    console.log("ye values hai->",values);
    
    try {
      const response2 = await axios.post('http://localhost:4001/api/adminData', values, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // const {name} = values;
      console.log("ye slice name hai: ",values.image.name);
      
      console.log(response.data);
      
      return response2.data;
    } catch (error) {
        console.log("kya hua");
        
      console.log(error);
    }
  }
)

const adminDataslice = createSlice({
  name: "adminData",
  initialState: {
    adminData: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsCreate.pending, (state, action) => {
         state.status = "loading";
      })
      .addCase(productsCreate.fulfilled,(state,action)=>{
        state.status = "success";
        state.adminData = action.payload;
      })
      .addCase(productsCreate.rejected,(state,action)=>{
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default adminDataslice.reducer;