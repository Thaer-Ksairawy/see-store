import DB from "../models/productsModel.js"

export const getAllData = async (req, res) =>  {

    try {
      const allData = await DB.findAll();
      res.json({
        data: allData,
        element: allData[0],
        message: allData ? "1" : "0",
      });
    } catch (error) {
      res.json({ data: [], element: {}, message: "2" });
    }
  };
  
  export const getElementById = async (req, res) => {
    try {
      const singleData = await DB.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.json({
        data: [],
        element: singleData[0],
        message: singleData[0] ? "3" : "0",
      });
    } catch (error) {
      res.json({ data: [], element: { id: req.params.id }, message: "2" });
    }
  };
  
  export const createElement = async (req, res) => {
    try {
      console.log(req.body,"KKKKK")
      await DB.create(req.body);
      const allData = await DB.findAll();
      res.json({
        data: allData,
        element: req.body,
        message: allData ? "1" : "0",
      });
    } catch (error) {
      console.log(error);
      res.json({ data: [], element: req.body, message: "2" });
    }
  };
  
  export const updateElement = async (req, res) => {
    console.log(req.body)
    try {
      await DB.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const allData = await DB.findAll();
      res.json({
        data: allData,
        element: req.params.id,
        message: allData ? "1" : "0",
      });
    } catch (error) {
      res.json({ data: [], element: req.params.id, message: "2" });
    }
  };
  
  export const deleteElement = async (req, res) => {
    let err;
    try {
      await DB.destroy({
        where: {
          id: req.params.id,
        },
      });
      const allData = await DB.findAll();
      res.json({
        data: allData,
        element: req.params.id,
        message: allData ? "1" : "0",
      });
    } catch (error) {
      res.json({ data: [], message: "2", element: req.params.id });
    }
  };
  