import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow, setTodos } from '../redux/action';
import { useEffect } from 'react';
import Link from 'next/link';
const TodosWrapper = styled.div`
display:flex;

background-color: rgb(0, 183, 255,0.9);

.content {
  overflow-y:scroll;
    height:100vh;
    color:white;


    background-color: rgba(85, 241, 255);
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
        width: 300px;
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
li:hover{
    color:rgb(0, 183, 255);
    list-style-type: none;
}
.links {
    padding-top:100px;
    text-align:center;
}
li{
  list-style-type: none;
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
          <ul className="uls"><li>
            <Button><Link className="barlink" href="/homepage"><a className="barlink text-white">Home</a></Link></Button></li>
            <li>  <Button><Link className="barlink" href="/userspage"><a className="barlink text-white">User</a></Link></Button></li>
            <li>       <Button><Link className="barlink" href="todos"><a className="barlink text-white">Todos</a></Link></Button></li>
            <li> <Button><Link className="barlink" href="photos"><a className="barlink text-white">Photos</a></Link></Button></li>

          </ul >
        </div>
      </div>
      <div className="whole">
        <header>
          <div className="bars">
            <Button onClick={() => sidebarShow(dispatch)}><MenuIcon></MenuIcon></Button>
            <h3>Next <span className="text-white">js</span >-React <span className="text-white">js</span></h3>
          </div>
          <ul>
            <Button><Link className="barlink" href="/homepage"><a className="barlink text-white">Home</a></Link></Button>
            <Button><Link className="barlink" href="/userspage"><a className="barlink text-white">User</a></Link></Button>
            <Button><Link className="barlink" href="todos"><a className="barlink text-white">Todos</a></Link></Button>
            <Button><Link className="barlink" href="photos"><a className="barlink text-white">Photos</a></Link></Button>

          </ul>
        </header>
        <div className="content">
          {todos ?.map(v =>
            <div className="row">
              <div className="d-flex my-3 justify-content-center bg text-white align-items-center col-md-5 col-sm-10 ">
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


    </TodosWrapper >
  )
}
export default Todos