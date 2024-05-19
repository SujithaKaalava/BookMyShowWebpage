import Navbar from "../Components/Navbar/Navbar.Componente";



const DefaultLayoutHoc = (Component) =>({...props})=>{
  return (
    <div>
      <Navbar/>
      <Component {...props}/>
      <div>Footer</div>
    </div>
  )
}

export default DefaultLayoutHoc;
