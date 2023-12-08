const express = require('express')
const router = express.Router()
const Detail = require('../models/detail')

//to get all the details
router.get('/',async(req,res)=>{
   try{
     const details=await Detail.find()   //find() = fetch all data
     res.json(details)
   }
   catch(err)
   {
         res.send('Error in get request... '+err)
   }
})

//To get Particular detail by id
router.get('/:id',async(req,res)=>{
    try{
      const detail=await Detail.findById(req.params.id)   
      res.json(detail)
    }
    catch(err)
    {
          res.send('Error in get request by id... '+err)
    }
 })
 
//To post any data to database
router.post('/', async(req,res)=>{
    /*
    const detailsofperson= new Detail({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub 
    })
    try{
        const a1 = await detailsofperson.save()
        res.json(a1)
    }
    catch(err)
    {
        res.send('Error in post request...' +err)
    } */
    
    const BlogDetails= new Detail({
        title: req.body.title,
        article: req.body.article,
        BannerImage: req.body.BannerImage,
        publishedAt: req.body.publishedAt
    })
    try{
        const a1 = await BlogDetails.save()
        res.json(a1)
    }
    catch(err)
    {
        res.send('Error in post request...' +err)
    }
    
})

// To update an existing resource (Patch - Small changes)

router.patch('/:id',async(req,res)=>{
   /* try{
        const p1= await Detail.findById(req.params.id)
        const name=req.body.name
        const tech = req.body.tech
        const sub=req.body.sub
        if(name!=null)
        {
            p1.name=name
        }
        if(tech!=null)
        {
            p1.tech=tech
        }
        if(sub!=null)
        {
         p1.sub=sub
        }
        const p2 = await p1.save()
        res.json(p2)
    }
    catch(err)
    {
        res.send('Error in patch request...' + err)
    }
    */

    
     try{
        const p1= await Detail.findById(req.params.id)
        const title =  req.body.title
        const article = req.body.article
        const BannerImage = req.body.BannerImage
        const publishedAt = req.body.publishedAt
        if(title!=null)
        {
            p1.title=title
        }
        if(article!=null)
        {
            p1.article=article
        }
        if(BannerImage!=null)
        {
            p1.BannerImage=BannerImage
        }
        if(publishedAt!=null)
        {
            p1.publishedAt=publishedAt
        }
        const p2 = await p1.save()
        res.json(p2)
    }
    catch(err)
    {
        res.send('Error in patch request...' + err)
    }
    
})

// To delete a record using id

router.delete('/:id',async(req,res)=>{
    try{
        const deletedetails = await Detail.findById(req.params.id)
        const del=await deletedetails.deleteOne()
        res.send('Successfully deleted')
    }
    catch(err)
    {
        res.send('Error in Delete Request...'+err)
    }
})


module.exports = router