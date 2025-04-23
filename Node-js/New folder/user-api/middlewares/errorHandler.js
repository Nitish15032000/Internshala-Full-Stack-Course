const errorHandler = (err, req, res, next) => {
   console.error(err.stack);
   
   if (err.name === 'ValidationError') {
     return res.status(400).json({ success: false, error: err.message });
   }
   
   if (err.name === 'CastError') {
     return res.status(400).json({ success: false, error: 'Invalid user ID' });
   }
 
   res.status(500).json({ success: false, error: 'Server error' });
 };
 
 const notFound = (req, res) => {
   res.status(404).json({ success: false, error: 'Endpoint not found' });
 };
 
 module.exports = { errorHandler, notFound };