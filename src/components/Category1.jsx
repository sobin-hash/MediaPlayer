import React, { useEffect, useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addCat, updateCategory } from '../services/allApi';
import { getCategory,deleteCategory,getSpecificVideos} from '../services/allApi';
import Videocard from './Videocard';


function Category1() {
    const [show, setShow] = useState(false);
    const [allCategories,setallCategories]=useState([])

    const handleClose = () => setShow(false);
    const [category1,setCategory1]=useState({id:'',categoryName:'',allVideos: []});
    
    const handleShow = () => setShow(true);

    

    const handleCategoryDetails=(e)=>{
        const {name,value}=e.target
        setCategory1({...category1,[name]:value})
        console.log("hhhhhhhhhhhhhh",category1)
        

    }


    const showCategory=async()=>{
        const res = await getCategory()
        console.log(res.data)
        setallCategories(res.data)
        

    }


    const deleteCategorys=async(id)=>{
        let res = await deleteCategory(id)
        console.log(res)
        if(res.status>=200 && res.status<300){
          toast.success("Category deleted successfully!!")
          showCategory()
          
        }else{
          toast.error("Category Deletion Failed..!!")
        }
    
      }

    


    const uploadCategory =async ()=>{
        
        // console.log(res)    
        if(!category1.id ||!category1.categoryName){
            toast.error("enter valid category")
        }else{
            const res=await addCat(category1)
            if(res.status>=200 && res.status<300){
                setShow(false)
                toast.success("Category Added!!")
                showCategory()
                
            }else{
                toast.error("Failed!!!!!!!!!!")
            }
        }

    }

    const onDropHandle=async(e,id)=>{
        console.log("drop target id :",id)
        let videoid = e.dataTransfer.getData("videoid")
        console.log("video id:",videoid)
        const video = await getSpecificVideos(videoid)
        console.log(video.data,"dtatata")
        let selectedCategory = allCategories?.find(item=>item?.id===id)

        selectedCategory.allVideos.push(video.data)
        // console.log(selectedCategory)
        const res  = await updateCategory(id,selectedCategory)
        console.log(res)
        if(res.status>=200 && res.status<300){
            toast.success("Successssssssssss")
            showCategory()
            
        }


    }

    //draging

    const dragOver=(e)=>{
        e.preventDefault()
        console.log("dragging over!!")

    }

    

    useEffect(()=>{
        showCategory()
    },[])

    
    
    return (
        <>

            <div className='d-grid'>
                <button onClick={handleShow} className='mx-2 my-5'>Add category</button>

            </div>
                {
                    allCategories.map((item)=>(
                        <div className='bg-primary m-3 p-3 border border shadow rounded' droppable onDragOver={dragOver} onDrop={(e)=>onDropHandle(e,item?.id)}>
                            <div>
                            <span>{item?.categoryName}</span>
                            <span style={{float:'right'}} onClick={()=>deleteCategorys(item.id)}><i class='fa-solid fa-trash' style={{color:'#ff0000'}}></i></span>
                            </div>
                            <div>
                                {
                                    item?.allVideos.map(video=>(
                                        <Videocard video={video} isCategory={true}/>
                                    ))
                                }
                            </div>
                        </div>
                        
                    ))
                }
                
            

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="floatingId"
                        label="Enter Unique Id"
                        className="mb-3"
                    >
                        <Form.Control type="text" name='id' placeholder="Enter unique Id" onChange={(e)=>handleCategoryDetails(e)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingCategory" label="Category">
                        <Form.Control type="text" name='categoryName' placeholder="Category" onChange={(e)=>handleCategoryDetails(e)} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button style={{width:'100%'}} variant="primary" onClick={uploadCategory}>Add</Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default Category1