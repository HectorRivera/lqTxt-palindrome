const express = require('express');
const router = express.Router();

const schools = [
  {id:1,school:'Augusta Lewis Troup School',schoolID: '0931511'},
  {id:2,school:'Barnard Environmental Studies Interdistrict Magnet',schoolID:'0930211'},
  {id:3,school:'L.W. Beecher Museum School of Arts & Sciences Interdistrict Magnet',schoolID:'0930311'},
  {id:4,school:'Bishop Woods Architecture & Design Magnet',schoolID:'0934311'},
  {id:5,school:'Brennan-Rogers: The Art of Communication & Media',schoolID:'0932111'},
  {id:6,school:'Celentano Biotech, Health and Medical Magnet',schoolID:'0934811'},
  {id:7,school:'Christopher Columbus Family Academy',schoolID:'0934111'},
  {id:8,school:'Clinton Avenue School',schoolID:'0930611'},
  {id:9,school:'Harry A. Conte West Hills Magnet: A School of Exploration & Innovation',schoolID:'0933111'},
  {id:10,school:'Davis Street Arts & Academics Interdistrict Magnet',schoolID:'0930911'},
  {id:11,school:'East Rock Community and Cultural Studies Magnet',schoolID:'0934611'},
  {id:12,school:'Edgewood Magnet School',schoolID:'0931211'},
  {id:13,school:'Elm City Montessori Magnet School',schoolID:'2910113'},
  {id:14,school:'Fair Haven School',schoolID:'0931611'},
  {id:15,school:'Hill Central School',schoolID:'0930711'},
  {id:16,school:'Benjamin Jepson Multi-Age Interdistrict Magnet',schoolID:'0931811'},
  {id:17,school:'John C. Daniels School of International Communication Interdistrict Magnet',schoolID:'0931311'},
  {id:18,school:'John S. Martinez Sea & Sky STEM Magnet School',schoolID:'0930811'},
  {id:19,school:'King/Robinson Interdistrict Magnet School: An International Baccalaureate World School',schoolID:'0933011'},
  {id:20,school:'Lincoln-Bassett Community School',schoolID:'0932011'},
  {id:21,school:'Mauro-Sheridan Science, Technology & Communications Interdistrict Magnet',schoolID:'0931911'},
  {id:22,school:'Nathan Hale School',schoolID:'0931411'},
  {id:23,school:'Quinnipiac Real World Magnet Math STEM School',schoolID:'0933511'},
  {id:24,school:'Roberto Clemente Leadership Academy for Global Awareness Magnet',schoolID:'0934211'},
  {id:25,school:'Ross Woodward Classical Studies Interdistrict Magnet',schoolID:'0931011'},
  {id:26,school:'Strong 21st Century Communications Magnet and SCSU Lab School',schoolID:'0932811'},
  {id:27,school:'Truman School',schoolID:'0932911'},
  {id:28,school:'West Rock STREAM Academy Interdistrict Magnet',schoolID:'0934911'},
  {id:29,school:'Wexler-Grant Community School',schoolID:'0933211'},
  {id:30,school:'Worthington Hooker School',schoolID:'0933811'}
];

//ROUTE -- Default Default GET returns everything
router.get('/',(req,res)=>{
  //res.send('Course Definition');
  let dbFields =[
    'schoolID',
    'schoolName',
    'studentCount',
    'totalExpenditures',
    'personell',
    'totInstructional',
    'totStaff',
    'noncertified',
    'totNonCert'
  ];
  var db = req.db;
  var collection = db.get('school-collection');
  collection.find({},dbFields,function(e,docs){
    res.json(docs);
  });
});

router.get('/schoolList/',(req,res)=>{
  //res.send('Course Definition');
    res.json(schools);

});

router.get('/myschool/:id',(req,res)=>{
  const school = schools.find(c => c.id === parseInt(req.params.id));
  //const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!school) return res.status(404).send(`School with given ID does not Exist.`);

  res.send(school);
  //res.send('hello World!!');
});

router.get('/getSchool/:id',(req,res)=>{
  const school = schools.find(c => c.id === parseInt(req.params.id));
  //const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!school) return res.status(404).send(`School with given ID does not Exist.`);
  var db = req.db;
  var collection = db.get('school-collection');
  collection.find(
    {schoolID: school.schoolID},
    ['schoolName','studentCount','totalExpenditures'],
    function(e,docs){
    res.json(docs);
  });
  //res.send('hello World!!');
});

router.get('/palindromeQuiz/',(req,res)=>{
  res.render('pages/palindrome')
})

module.exports=router;
