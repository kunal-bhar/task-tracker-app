import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <p>Task Tracker App allows users to document their chores while also allowing easy priority-wise viewing. Tip: Double-click a task to toggle its reminder status.</p>
      <p>
        Happy Organising!    Developed by  
      <a href="https://resume.io/r/e8BnJSnk9" target="_blank">
        <span className='dev__name'> Kunal Bhargava</span> 
        </a>
        </p>
      <Link to='/'>Return to Tasks</Link>
    </div>
  )
}

export default About
