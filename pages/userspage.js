import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setUser } from "../redux/action"
import styled from 'styled-components'
import { Button, Link, Table, TableHead, TableRow } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow } from '../redux/action';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
const UserWrapper = styled.div`

display:flex;
background-image: url(https://www.myfitness.ee/wp-content/uploads/2016/05/nature-wallpaper-07.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position-y: center;
background-color: rgb(0, 183, 255);
background-blend-mode: darken;
.content {
    height:100vh;
    color:white;
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
`


const Userpage = () => {
    const dispatch = useDispatch()
    const isSidebarshow = useSelector(state => state.isSidebarshow)
    const users = useSelector(state => state.user);

    useEffect(() => {
        setUser(dispatch)
    }, [])



    return (
        <UserWrapper>

            <div className={`sidebar ${isSidebarshow ? "show" : ""}`}>
                < h3 className="textm"> Menu</h3>
                <div className="links">
                    <Link className="href" href="/Homepage" > <a> <Button className="batn1">
                        <li className="href">Home</li> </Button ></a>
                    </Link>

                    <Link href="/photospage"> <a> <Button className="batn1"> <li className="href">Photos</li>
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
                    < Table className="table col-md-4 col-sm-5 col-lg-3">
                        <TableHead>
                            <TableRow className="rows">
                                <TableCell className="text"><span className="text-danger">ID</span></TableCell>
                                <TableCell className="text"><span className="text-danger">Name</span></TableCell>
                                <TableCell className="text"><span className="text-danger">username</span></TableCell>
                                <TableCell className="text"><span className="text-danger">Email</span></TableCell>
                                <TableCell className="text"><span className="text-danger">Phone</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users ?.map(v =>
                                <TableRow>
                                    <TableCell className="text">{v.id}</TableCell>
                                    <TableCell className="text">{v.name}</TableCell>
                                    <TableCell className="text">{v.username}</TableCell>
                                    <TableCell className="text">{v.email}</TableCell>
                                    <TableCell className="text">{v.phone}</TableCell>

                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </UserWrapper>
    )
}
export default Userpage