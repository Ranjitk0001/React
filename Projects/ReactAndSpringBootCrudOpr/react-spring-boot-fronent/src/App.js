
import './App.css';

function App() {
  return (
    <>
      
        <h1>Welcome to React Spring Boot</h1>

        <div className="container mt-5">
           <h1>Bootstrap Table Example</h1> 
           <table className="table table-striped table-hover"> 
            <thead> <tr> 
              <th scope="col">#</th>
               <th scope="col">First Name</th>
                <th scope="col">Last Name</th> 
                <th scope="col">Email</th> </tr> </thead> 
                <tbody> <tr> <th scope="row">1</th> 
                <td>John</td> <td>Doe</td> <td>john.doe@example.com</td> </tr> 
                <tr> <th scope="row">2</th> <td>Jane</td> <td>Smith</td> <td>jane.smith@example.com</td> 
                </tr> </tbody></table></div>
    </>
  );
}

export default App;
