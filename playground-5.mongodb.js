// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('agrre');

// Create a new document in the collection.
db.getCollection('books').insertMany(
[
    {
      "_id": 1,
      "title": "The Great Gatsby",
      "author_id": 100,
      "genre": "Classic"
    },
    {
      "_id": 2,
      "title": "Nineteen Eighty-Four",
      "author_id": 101,
      "genre": "Dystopian"
    },
    {
      "_id": 3,
      "title": "To Kill a Mockingbird",
      "author_id": 102,
      "genre": "Classic"
    }
  ]
  
);
db.sales.aggregate([
  {
    $group: {
      _id:null,
      totalsales: {
        
        $sum:"sales"
      }
    },
    {
      $project:{
        _id:0,
        totalsales:1
      }
    }
  }
])