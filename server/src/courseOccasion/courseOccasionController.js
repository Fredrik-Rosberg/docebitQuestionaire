const db = require("../../db");

const getCourseOccasions = async (req, res) => {
  const sqlQuery = "SELECT course.name, course.startdate, course.enddate, test.testname, users.email FROM courseoccasion INNER JOIN course ON course.id = courseoccasion.courseid INNER JOIN users ON users.id = courseoccasion.userid INNER JOIN test ON test.id = course.testid";
  let result = await db.query(sqlQuery);
  res.json(result.rows);
};

const createCourseOccasion =async (req, res)=>{

 try {
   const sqlQuery =
     "INSERT INTO courseoccasion (courseid, userid) VALUES($1, $2)"
     console.log(req.body.userid)
   let result = await db.query(sqlQuery, [
     req.body.courseid,
     req.body.userid
   ]);
   res.json(result);
 } catch (error) {
   res.send(error);
 }

    
}

module.exports={getCourseOccasions, createCourseOccasion}
