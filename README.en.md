**Videogames Explorer**

<p align="center">
  <img src="./videogame.png" alt="videogames" width="500" />
</p>

// **Project Description**  
This project originated as a personal initiative to practice my web development skills, using technologies such as React, Redux, Node.js, and PostgreSQL. The goal is to create an application that allows users to explore a vast database of video games, view detailed information about them, filter and sort them, and add new games to the platform.

The project was inspired by my passion for video games and my desire to create something interactive and useful. I learned a lot during the process, not only on the technical side but also in terms of workflow organization and full-stack project management.

// **Objectives**  
- Build an interactive and dynamic application using React, Redux, Node.js, and Sequelize to store and manage video game data.  
- Learn best practices in modern web application development.  
- Strengthen my full-stack development skills, covering both frontend and backend.  
- Practice SQL database usage with PostgreSQL and managing complex data relationships.  
- Implement a clean and user-friendly design, applying the design principles I have learned.

// **Features**  
- **Video Game Search**: Users can search for video games by name using an external API.  
- **Filtering and Sorting**: Users can filter and sort video games by different criteria such as genre and rating, without relying on the predefined functionalities of the API.  
- **Create New Video Games**: Users can add their own video games through a form, including details like name, description, release date, rating, and platforms.  
- **Pagination**: Search results and database games are paginated to facilitate easy navigation.

// **Technologies Used**  
- **Frontend**: React, Redux, CSS  
- **Backend**: Node.js, Express, Sequelize, PostgreSQL  
- **Testing**: Jest, React Testing Library, Supertest  
- **External APIs**: RAWG API for video game data

// **Installation and Setup**  
1. **Clone the repository**:  
   
   git clone https://github.com/IngridBianchi/Videogames-Explorer 
   

2. **Install dependencies**:  
   - In the `client` directory:  
       
     cd client  
     npm install  
     
   - In the `api` directory:  
     
     cd api  
     npm install  
     

3. **Set up the `.env` file**:  
   In the `api` directory, create a `.env` file with the following structure:  
   
   DB_USER=your_postgres_user  
   DB_PASSWORD=your_postgres_password  
   DB_HOST=localhost  
   API_KEY=your_rawg_api_key  
   
   Remember to get your API Key from the RAWG API to make requests.

4. **Start the server**:  
   - For the backend server (`api`):  
     
     cd api  
     npm run dev  
     
   - For the frontend (`client`):  
     
     cd client  
     npm start  
     

// **Project Structure**  
**Frontend**  
The user interface is built with React and managed with Redux. The main pages/screens are as follows:  
- **Landing Page**: An attractive landing page with a button to access the main page.  
- **Main Route**: Contains a search bar, genre filters, sorting options, and pagination for video games.  
- **Game Detail Route**: Displays detailed information about a selected game, including image, description, release date, rating, and platforms.  
- **Create Game Route**: Allows users to add a new game with controlled information via a JavaScript-validated form.

**Backend**  
The backend is built with Node.js and Express and uses Sequelize to interact with a PostgreSQL database. The main endpoints are:  
- `GET /videogames`: Retrieves all available video games.  
- `GET /videogames?name="..."`: Searches video games by name.  
- `GET /videogame/{id}`: Retrieves details of a specific video game.  
- `POST /videogames`: Creates a new video game in the database.

// **Future Improvements and Features**  
- **User Authentication**: Add a login and registration system so users can save their favorite video games.  
- **Refined User Interface**: Improve the visual design and user experience.  
- **Advanced Search Features**: Implement a more sophisticated search system with multiple filters.

// **Conclusion**  
This project is one of the ways I can practice my web development skills, tackling both the backend and frontend while learning new tools and techniques. Additionally, it is a great example of how a personal project can provide both learning and personal satisfaction while creating something useful for the community.

// **Acknowledgments**  
Thanks to all the resources and tutorials available online, and especially to the open-source community for providing the tools needed to complete this project.