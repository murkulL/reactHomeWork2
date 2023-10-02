import Card from './components/Card/Card';

function App() {
  const courses = [
    {
      id: 1,
      image:
        'https://ultimatecourses.com/assets/share/courses/react-f02200115da09fd485a296e351972d7ea75701ed8d3d023d9f18c4b38e6b18b0.png',
      level: 'Intermediate',
      title: 'Introduction Basic Programming HTML & CSS',
      user: {
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
        name: 'Alex',
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      duration: 5400,
      time: '1h30m',
      levelOfCourse : 'Beginner',
    },
    {
      id: 2,
      image:
        '//cdn.coursehunter.net/courses/270x160/typescript-bootcamp-ot-nulya-do-masterstva.jpg',
      level: 'Intermediate',
      title: 'Introduction Basic Programming HTML & CSS',
      user: {
        avatar:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png',
        name: 'John Doe',
      },
      rating: 4.5,
      students: 1234,
      modules: 5,
      finishedModules: 3,
      duration: 5400,
      isMyCource: true,
      time: '1h20m',
      levelOfCourse : 'Elementary',
    },
  ];

  return (
  
    <div className='cards' style={{display: 'flex', gap: '50px', justifyContent:'center', marginTop: '20px'}}> 
      {courses.map((course) => (
        <Card 
        id={course.id} 
        img={course.image}
        title={course.title}
        level={course.level}
        user={course.user}
        rating={course.rating}
        modules={course.modules}
        time={course.time}
        students={course.students}
        duration={course.duration}
        isMyCource={course.isMyCource}
        levelOfCourse={course.levelOfCourse}
        />
      ))}
    </div>
  );
}

export default App;
