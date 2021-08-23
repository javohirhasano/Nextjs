import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setUser, setPhotos } from "../redux/action"
import styled from 'styled-components'
import { Button, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow } from '../redux/action';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
const UserWrapper = styled.div`

display:flex;
background-image: url(https://mobimg.b-cdn.net/v3/fetch/a9/a9de65de7b8a3136a0f30cecbc6e833b.jpeg);
background-repeat: no-repeat;
background-size: cover;
background-position-y: center;
background-color: rgb(189, 221, 189);
background-blend-mode: darken;
.content {
    height:100vh;
    color:white;
    overflow-y:scroll;
}
.sidebar{
    position:sticky;
    width: 0px;
    height: 0px;
    background-color: black;
    color: white;
    transition:0.5s;
    flex-shrink:0;
    overflow:hidden;
    &.show{
        width: 140px;
        height: 400px;
        background-color: black;
        color: white;
        border-bottom-right-radius: 80px;
    }
}
header{
    position:sticky;
    background-color: rgb(51, 238, 51, 0.4);
   
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
    background-color:  rgb(241, 241, 241);
}
.rasm {
    width:100px;
height:100px;
border-radius:50%;
margin-left:40px;
margin-top:10px;
}
.row{
    display:flex;
  
}
.cards {
    background: rgb(54,66,230);
    background: radial-gradient(circle, rgba(54,66,230,1) 0%, rgba(109,238,121,1) 100%);
    width:200px;
height:200px;
margin:20px;
border-radius:30px;
margin-left:40px;
}
.cards:hover{
    background: rgb(110,198,51);
background: radial-gradient(circle, rgba(110,198,51,1) 0%, rgba(109,135,238,1) 100%);
}
`


const Photos = () => {
    const dispatch = useDispatch()
    const isSidebarshow = useSelector(state => state.isSidebarshow)
    const photos = useSelector(state => state.photos);

    useEffect(() => {
        setPhotos(dispatch)
    }, [])



    return (
        <UserWrapper>

            <div className={`sidebar ${isSidebarshow ? "show" : ""}`}>
                < h3 className="textm"> Menu</h3>
                <div className="links">
                    <Link className="href" href="/Homepage" > <a> <Button className="batn1">
                        <li className="href">Home</li> </Button ></a>
                    </Link>

                    <Link href="/Todos"> <a> <Button className="batn1"> <li className="href">Todos</li>
                    </Button ></a>
                    </Link>
                    <Link href="/userspage"> <a> <Button className="batn1">
                        <li className="href">User</li> </Button ></a>
                    </Link>
                    <Link href="/photospage"> <a> <Button className="batn1"> <li className="href">Photos</li>
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
                        <Link href="/userspage"> <a> <Button className="batn">
                            <li className="href">User</li> </Button ></a>
                        </Link>
                        <Link href="/Todos"> <a> <Button className="batn"> <li className="href">Todos</li>
                        </Button ></a>
                        </Link>
                        <Link href="/photospage"> <a> <Button className="batn"> <li>Photos</li> </Button ></a></Link>
                    </ul>
                </header>
                <div className="content">
                    <div className="row d-flex">
                        {photos ?.map(v =>

                            <div className="col-md-3 col-sm-8 cards">
                                <img className="rasm" src={v.url}></img>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </UserWrapper>
    )
}
export default Photos