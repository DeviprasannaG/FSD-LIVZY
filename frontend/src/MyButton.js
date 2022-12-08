
const MyButton = ({ to }) => {

  return (
      <a href={`/${to}`}>
          <button style={{fontSize: "24px",color:"blue" ,margin:"30px",background: "lightblue", textTransform: "uppercase"}} className="my-button">
              Take me to {to === '' ? "Main" : to}
          </button>
      </a>
  )
}

export default MyButton;