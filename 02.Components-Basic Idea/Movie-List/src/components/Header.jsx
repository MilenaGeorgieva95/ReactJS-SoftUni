export default function Header(props){
    return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.subheading}</h2>
    </header>)
}