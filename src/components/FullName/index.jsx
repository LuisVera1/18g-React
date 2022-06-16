import './fullName.css'

export default function Fullname(props) {
  return (
    <p>{props.firstName + " " + props.lastName}</p>
  )
}