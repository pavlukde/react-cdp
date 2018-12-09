export const CoursesService = {
  
    getCourses(setState){
        fetch('http://localhost:3001/courses')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setState({ data });
        });
    }
}