import './App.css';
import { Container,Button } from 'react-bootstrap';
import { facebookProvider, githubProvider, googleProvider } from './config/authMethods';
import socialMediaAuth from './server/auth';
// import { Button } from 'bootstrap';

function App() {
  const handleOnClick = async(provider) => {
    const res = await socialMediaAuth(provider)
    console.log(res)
  }
  return (
     <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
       <div className='w-100' style={{maxWidth:'400px'}}>
       <Button onClick={()=> handleOnClick(facebookProvider)}>Facebook</Button>
       <Button onClick={()=> handleOnClick(githubProvider)}>Github</Button>
       <Button onClick={()=> handleOnClick(googleProvider)}>Google</Button>
       </div> 
     </Container>
  );
}

export default App;
