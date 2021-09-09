import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow } from '../redux/action';
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {
    const dispatch = useDispatch()
    const isSidebarshow = useSelector(state => state.isSidebarshow)
    return (
        <HomeWrapper>
            <div className="MainContent">
                <div className={`sidebar ${isSidebarshow ? "show" : ""}`}>
                    < h3 className="textm"> Menu</h3>
                    <div className="links">
                        <ul><li>
                            <Button><Link className="barlink" href="/homepage"><a className="barlink text-white">Home</a></Link></Button></li>
                            <li>  <Button><Link className="barlink" href="/userspage"><a className="barlink text-white">User</a></Link></Button></li>
                            <li>       <Button><Link className="barlink" href="todos"><a className="barlink text-white">Todos</a></Link></Button></li>
                            <li> <Button><Link className="barlink" href="photos"><a className="barlink text-white">Photos</a></Link></Button></li>

                        </ul >
                    </div>
                </div>
                <div className="whole">
                    <header className="d-flex justify-content-between">
                        <div className="bars">
                            <Button className="batnmain" onClick={() => sidebarShow(dispatch)}><MenuIcon></MenuIcon></Button>
                            <h3>Next <span className="text-white">js</span >-React <span className="text-white">js</span></h3>
                        </div>
                        <div>
                            <Button className="barlink ms-5"><Link href="/homepage"><a className="barlink text-white">Home</a></Link></Button>
                            <Button><Link className="barlink ms-5" href="/userspage"><a className="barlink text-white">User</a></Link></Button>
                            <Button><Link className="barlink ms-5" href="todos"><a className="barlink text-white">Todos</a></Link></Button>
                            <Button><Link className="barlink ms-5" href="photos"><a className="barlink text-white">Photos</a></Link></Button>
                        </div>
                    </header>
                    <div className="content">
                        <div className="row">
                            <Slide>
                                <div className="col-md-4 text-white d-flex text2">
                                    <h1 className="text1">Unlock the guidance, tools, and resources you need
           to design your best life – then live it. Every. Single. Day.</h1>
                                </div>
                            </Slide>
                            <div className="col-md-4 text-white d-flex text2">
                                <img src=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="secondcontend">
                <h1 >Programmers</h1>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-sm-10 textMain">
                        <Slide>
                            <h1 className="">onversely, a motivating operation that causes a decrease in
                                 the effectiveness of a reinforcer!
                      </h1>
                        </Slide>
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <Slide left>
                            <img className="grogrammer" src="https://img.freepik.com/free-vector/colourful-illustration-of-programmer-working_23-2148281410.jpg?size=338&ext=jpg"></img>
                        </Slide>
                    </div>
                </div>
            </div>
        </HomeWrapper >
    )
}
const HomeWrapper = styled.div`

    .MainContent{
        display:flex;
        background-image: url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/belfast-view-bert-hardy.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: center;
        background-color: rgb(170, 5, 5);
        background-blend-mode: darken;
        .contain{
            overflow-y: scroll;  
    }
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
        height: 780px;
        background-color: black;
        color: white;
       
    }
}
header{
    position:sticky;
}
.whole {
    flex:1;
}
.textm {
    text-align:center;
    margin-top:20px;
}
.link1{
    transition:0s;
}
.link2{
    transition:1.4s;
}
.link3{
    transition:1.7s;
}
.link4{
    transition:2.4s;
}
.link5{
    transition:3.1s;
}
.batn4 {
    color:white;
  
    list-style-type: none;
}
li{
    list-style-type: none;
    color:white;
}
li:hover{
    color:red;
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
@keyframes batnmain{
    0%{
        color:white;
    }
    50%{
color:red;
    }
    100%{
        color:blue;
    }
}
@-webkit-keyframes batnmain{
    0%{
        display:none;
    }
    50%{
        display:inline-block;
    }
    100%{
        display-none;
    }
}
.batnmain{
    animation: content 30s infinite;
}
.secondcontend {
    width:100%;
    height:100vh;
    background-color:white;
    color:red;
    text-align:center;
}
.grogrammer {
    width:500px;
    height:600px;
}
.textMain {
    transform: rotateX(30);
    text-align:center;
    color:black;
}
.textMain:hover{
    transform:scale(1.1,1.1);
}
#myDIV {
  
    animation: mymove 5s infinite;
  }
  
  @keyframes mymove {
    50% {transform: rotate(360deg);}
  }
  `
export default Homepage