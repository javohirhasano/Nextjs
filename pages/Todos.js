import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow, setTodos } from '../redux/action';
import { useEffect } from 'react';

const TodosWrapper = styled.div`
display:flex;

background-color: rgb(0, 183, 255,0.9);
@keyframes content{
    0%{
      background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxovw-_FLIjLEFtYvXRuDabsU6WhdJukMQXg&usqp=CAU);
    
    }
    10%{
      background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNJy6cxXTXWUqlSwa_o1qiN4wQT3pkQty-A&usqp=CAU);
    
    }
    20%{
      background-image: url(https://c8.alamy.com/comp/WADEMC/beautiful-group-of-sea-fishes-captured-on-camera-under-the-water-under-dark-blue-natural-backdrop-of-the-ocean-or-aquarium-underwater-colorful-fishes-WADEMC.jpg);
    
    }
    30%{
      background-image: url(https://p4.wallpaperbetter.com/wallpaper/607/366/473/animals-rock-beauty-butterfly-fish-percoid-fish-wallpaper-preview.jpg);
    
    }
    40%{
      background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFPesdqDhiU3UAnMdHnCKFd94R8f8eqnSgQDHcGOZKDffW-9YWImR82lyyOaOB_KCA1Q&usqp=CAU);
    
    }
    50%{
      background-image: url(https://i.ytimg.com/vi/4RoNAnAcI4E/maxresdefault.jpg);
     
    }
    60%{
      background-image: url(https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1601111837000/photosp/d2b609a5-c2cf-4fd3-8f41-a6d36a35b106/stock-photo-animal-nature-outdoors-beauty-in-nature-water-sea-animals-turtle-ocean-d2b609a5-c2cf-4fd3-8f41-a6d36a35b106.jpg);
      
    }
    70%{
      background-image: url(https://i.ytimg.com/vi/enXCNO-tDaA/maxresdefault.jpg);
    
    }
    80%{
      background-image: url(https://petshoods.com/wp-content/uploads/2019/10/Most-Beautiful-Fish-In-The-World.jpg);
      
    }
    90%{
      background-image: url(https://cdn.britannica.com/q:60/41/162041-050-C9A84846/Red-lionfish.jpg);
    }
    100%{
      background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCok5rpwMtHeHfX0K2UsesSaz0xvCNlObZQg9VOQirSZg06z3ODUp00F74tDeZm1ACTjY&usqp=CAU);
      
    }
  }
  @-webkit-keyframes content{
    0%{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxovw-_FLIjLEFtYvXRuDabsU6WhdJukMQXg&usqp=CAU);
      
      }
      10%{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNJy6cxXTXWUqlSwa_o1qiN4wQT3pkQty-A&usqp=CAU);
      
      }
      20%{
        background-image: url(https://c8.alamy.com/comp/WADEMC/beautiful-group-of-sea-fishes-captured-on-camera-under-the-water-under-dark-blue-natural-backdrop-of-the-ocean-or-aquarium-underwater-colorful-fishes-WADEMC.jpg);
      
      }
      30%{
        background-image: url(https://p4.wallpaperbetter.com/wallpaper/607/366/473/animals-rock-beauty-butterfly-fish-percoid-fish-wallpaper-preview.jpg);
      
      }
      40%{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFPesdqDhiU3UAnMdHnCKFd94R8f8eqnSgQDHcGOZKDffW-9YWImR82lyyOaOB_KCA1Q&usqp=CAU);
      
      }
      50%{
        background-image: url(https://i.ytimg.com/vi/4RoNAnAcI4E/maxresdefault.jpg);
       
      }
      60%{
        background-image: url(https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1601111837000/photosp/d2b609a5-c2cf-4fd3-8f41-a6d36a35b106/stock-photo-animal-nature-outdoors-beauty-in-nature-water-sea-animals-turtle-ocean-d2b609a5-c2cf-4fd3-8f41-a6d36a35b106.jpg);
        
      }
      70%{
        background-image: url(https://i.ytimg.com/vi/enXCNO-tDaA/maxresdefault.jpg);
      
      }
      80%{
        background-image: url(https://petshoods.com/wp-content/uploads/2019/10/Most-Beautiful-Fish-In-The-World.jpg);
        
      }
      90%{
        background-image: url(https://cdn.britannica.com/q:60/41/162041-050-C9A84846/Red-lionfish.jpg);
      }
      100%{
        background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCok5rpwMtHeHfX0K2UsesSaz0xvCNlObZQg9VOQirSZg06z3ODUp00F74tDeZm1ACTjY&usqp=CAU);
        
      }
  }
.content {
  overflow-y:scroll;
    height:100vh;
    color:white;
    animation: content 30s infinite;
    background-repeat: no-repeat;
background-size: cover;
background-position-y: center;
background-position-x: center;

background-color: rgb(0, 183, 255,0.4);
background-blend-mode: darken;
}
.sidebar{
    position:sticky;
    width: 0px;
    height: 0px;
    background-color: black;
    color: white;
    transition:0.3s;
    flex-shrink:0;
    overflow:hidden;
    &.show{
        width: 140px;
        height: 740px;
        background-color: black;
        color: white;
     
    }
}
header{
    position:sticky;
    background-color: rgb(0, 183, 255);
   
}
.whole {
    flex:1;
}
.textm {
    text-align:center;
    margin-top:20px;
}
.batn1 {
    color:white;
  
    list-style-type: none;
}
.href:hover{
    color:rgb(0, 183, 255);
}
.links {
    padding-top:100px;
    text-align:center;
}
a{
    text-decoration: none;
}
.bars {
    display:flex;
}
.table{
    background-color:   rgba(80, 217, 235, 0.5);
    width:800px;
    margin-left:200px;
   padding-top:100px;
}
.table:hover{
    background-color:  rgb(139, 239, 248);
}
.text:hover{
    color:white;
}

.row {
  width: 100%;
  
}
.write {
  color: rgb(255, 56, 56);
  margin-top: 80px;
  border-radius: 30px;
}
.bg {
  border-radius: 20px;
  background-color: rgb(7, 92, 86,0.3);
  width:80%;
  margin-left:200px;
}
.bg:hover{
  box-shadow: 3px  10px 10px 4px rgb(110, 250, 250); 
  background-color: rgb(7, 92, 86);
  color: rgb(12, 49, 218);
 
}
.divs:hover{
  color: rgb(12, 49, 218);
}
`
const Todos = () => {
  const dispatch = useDispatch()
  const isSidebarshow = useSelector(state => state.isSidebarshow)
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    setTodos(dispatch)
  }, [])

  return (
    <TodosWrapper >

      <div className={`sidebar ${isSidebarshow ? "show" : ""}`}>
        < h3 className="textm"> Menu</h3>
        <div className="links">
          <Link className="href" href="/Homepage" > <a> <Button className="batn1">
            <li className="href">Home</li> </Button ></a>
          </Link>

          <Link href="/photos"> <a> <Button className="batn1"> <li className="href">Photos</li>
          </Button ></a>
          </Link>
          <Link href="/userspage"> <a> <Button className="batn1">
            <li className="href">User</li> </Button ></a>
          </Link>
          <Link href="/Todos"> <a> <Button className="batn1"> <li className="href">Todos</li>
          </Button ></a>
          </Link>
        </div>
      </div>
      <div className="whole">
        <header>
          <div className="bars">
            <Button onClick={() => sidebarShow(dispatch)}><MenuIcon></MenuIcon></Button>
            <h3>Next <span className="text-white">js</span >-React <span className="text-white">js</span></h3>
          </div>
          <ul>
            <Link href="/Homepage" > <a> <Button className="batn"> <li>Home</li> </Button ></a></Link>
            <Link href="/Todos"> <a> <Button className="batn"> <li>Todos</li> </Button ></a></Link>
            <Link href="/userspage"> <a> <Button className="batn"> <li>User</li> </Button ></a></Link>
            <Link href="/photospage"> <a> <Button className="batn"> <li>Photos</li> </Button ></a></Link>
          </ul>
        </header>
        <div className="content">
          {todos.map(v =>
            <div className="row">
              <div className="d-flex my-3 justify-content-center bg text-white align-items-center ">
                <div className="d-flex align-items-center">
                  <p className="text-white mt-3">{v.id}</p>
                  <h4 className="m-3 text-danger my-4 divs">{v.title}</h4>
                </div>


              </div>
            </div>

          )
          }
        </div>
      </div>


    </TodosWrapper>
  )
}
export default Todos