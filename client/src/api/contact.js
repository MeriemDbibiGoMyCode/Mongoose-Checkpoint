import axios from 'axios'


 export const fetchContacts =async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user`);
    return data 
}

export const postContact = async(values)=>{
    const addingContact = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/user`,{...values})

}


export   const deletContact=async(id)=>{
    
    const deletCont = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`)

}



export const updateCont = async(id,value)=>{
    const updatedContact = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`,value)
    
}

export const GetUniqueContact = async (id,value)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`,value)
    return data
}