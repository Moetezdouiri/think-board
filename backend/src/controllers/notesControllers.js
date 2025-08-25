import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
 try {
  const notes = await Note.find().sort({createdAt: -1});
      res.status(200).json(notes);
  
 } catch (error) {
  console.error("Error in getAllNotes controller", error)
      res.status(500).json({message: "internal serrver error"});
 }
  }
  export async function getNoteById(req,res){ 
    try {
      const note =await Note.findById(req.params.id)
      if(!note)return res.status(404).json({message:"note not found"})
        res.json(note)
    } catch (error) {
        console.error("Error in getNoteById controller", error)
      res.status(500).json({message: "internal serrver error"});
      
    }
    
  }
export async function createNote(req, res) {
   try {
    const {title,content}= req.body
    const newNote =new Note({title,content})
    await newNote.save()
    res.status(201).json({message:"Note cated successfully"})
    
   } catch (error) {
    console.error("Error in createNote controller", error)
    
   }
  }
export async function updateNote(req, res) {
try {
  const {title,content}=req.body
  const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},
    {
      new:true,
    }
  );
  if(!updateNote)return res.status(404).json({message: "not not found"});
  res.status(200).json(updateNote);
} catch (error) {

  console.error("Error in updateNote controller",error);
  res.status(500).json({message:"internal server error"});

  
}
  }
export async function deleteNote(req, res) {
   try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote)return res.status(404).json({message:"note not found"});
    res.status(200).json({message:"note have been deleted successfully"});
    
   } catch (error) {
    console.error("Error in deleteNote controller",error);
  res.status(500).json({message:"internal server error"});
    
   }
  }
