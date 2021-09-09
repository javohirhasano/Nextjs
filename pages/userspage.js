import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { setUser } from "../redux/action"
import styled from 'styled-components'
import { Button, Table, TableHead, TableRow } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow } from '../redux/action';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useRouter } from 'next/router'
import Link from 'next/link'

const UserWrapper = styled.div`
display:flex;
background-color: white;
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
        width: 300px;
        height: 760px;
        background-color: rgb(13, 9, 61);
        color: white;
    }
}
header{
    position:sticky;
    background-color:white;
   box-shadow:0px 4px 20px 0px;
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
    margin-top:10px;
    text-decoration: none;
}
li:hover{
    color:rgb(0, 183, 255);
    list-style-type: none;
    text-decoration: none;
}
li{
    list-style-type: none;
    display:block;
}
.links {
    padding-top:50px;
}
a{
    text-decoration: none;
}
.bars {
    display:flex;
}
.table{
    background-color: white;
    width:100%;
   height:100vh;
   margin-top:20px;
}
.uls{
display:block;
}
`
const Userpage = () => {
    const router = useRouter()
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
                    <ul className="uls"><li>
                        <Button><Link className="barlink" href="/homepage"><a className="barlink text-white">Home</a></Link></Button></li>
                        <li>  <Button><Link className="barlink" href="/userspage"><a className="barlink text-white">User</a></Link></Button></li>
                        <li>       <Button><Link className="barlink" href="todos"><a className="barlink text-white">todos</a></Link></Button></li>
                        <li> <Button><Link className="barlink" href="photos"><a className="barlink text-white">Photos</a></Link></Button></li>

                    </ul >
                </div>
            </div>
            <div className="whole">
                <header>
                    <div className="bars">
                        <Button onClick={() => sidebarShow(dispatch)}><MenuIcon></MenuIcon></Button>
                        <h3>Next <span className="text-primary">js</span >-React <span className="text-white">js</span></h3>
                    </div>
                    <Button><Link className="barlink text-dark" href="/homepage"><a className="barlink text-white">Home</a></Link></Button>
                    <Button><Link className="barlink" href="/userspage"><a className="barlink text-white">User</a></Link></Button>
                    <Button><Link className="barlink" href="todos"><a className="barlink text-white">Todos</a></Link></Button>
                    <Button><Link className="barlink" href="photos"><a className="barlink text-white">Photos</a></Link></Button>
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
                                <TableCell className="text"><span className="text-danger">Action</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="row">
                            {users ?.map(v =>
                                <TableRow className="col-md-4 col-sm-8">
                                    <TableCell className="text">{v.id}</TableCell>
                                    <TableCell className="text">{v.name}</TableCell>
                                    <TableCell className="text">{v.username}</TableCell>
                                    <TableCell className="text">{v.email}</TableCell>
                                    <TableCell className="text">{v.phone}</TableCell>
                                    <TableCell className="text"><Button onClick={() => router.push(`/user/${v.id}`)}>Open</Button></TableCell>

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