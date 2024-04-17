import { Request, Response } from "express";
import db from "../models";

// This method returns all categories
const getAllCategories = async (req: Request, res: Response) => {
  db.Category.findAll({ raw: true })
    .then((category: any) => {
      res.json({ category });
    })
    .catch((error: Error) => {
      res.status(500).json({ error: "Database error" });
    });
};

// This method returns a specific category by ID
const getCategoryById = async (req: Request, res: Response) => {
  return;
};

// This method returns all brands for a specific category id
const getCategoryBrands = async (req: Request, res: Response) => {
  const categoryId=req.params.id;
  db.Category.findByPk(categoryId, {
    include: [{model: db.Product,
    attributes: ["brandId"],
    include:{model:db.Brand}
    }]
  })
  .then((category:any)=> {
    res.json({category})
  })
  .catch((error:Error) => {
    res.status(500).json({ error: 'Internal server error' });
})
  return;
};

// This method filters and returns products based on category id and brand id
const filterByCategoryByBrand = async (req: Request, res: Response) => {
  return;
};

// This method returns all brands
const getAllBrands = async (req: Request, res: Response) => {
  db.Brand.findAll({ raw: true })
    .then((brand: any) => {
      res.json({ brand });
    })
    .catch((error: Error) => {
      res.status(500).json({ error: "Database error" });
    });
};

// This method returns a specific brand by ID
const getBrandById = async (req: Request, res: Response) => {
  const brandId = req.params.id;
  db.Brand.findByPk(brandId)
    .then((brand: any) => {
      if (!brand) {
        res.status(404).json({ error: "Brand not found" });

        return;
      }
      res.json({ brand });
    })
    .catch((error: Error) => {
      // tslint:disable-next-line:no-console
      console.error("Error finding Brand:", error);
      res.status(500).json({ error: "Internal server error" });
    });
};

export {
  getAllCategories,
  getCategoryById,
  getCategoryBrands,
  filterByCategoryByBrand,
  getAllBrands,
  getBrandById,
};
