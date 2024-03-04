import { Router } from "express"
import multer from "multer"
import { getAllCard, getByDeleteCard, getByIdCard, getByPostCard, getByPutCard,  } from "../controller/CardController.js"
import { storage } from "../middleware/upload.js"
import { authMiddleware } from "../middleware/authMiddleware.js"


const upload = multer({ storage: storage })
export const CardsRouter = Router()


CardsRouter.get('/', getAllCard)
CardsRouter.get('/:id', getByIdCard)
CardsRouter.post('/', upload.single('image') , getByPostCard)
CardsRouter.put('/:id', upload.single('image') , getByPutCard)
CardsRouter.delete('/:id', getByDeleteCard)