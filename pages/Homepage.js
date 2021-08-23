import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { Button, Link, Fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarShow } from '../redux/action';

import { useDispatch, useSelector } from 'react-redux';
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
        width: 140px;
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
.href{
    list-style-type: none;
    color:white;
}
.href:hover{
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


const Homepage = () => {
    const dispatch = useDispatch()
    const isSidebarshow = useSelector(state => state.isSidebarshow)
    return (
        <HomeWrapper>
            <div className="MainContent">
                <div className={`sidebar ${isSidebarshow ? "show" : ""}`}>
                    < h3 className="textm"> Menu</h3>

                    <div className="links">
                        <Slide>
                            <Link className="href link1" href="/Homepage" > <a> <Button className="batn1">
                                <li className="href">Home</li> </Button ></a>
                            </Link>
                        </Slide>
                        <Slide>
                            <Link href="/photospage" className="href link2"> <a> <Button className="batn1">
                                <li className="href">Album</li> </Button ></a>
                            </Link>
                        </Slide>
                        <Slide>
                            <Link href="/userspage" className="href link3" > <a> <Button className="batn1"> <li className="href">User</li>
                            </Button ></a>
                            </Link>
                        </Slide>
                        <Slide>
                            <Link href="/Todos" className="href link4"> <a> <Button className="batn1"> <li className="href">Todos</li>
                            </Button ></a>
                            </Link>
                        </Slide>
                        <Slide>
                            <Link href="/photospage" className="href link5"> <a> <Button className="batn1"> <li className="href">Photos</li>
                            </Button ></a>
                            </Link>
                        </Slide>
                    </div>

                </div>
                <div className="whole">
                    <header>
                        <div className="bars">
                            <Button className="batnmain" onClick={() => sidebarShow(dispatch)}><MenuIcon></MenuIcon></Button>
                            <h3>Next <span className="text-white">js</span >-React <span className="text-white">js</span></h3>
                        </div>
                        <ul className="man">
                            <Slide>
                                <Link href="/Homepage" > <a> <Button id="myDIV" className="batn"> <li>Home</li> </Button ></a></Link>
                                <Link href="/Todos"> <a> <Button className="batn"> <li>Todos</li> </Button ></a></Link>
                                <Link href="/userspage"> <a> <Button id="myDIV" className="batn"> <li>User</li> </Button ></a></Link>
                                <Link href="/photospage"> <a> <Button className="batn"> <li>Photos</li> </Button ></a></Link>
                            </Slide>
                        </ul>
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
            <div className="secondcontend">
                <h1 className="text-dark">Full stack programmer</h1>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-sm-10 textMain">
                        <Slide>
                            <h1 className="text-danger">Here you can find activities to practise your writing skills.
                             You can improve your writing by understanding!
                      </h1>
                        </Slide>
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <Slide left>
                            <img className="grogrammer" src="https://myielts.kz/wp-content/uploads/2017/10/internet-invention.jpg"></img>
                        </Slide>
                    </div>
                </div>

            </div>
        </HomeWrapper >
    )
}
export default Homepage