import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head"
import styled from 'styled-components'
import { Provider } from 'react-redux';

const AppWrapper = styled.div`
header{
  background-color: red;
  padding:10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header ul li{
  list-style-type: none;
}
ul{
 
}
li{
font-size:17px;
}
li:hover{
  color:white;
}
.text2 {
margin-top:180px;
margin-left:100px;
}
.contain{
  height:100vh;
}
.batn{
  margin-left:20px;
}
.usercontain{
  background-color: white;
  height:100vh;
}
footer{
  width:100%;
  height:50%;
  background-color: black;
  border-top:2px solid brown;
}
.lis{
  color:white;
  list-style-type: none;
  margin-bottom:10px;
}
.foot{
  margin-top:100px;
  display:block;
  margin-left:100px;
}
.listhead1{
  color:white;
  display:block;
  list-style-type: none;

}
.listhead1:hover{
color:rgb(230, 216, 216);
}
.lis:hover{
  color:rgb(230, 216, 216);
  }
  .photo {
    width:50px;
    height:50px;
    border-radius:50%;
  }
  .logos{
    margin-top:100px;

  }
`
// FontAwesomeni sozlash
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";


import store from '../redux/store';
import { Button } from '@material-ui/core';
import Homepage from './homepage';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <AppWrapper>
    <Provider store={store}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
 
      <footer className="d-flex">
        <div className="row">
        <div className="col-md-3 col-sm-10">
          <ul className="foot">
            <li className="listhead1"><a>PAGE</a></li>
            <li className="lis"><a></a></li>
            <li className="lis"><a>Color Shades</a></li>
            <li className="lis"><a>Swatches</a></li>
            <li className="lis"><a>Resources</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-10">
          <ul className="foot">
            <li className="listhead1"><a>Register </a></li>
            <li className="lis"><a>Transfer Domains</a></li>
            <li className="lis"><a>Color </a></li>
            <li className="lis"><a>Manage Domains</a></li>
            <li className="lis"><a>Forums</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-10">
          <ul className="foot">
            <li className="listhead1"><a>Affiliates</a></li>
            <li className="lis"><a>Become An Affiliate</a></li>
            <li className="lis"><a>Color Shades</a></li>
            <li className="lis"><a>Affiliate Portal</a></li>
            <li className="lis"><a>VPS Hosting</a></li>
          </ul>
        </div>
      <div className="logos col-md-3 col-sm-10">
      <Button className="logo" size="small">
          <img src="data:image/png;base64,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
          Vf8RUJ+B8BpSPSGanz4AAAAABJRU5ErkJggg==" className="photo"></img>
       </Button>
       <Button className="logo"  size="small">
        <img src="data:image/png;base64,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" className="photo"></img>
        </Button>
        <Button className="logo"  size="small">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrWvP5OJvFVemghgFj2ttwQCXsBkhd73eTg&usqp=CAU" className="photo"></img>
        </Button>
      </div>
      </div>
      </footer>
    </Provider>

  </AppWrapper>
}
export default MyApp