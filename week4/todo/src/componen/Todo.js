import React, {useState, useEffect} from 'react'
import Header from './Header'
import axios from 'axios'
import './Todo.css'

export default function Todo() {
    
    const [updateClick, setUpdateClick] = useState(false)
    const [data, setData] = useState([]);
    const [kondisi, setKondisi] = useState([])
    const [input, setInput] = useState("");
    const [isSelected, setSelection] = useState(false);

    const handleClick =() =>{
        
        let object = {
            title: input
        }
        axios.post(`https://btm-rn.herokuapp.com/api/v1/todo`,  object )
        .then(res => {
            console.log(res);
            get()
          })
    }

    const get = async() =>{
        const result = await axios(
            'https://btm-rn.herokuapp.com/api/v1/todo',
          );
       
          setData(result.data.results);
    }

    useEffect(async () => {
        get()
      }, []);

      const update = (i) =>{
          setUpdateClick(true)
          changeTodo(i)
      }
      const handleCheck = (e) =>{
        var checked = e.target.checked;
        console.log(checked)
        setSelection(checked)
      }

      const changeTodo = (val, i) => {
          console.log('state',kondisi[i])
        if(!updateClick) {
            return <p className="isi" key={i}>{val.title}</p>
  
        } else {
            return <div><input type="text" name="input" 
            onChange={(e)=> setInput(e.target.value)}
            style={{
            display: "flex",
            flex: 1,
            height: 20 ,
            alignItems: "stretch",       
            }}           
            placeholder = {val.title}
            />   
            <input  type="submit" value="Save" onClick={() =>UpdateTodo(i)}/>
            </div>  
        }
      }

      const UpdateTodo = (index) => {
        let inputText = input
        let DataArray = data
        
        if(inputText.length !== 0){
            DataArray[index].title = inputText
        setData([...DataArray])    
        }
        setUpdateClick(false)
      }

      const DeleteTodo = (index) => {
       
        let DataArray = data
        console.log(DataArray)
        DataArray.splice(index, 1);
        setData([...DataArray])
      }

    //   const DeleteTodo1 = event => {
    //     event.preventDefault();
    
    //     axios.delete(`https://btm-rn.herokuapp.com/api/v1/todo/${this.state.id}`)
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //       })
    //   }


    return (

        <div className='content'>
            <Header />
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            }}>
                <input type="text" name="input" 
                onChange={(e)=> setInput(e.target.value)}
                style={{
                display: "flex",
                flex: 1,
                height: 20 ,
                alignItems: "stretch",  
                borderColor: "black",
                borderStyle: "double",  
                padding: 20,   
                }}           
                />         
                <input  type="submit" value="Add" onClick={() =>handleClick()} className="buttontodo"/>  
            </div>
            <p></p>
            {   
                data.map((val,i)=>                
                <div style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'space-between',
                }}>
                    {
                        changeTodo(val, i)
                    }                 
                    <div>
                        {/* <button style={{
                        backgroundColor: "yellow",
                        }}
                        index={i}
                        onClick={()=> UpdateTodo(i)}
                        >   
                        Update
                        </button> */}
                        
                        <button className='buttontodo'
                        index={i}
                        onClick={()=> update(i)}
                        >   
                        Update
                        </button>

                        <button className='buttontodo'
                        index={i}
                        onClick={() => DeleteTodo(i)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
             )}    
            



      
        </div>
    )
}


