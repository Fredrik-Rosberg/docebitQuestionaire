const db = require("../../db");

const createCourse = async (req, res) => {
  try {
    const sqlQuery =
      "INSERT INTO course (name, startdate, enddate) VALUES($1, $2,$3)";
    let result = await db.query(sqlQuery, [
      req.body.name,
      req.body.startdate,
      req.body.enddate,
    ]);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

const getCourses= async (req, res) => {

    const sqlQuery = "SELECT * FROM course";
    let result=await db.query(sqlQuery);
    res.json(result.rows);


};

const deleteCourse=async(req, res)=>{
let result;
let sqlQuery = "DELETE FROM course WHERE id=$1";
result = await db.query(sqlQuery, [req.params.id]);
console.log(result);
res.json(result);


}
module.exports={createCourse, getCourses, deleteCourse}