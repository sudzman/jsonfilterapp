import React,{useState,useEffect} from "react"
import{BrowserRouter as Router,Link} from "react-router-dom"
import"./App.css"
import axios from "axios"

function DataFetching(){
    const [albums,setAlbums]=useState([])
    const[photos,setPhotos]=useState([])
    const[search,setSearch]=useState('')
 

    useEffect(()=>{
          axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=5`)
          axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=5`)
          .then(res=>(
              console.log(res.data),
              setAlbums(res.data),
              setPhotos(res.data)
          
          ))
          

        },[])
        

    
    /*useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=5`)
        
      .then(res=>{console.log(res)
      setPhotos(res.data)
  
      }
      )
      .catch(err=>{
          console.log(err)
      })
  },[])*/
  const mystyle = {
    padding: "10px",
    fontFamily: "Arial",
    height:"30px",
    width:"30px"

  };

  const inputStyle={
    padding: "10px",
    fontFamily: "Arial",
    height:"10px",
    width:"80%",
    margin:"50px"

  };
 
  const myAlbums=albums.filter(album=>{
      return album.title.toLowerCase().includes(search.toLowerCase())
  })
    return(
       
        <Router>
            <div>
               
                
        <input  style={inputStyle}  type="text" placeholder="enter title" onChange={e=>setSearch(e.target.value)} />
        
              {/*
                   posts.map(post=>(
                       <li key={post.id}><Link to="/{post.photo}">{post.title}</Link></li>
                   ))
                   */}
                   <div className="container">
                       
                   { 
                   myAlbums.map(album=>(
                    

                    <>
                    <div >
                        <img  style={mystyle} src={album.url}></img>
                    </div>
                  <li key={album.id}>{album.title}
                  <br></br>
                  <Link  to={`/${album.url}`} target="_blank">{album.url}</Link>
                  </li>
                  </>
                       )) 
                   }
                    
      
            
                   
                   
                       
                   </div>

                   
                  
            
            </div>
            </Router>
            )

}

export default DataFetching;