import styles from './ProjectsStyles.module.css';
import Chat from '../../assets/Chat.png';
import Delivery from '../../assets/FoodDelivery.png';
import Crud from '../../assets/Crud.png';
import Booking from '../../assets/booking.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Portfolio Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Chat}
          link="https://github.com/Hamza1911/chat"
          h3="Communication"
          p="Chat App"
        />
        <ProjectCard
          src={Delivery}
          link="https://github.com/Hamza1911/FoodDelivery"
          h3="Food"
          p="Food Delivery App"
        />
        <ProjectCard
          src={Booking}
          link="https://github.com/Hamza1911/laughing-ramen"
          h3="Travel Guide"
          p="Booking"
        />
        <ProjectCard
          src={Crud}
          link="https://github.com/Hamza1911/crud"
          h3="Data Bank"
          p="CRUD"
        />
      </div>
    </section>
  );
}

export default Projects;
